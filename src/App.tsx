import { Header } from "./components/Header";
import { About } from "./components/About";
import { Contact } from "./components/Contact";
import { Work } from "./components/Work";
import "./App.css";

function App() {
  return (
    <div className="flex flex-col h-full w-[100vw] items-center">
      <Header></Header>
      <div className="md:w-[906px] w-[100vw]">
        <About></About>
        <Work />
        <Contact />
      </div>
    </div>
  );
}

export default App;
