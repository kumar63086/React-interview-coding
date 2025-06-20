import React, { useState } from 'react'

export const DarkLightMode = () => {
    const [isDarkMode, setIsDarkMode] = useState(false);

    const darkTheme = {
    backgroundColor: "#000",
    color: "#fff",
    minHeight: "100vh",
    padding: "2rem",
  };

  const lightTheme = {
    backgroundColor: "#fff",
    color: "#000",
    minHeight: "100vh",
    padding: "2rem",
  };
  const buttonStyle = {
    padding: "10px 20px",
    borderRadius: "5px",
    border: "none",
    cursor: "pointer",
    fontWeight: "bold",
    marginBottom: "20px",
  };

    
  return (
    <div style={isDarkMode ? darkTheme : lightTheme}>
      <h1>Dark Light Mode</h1>

      <button style={buttonStyle} onClick={() => setIsDarkMode(!isDarkMode)}>
        {isDarkMode ? "Light" : "Dark"} Mode
      </button>
      <p>
        This is a simple example of how to implement dark and light mode with color changes in React.
      </p>

    </div>
  )
}
