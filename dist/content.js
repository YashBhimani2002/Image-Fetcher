/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
/*!*********************************!*\
  !*** ./src/content/content.tsx ***!
  \*********************************/
__webpack_require__.r(__webpack_exports__);
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const addDownloadButton = (img) => __awaiter(void 0, void 0, void 0, function* () {
    const parent = (img === null || img === void 0 ? void 0 : img.parentElement) || null;
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
        if (parent.querySelector("#image-fetcher-container"))
            return;
        var s = document.createElement("script");
        s.type = "module";
        s.src = chrome.runtime.getURL("buttonComponent.js");
        s.onload = function () { };
        (document.head || document.documentElement).appendChild(s);
    }
});
// Initialize the function to add download buttons to all images
const initialize = () => {
    const images = document.querySelectorAll("img");
    images.forEach((img) => {
        addDownloadButton(img);
    });
};
// Wait for the window to load and then initialize the process
window.addEventListener("load", initialize);


/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udGVudC5qcyIsIm1hcHBpbmdzIjoiOztVQUFBO1VBQ0E7Ozs7O1dDREE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7QUNOQSxpQkFBaUIsU0FBSSxJQUFJLFNBQUk7QUFDN0IsNEJBQTRCLCtEQUErRCxpQkFBaUI7QUFDNUc7QUFDQSxvQ0FBb0MsTUFBTSwrQkFBK0IsWUFBWTtBQUNyRixtQ0FBbUMsTUFBTSxtQ0FBbUMsWUFBWTtBQUN4RixnQ0FBZ0M7QUFDaEM7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0RBQXdEO0FBQ3hELHFEQUFxRDtBQUNyRCw0Q0FBNEM7QUFDNUMsNkNBQTZDO0FBQzdDLDZDQUE2QztBQUM3Qyx3REFBd0Q7QUFDeEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNVIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovLy93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovLy8uL3NyYy9jb250ZW50L2NvbnRlbnQudHN4Il0sInNvdXJjZXNDb250ZW50IjpbIi8vIFRoZSByZXF1aXJlIHNjb3BlXG52YXIgX193ZWJwYWNrX3JlcXVpcmVfXyA9IHt9O1xuXG4iLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgX19hd2FpdGVyID0gKHRoaXMgJiYgdGhpcy5fX2F3YWl0ZXIpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcbiAgICBmdW5jdGlvbiBhZG9wdCh2YWx1ZSkgeyByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBQID8gdmFsdWUgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHZhbHVlKTsgfSk7IH1cbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBhZG9wdChyZXN1bHQudmFsdWUpLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xuICAgIH0pO1xufTtcbmNvbnN0IGFkZERvd25sb2FkQnV0dG9uID0gKGltZykgPT4gX19hd2FpdGVyKHZvaWQgMCwgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgY29uc3QgcGFyZW50ID0gKGltZyA9PT0gbnVsbCB8fCBpbWcgPT09IHZvaWQgMCA/IHZvaWQgMCA6IGltZy5wYXJlbnRFbGVtZW50KSB8fCBudWxsO1xuICAgIGlmIChwYXJlbnQpIHtcbiAgICAgICAgLy8gQ3JlYXRlIGEgY29udGFpbmVyIGZvciB0aGUgYnV0dG9uXG4gICAgICAgIGNvbnN0IGJ1dHRvbkNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIGJ1dHRvbkNvbnRhaW5lci5pZCA9IFwiaW1hZ2UtZmV0Y2hlci1jb250YWluZXJcIjsgLy8gVGhpcyBpcyB0aGUgSUQgd2hlcmUgUmVhY3Qgd2lsbCBtb3VudCB0aGUgY29tcG9uZW50XG4gICAgICAgIGJ1dHRvbkNvbnRhaW5lci5zdHlsZS5wb3NpdGlvbiA9IFwiYWJzb2x1dGVcIjsgLy8gUG9zaXRpb24gdGhlIGJ1dHRvbiBhYnNvbHV0ZWx5IHdpdGhpbiB0aGUgcGFyZW50XG4gICAgICAgIGJ1dHRvbkNvbnRhaW5lci5zdHlsZS50b3AgPSBcIjEwcHhcIjsgLy8gQWRqdXN0IGJ1dHRvbiBwb3NpdGlvbiB2ZXJ0aWNhbGx5XG4gICAgICAgIGJ1dHRvbkNvbnRhaW5lci5zdHlsZS5sZWZ0ID0gXCIxMHB4XCI7IC8vIEFkanVzdCBidXR0b24gcG9zaXRpb24gaG9yaXpvbnRhbGx5XG4gICAgICAgIGJ1dHRvbkNvbnRhaW5lci5zdHlsZS56SW5kZXggPSBcIjEwXCI7IC8vIEVuc3VyZSBidXR0b24gYXBwZWFycyBhYm92ZSB0aGUgaW1hZ2VcbiAgICAgICAgYnV0dG9uQ29udGFpbmVyLnN0eWxlLmJvcmRlciA9IFwiM3B4IHNvbGlkIHJlZFwiOyAvLyBPcHRpb25hbCBzdHlsaW5nIGZvciB0aGUgYnV0dG9uIGNvbnRhaW5lclxuICAgICAgICAvLyBFbnN1cmUgdGhlIHBhcmVudCBoYXMgYSByZWxhdGl2ZSBwb3NpdGlvbiBzbyB0aGUgYnV0dG9uIGlzIHBsYWNlZCBjb3JyZWN0bHlcbiAgICAgICAgcGFyZW50LnN0eWxlLnBvc2l0aW9uID0gXCJyZWxhdGl2ZVwiO1xuICAgICAgICBwYXJlbnQuYXBwZW5kQ2hpbGQoYnV0dG9uQ29udGFpbmVyKTtcbiAgICAgICAgaWYgKHBhcmVudC5xdWVyeVNlbGVjdG9yKFwiI2ltYWdlLWZldGNoZXItY29udGFpbmVyXCIpKVxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB2YXIgcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzY3JpcHRcIik7XG4gICAgICAgIHMudHlwZSA9IFwibW9kdWxlXCI7XG4gICAgICAgIHMuc3JjID0gY2hyb21lLnJ1bnRpbWUuZ2V0VVJMKFwiYnV0dG9uQ29tcG9uZW50LmpzXCIpO1xuICAgICAgICBzLm9ubG9hZCA9IGZ1bmN0aW9uICgpIHsgfTtcbiAgICAgICAgKGRvY3VtZW50LmhlYWQgfHwgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50KS5hcHBlbmRDaGlsZChzKTtcbiAgICB9XG59KTtcbi8vIEluaXRpYWxpemUgdGhlIGZ1bmN0aW9uIHRvIGFkZCBkb3dubG9hZCBidXR0b25zIHRvIGFsbCBpbWFnZXNcbmNvbnN0IGluaXRpYWxpemUgPSAoKSA9PiB7XG4gICAgY29uc3QgaW1hZ2VzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcImltZ1wiKTtcbiAgICBpbWFnZXMuZm9yRWFjaCgoaW1nKSA9PiB7XG4gICAgICAgIGFkZERvd25sb2FkQnV0dG9uKGltZyk7XG4gICAgfSk7XG59O1xuLy8gV2FpdCBmb3IgdGhlIHdpbmRvdyB0byBsb2FkIGFuZCB0aGVuIGluaXRpYWxpemUgdGhlIHByb2Nlc3NcbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwibG9hZFwiLCBpbml0aWFsaXplKTtcbmV4cG9ydCB7fTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==