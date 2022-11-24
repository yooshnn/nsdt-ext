import React, { useState, useEffect } from "react";
import { createRoot } from "react-dom/client";
import Loading from "./components/Loading.jsx";

const Popup = () => {
  const [activeTabURL, setActiveTabURL] = useState(null);

  useEffect(() => {
    const queryInfo = { active: true, currentWindow: true };
    chrome.tabs.query(queryInfo, (tabs) => {
      let tab = tabs[0];
      setActiveTabURL(tab.url.toString());
      if (matchUrl(activeTabURL) === 1) {
        /*
        chrome.scripting.executeScript({
          target: { tabId: tab.id, allFrames: true },
          files: ["tableLoader.js"],
        });
        */
      }
    });
  }, []);

  // return
  if (!activeTabURL) {
    return <Loading />;
  } else {
    switch (matchUrl(activeTabURL)) {
      case 0:
        return (
          <div className="m-2">
            <span className="text-xl">EXT/ </span>
            <span className="text-base">index.php</span>
          </div>
        );
      case 1:
        return (
          <div className="m-2">
            <span className="text-xl">EXT/ </span>
            <span className="text-base">mypage.php</span>
          </div>
        );
      case 2:
        return (
          <div className="m-2">
            <span className="text-xl">EXT/ </span>
            <span className="text-base">leveltable_make.php</span>
          </div>
        );
      default:
        return <Loading />;
    }
  }
};

const matchUrl = (url) => {
  if (!url) return -1;

  const processed = url.split(/[?#]/)[0];
  const validURL = [
    "https://nosdata.info/zeta/index.php",
    "https://nosdata.info/zeta/mypage.php",
    "https://nosdata.info/zeta/leveltable_make.php",
  ];

  return validURL.indexOf(processed);
};

const root = createRoot(document.getElementById("root"));
root.render(<Popup />);
