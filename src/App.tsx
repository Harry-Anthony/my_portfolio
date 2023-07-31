import React from "react";
import "./App.css";
import { Header } from "./components/Header";
import { About } from "./components/About";
import { Contact } from "./components/Contact";
import { Work } from "./components/Work";

function App() {
  return (
    <div className="h-full">
      {/* <Test></Test> */}
      <Header></Header>
      <About></About>
      <Work />
      <Contact />
    </div>
  );
}

export default App;
