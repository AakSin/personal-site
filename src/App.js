import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import WorkMain from "./pages/WorkMain";
import Error from "./pages/Error";
import Renders from "./pages/Renders";
import TouchDesigner from "./pages/TouchDesigner";
import UnrealEngine from "./pages/UnrealEngine";

export default function App() {
  let randomNumbers = [];
  for (let i = 0; i < 100; i++) {
    randomNumbers.push(Math.random());
  }

  return (
    <Router>
      <Routes>
        <Route
          exact
          path="/"
          element={<Home randomNumbers={randomNumbers}></Home>}
        ></Route>
        <Route exact path="/work/:name" element={<WorkMain></WorkMain>}></Route>
        <Route
          exact
          path="/Miscellaneous"
          element={<Renders></Renders>}
        ></Route>
        <Route
          exact
          path="/TouchDesigner"
          element={<TouchDesigner></TouchDesigner>}
        ></Route>
        <Route
          exact
          path="/UnrealEngine"
          element={<UnrealEngine></UnrealEngine>}
        ></Route>
        <Route path="*" element={<Error></Error>}></Route>
      </Routes>
    </Router>
  );
}
