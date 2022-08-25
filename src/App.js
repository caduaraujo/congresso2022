import './App.css';
import { Container } from 'react-bootstrap';
import { Image } from 'react-bootstrap/Image'
import { NavBar } from "./components/NavBar";
import { Banner } from "./components/Banner";
import { Details } from "./components/Banner";
import { Faq } from "./components/Faq";
// import { motion, useScroll } from "framer-motion"

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
    </div>
  );
}

export default App;
