import React from "react";
import { createRoot } from "react-dom/client";

const Options = () => {
  return (
    <div className="Options">
      <h1>OPTIONS</h1>
      <p>description</p>
    </div>
  );
};

const container = document.getElementById("container");
const root = createRoot(container);

root.render(<Options />);
