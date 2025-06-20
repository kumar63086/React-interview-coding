import React, { useState } from 'react'

export const Listsearch = () => {
    const [searchTerm, setSearchTerm] = useState("");
     const products = [
    "Apple iPhone 14",
    "Samsung Galaxy S22",
    "Google Pixel 7",
    "OnePlus 10 Pro",
    "Xiaomi Mi 12",
    "Sony Xperia 5",
    "Realme GT Neo",
    "Motorola Edge 30"
  ];

  const Filter=products.filter((i)=>i.toLowerCase().includes(searchTerm.toLowerCase()))
  return (
    <div>
        <h1>filteredData</h1>
        <input
        type='text'
        value={searchTerm}
        onChange={(e)=>setSearchTerm(e.target.value)}
        placeholder='Enter youre product list'
        />
        <div style={{"marginTop":"20px"}}>
            <ul>
                {
                 Filter.length>0?(
                    Filter.map((i,index)=>
                  (
                    <li key={index}>{i}</li>
                  )
                )
                 ):(
                    <p>No products found</p>
                 )

                }
            </ul>

        </div>
    </div>
  )
}
