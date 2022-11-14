import React from "react";
import { createRoot } from "react-dom/client";

const Popup = () => {
  return (
    <div className="Popup">
      <div className="bg-purple-800">
        <h1 className="px-4 py-2 text-2xl text-white">POPUP</h1>
      </div>
      <div className="px-4 py-2 text-md">description</div>
    </div>
  );
};

const root = createRoot(document.getElementById("root"));

root.render(<Popup />);
