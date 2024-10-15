import React from "react";
import { Header } from "./components/Header";
import { About } from "./components/About";
import { Contact } from "./components/Contact";
import { Work } from "./components/Work";
import { Swiper, SwiperSlide } from "swiper/react";

import { EffectCoverflow, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "./App.css";

function App() {
  return (
    <div className="h-full">
      <Header></Header>
      <About></About>
      <Work />
      <Contact />
    </div>
  );
}

export default App;
