import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App"; // Import the App component
import "./index.css"; // Import global styles

// Create React root
const root = ReactDOM.createRoot(document.getElementById("root"));

// Render the application
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
