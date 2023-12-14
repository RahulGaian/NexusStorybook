import "./App.css";
import Landingpagenew from "./Pages/landingnew";
import HeadFoot from "./components/HeaderFooterHelper";
// import MapChart from "./Pages/samplepage/map";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <HeadFoot>
                <Landingpagenew />
              </HeadFoot>
            }
          ></Route>
          {/* <Route
            path="/map"
            element={
              <HeadFoot>
                <MapChart/>
              </HeadFoot>
            }
          ></Route> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
