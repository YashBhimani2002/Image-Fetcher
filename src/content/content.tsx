// Function to add the download button next to an image
import { Path } from "typescript";
const addDownloadButton = async (img: HTMLImageElement) => {
  const parent = img?.parentElement || null;
  if (parent) {
    // Create a container for the button
    const buttonContainer = document.createElement("div");
    buttonContainer.id = "image-fetcher-container"; // This is the ID where React will mount the component
    buttonContainer.style.position = "absolute"; // Position the button absolutely within the parent
    buttonContainer.style.top = "10px"; // Adjust button position vertically
    buttonContainer.style.left = "10px"; // Adjust button position horizontally
    buttonContainer.style.zIndex = "10"; // Ensure button appears above the image
    buttonContainer.style.border = "3px solid red"; // Optional styling for the button container
    // Ensure the parent has a relative position so the button is placed correctly
    parent.style.position = "relative";
    parent.appendChild(buttonContainer);
    if (parent.querySelector("#image-fetcher-container")) return;
    var s = document.createElement("script");
    s.type = "module";
    s.src = chrome.runtime.getURL("buttonComponent.js");
    s.onload = function () { };
    (document.head || document.documentElement).appendChild(s);

  }
};

// Initialize the function to add download buttons to all images
const initialize = () => {
  const images = document.querySelectorAll("img");
  images.forEach((img) => {
    addDownloadButton(img);
  });

};

// Wait for the window to load and then initialize the process
window.addEventListener("load", initialize);
