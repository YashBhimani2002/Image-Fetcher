import React from "react";
import { createRoot } from "react-dom/client";
import Popup from "./popup";

const appElement = document.createElement("div");
document.body.appendChild(appElement);
if(!appElement){
    throw new Error("Failed to create app element");
}
const reactRoot = createRoot(appElement);
reactRoot.render(<Popup/>);