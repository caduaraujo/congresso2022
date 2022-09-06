import './App.css';

import { NavBar } from "./components/NavBar";
import { Banner } from "./components/Banner";
import { Skills } from "./components/Skills";
import { Faq } from "./components/Faq";
// import { motion, useScroll } from "framer-motion"

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <Skills />
      <Faq />
    </div>
  );
}

export default App;
