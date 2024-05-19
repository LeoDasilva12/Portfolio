import React, { useContext } from "react";
import './App.css'
import Contacto from "./Components/Contacto/Contacto";
import Experience from "./Components/Experiance/Experience";
import Footer from "./Components/Footer/Footer";
import Intro from "./Components/Intro/Intro";
import Navbar from "./Components/NavBar/Navbar";
import Portfolio from "./Components/Portfolio/Portfolio";
import Services from "./Components/Services/Services";
import Testemunhas from "./Components/Testemunhas/Testemunhas";
import Works from "./Components/Works/Works";
import { themeContext } from './Context';

function App() {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className="App"
      style={{
        background: darkMode ? '#151414' : '',
        color: darkMode ? 'white' : ''
      }}
    >
      <Navbar />
      <Intro />
      <Services />
      <Experience />
      <Works />
      <Portfolio />
      <Testemunhas />
      <Contacto />
      <Footer />
    </div>
  );
}

export default App;
