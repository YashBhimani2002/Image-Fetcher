import React from "react";
import ReactDOM from "react-dom/client";
import ButtonComponent from "./button";

const container = document.getElementById('imageFetcherContainer');
if (container) {
    console.log('Mounting React component to', container);
    const root = ReactDOM.createRoot(container);
    root.render(<React.StrictMode><ButtonComponent /></React.StrictMode>);
}else{
    console.log("Container not found",container);   
}
