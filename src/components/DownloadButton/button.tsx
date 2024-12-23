import React from 'react';
import ReactDOM from 'react-dom/client';

const ButtonComponent = () => {
  const handleClick = () => {
    console.log("Button clicked!");
  };

  return (
    <button onClick={handleClick} style={{ padding: '5px', background: 'blue', 
    width:'100px', height:'40px',color: 'white' }}>
      Download
    </button>
  );
};

const container = document.getElementById('image-fetcher-container');
console.log('Mounting React component to', container);
if (container) {
  const root = ReactDOM.createRoot(container);
  root.render(<ButtonComponent />);
}
