import { useEffect, useRef, useState } from "react";
import "./App.css";
import "fullpage.js/vendors/scrolloverflow"; // Optional. When using scrollOverflow:true
import ReactFullpage from "@fullpage/react-fullpage";
import ProfileBack from "./section/ProfileBack";
import Profile3dCard from "./section/Profile3dCard";
import ProfileCard from "./section/ProfileCard";

function App() {
  const [scrollIndex, setScrollIndex] = useState(0);
  return (
    <ReactFullpage
      licenseKey={"YOUR_LICENSE_KEY"}
      scrollOverflow={true}
      sectionsColor={["white"]}
      render={({ state, fullpageApi }) => {
        return (
          <div id="fullpage-wrapper">
            <div className="section">
              <div className="inner bg-desktop">
                <ProfileCard></ProfileCard>
              </div>
            </div>
            <div className="section">
              <div className="inner">
                <ProfileBack />
                <Profile3dCard scrollIndex={scrollIndex} />
              </div>
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
