import logo from './logo.svg';
// import './App.css';
import { Container } from 'react-bootstrap';
import Image from 'react-bootstrap/Image'
import Faq from "./components/Faq";
import ReactFullpage from '@fullpage/react-fullpage-umd'; // will return static version on server and "live" version on client
import { motion, useScroll } from "framer-motion"

function App() {
  return (
    <div className="App">
      <Container>
      <header className="App-header">
        <Image src="https://gen2.focolare.org/wp-content/uploads/2022/02/K.Venturilio@CSCAudiovisivi_20170706_GF_Day1_CrowdShots-12filtrato.png" thumbnail responsive />

        </header>

        <section>
          < Faq />
        </section>

      </Container>
    </div>
  );
}

export default App;
