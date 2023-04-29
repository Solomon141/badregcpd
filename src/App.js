import './App.css';
import NavBars from './Components/NavBars';
import Home from './Components/Home';
import Contact from './Components/Contact';
import Services from './Components/Services';
import Footer from './Components/Footer';
import AboutUs from './Components/AboutUs';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <NavBars />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Services" element={<Services />} />
          <Route path="/AboutUs" element={<AboutUs />} />
          
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  );
}

export default App;
