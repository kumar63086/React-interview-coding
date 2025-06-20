import { useEffect, useState } from "react";
import axios from "axios";

export const ProductList = () => {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");
  const [filteredData, setFilteredData] = useState([]);

  // Fetch API data
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get("https://api.restful-api.dev/objects");
        setData(res.data);
        setFilteredData(res.data);
      } catch (error) {
        console.error("Error fetching data:", error.message);
      }
    };

    fetchData();
  }, []);

  // Filter data on search change
  useEffect(() => {
    const result = data.filter((item) =>
      item.name.toLowerCase().includes(search.toLowerCase())
    );
    setFilteredData(result);
  }, [search, data]);

  return (
    <div style={{ maxWidth: "600px", margin: "30px auto", fontFamily: "Arial" }}>
      <h2>Search API Products</h2>
      <input
        type="text"
        placeholder="Search product name..."
        onChange={(e) => setSearch(e.target.value)}
        value={search}
        style={{
          width: "100%",
          padding: "10px",
          fontSize: "16px",
          marginBottom: "20px",
        }}
      />

      <ul>
        {filteredData.length > 0 ? (
          filteredData.map((item) => (
            <li key={item.id} style={{ padding: "8px 0", borderBottom: "1px solid #ddd" }}>
              <strong>{item.name}</strong>
              {item.data?.brand && (
                <span style={{ color: "#555" }}> - {item.data.brand}</span>
              )}
            </li>
          ))
        ) : (
          <li style={{ color: "gray" }}>No results found</li>
        )}
      </ul>
    </div>
  );
};
