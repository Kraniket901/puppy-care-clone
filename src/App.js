import "./styles.css";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Services from "./pages/Services";

function App(){
  return(
    <>
    <Router>
    <Routes>
      <Route exact path="/" element={<Home />}/>
      <Route path="/about" element={<About />}/>
      <Route path="/services" element={<Services />}/>
      <Route path="/contact" element={<Contact />}/>
    </Routes>
    </Router>
    </>
  )
}

export default App;