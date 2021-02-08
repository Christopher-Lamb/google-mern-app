import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Search from "./pages/Search";
import Saved from "./pages/Saved";

function App() {
  return (
    <Router>
      <Route exact path="/" component={Search}></Route>
      <Route exact path="/saved" component={Saved}></Route>
    </Router>
  );
}

export default App;
