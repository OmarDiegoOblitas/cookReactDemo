import "./App.css";
import React from 'react';
import { BrowserRouter, Route ,Routes} from 'react-router-dom';
import Header from "./components/header/Header";
import Section from "./components/section/Section";
import Contact from "./components/Contact/Contact";
import Footer from "./components/footer/Footer";
import About from "./components/About/About";
import Products from "./components/Products/Products";

function App() {
    return (
        <BrowserRouter >
            <div className="App">
                <Header/>
                <Routes>
                    <Route exact path="/" element={<Section />} />
                    <Route path="/About" element={<About />} />
                    <Route path="/Products" element={<Products/>} />
                    <Route path="/Contact" element={<Contact />} />
                </Routes>
                <Footer/>
            </div>
        </BrowserRouter>
    );
}

export default App;


