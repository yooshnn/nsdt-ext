import React from "react";
import { createRoot } from "react-dom/client";

const Popup = () => {
  return (
    <div className="Popup">
      <h1>POPUP</h1>
      <p>description</p>
    </div>
  );
};

const container = document.getElementById("container");
const root = createRoot(container);

root.render(<Popup />);
