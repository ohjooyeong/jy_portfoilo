import { useEffect, useRef, useState } from "react";
import "./App.css";
import "fullpage.js/vendors/scrolloverflow"; // Optional. When using scrollOverflow:true
import ReactFullpage from "@fullpage/react-fullpage";

function App() {
  return (
    <ReactFullpage
      licenseKey={"YOUR_LICENSE_KEY"}
      scrollOverflow={true}
      sectionsColor={["white"]}
      render={({ state, fullpageApi }) => {
        return (
          <div id="fullpage-wrapper">
            <div className="section">
              <div className="inner bg-yellow">1</div>
            </div>
            <div className="section">
              <div className="inner bg-blue">2</div>
            </div>

            <div className="section">
              <div className="inner bg-pink">3</div>
            </div>
            <div className="section">
              <div className="inner bg-red">4</div>
            </div>
            <div className="section">
              <h3>Last</h3>
              <button onClick={() => fullpageApi.moveTo(1, 0)}>Move top</button>
            </div>
          </div>
        );
      }}
    />
  );
}

export default App;
