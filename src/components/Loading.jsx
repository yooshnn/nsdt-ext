import React from "react";

const Loading = () => {
  return (
    <div className="h-full flex flex-col justify-center items-center">
      <Circles />
      <span>Loading</span>
    </div>
  );
};

function Circles() {
  return (
    <div class="w-full h-12 flex space-x-3 justify-center items-center">
      <div class="w-4 h-4 bg-purple-800 rounded-full animate-loading" />
      <div
        style={{ animationDelay: "0.6s" }}
        class="w-4 h-4 bg-purple-800 rounded-full animate-loading"
      />
      <div
        style={{ animationDelay: "1.2s" }}
        class="w-4 h-4 bg-purple-800 rounded-full animate-loading"
      />
    </div>
  );
}

export default Loading;
