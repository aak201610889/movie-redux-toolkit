import React from 'react'
import { BrowserRouter , Routes,Router,Route } from 'react-router-dom';
import './App.css'
import Header from './layouts/Header';
import Footer from "./layouts/Footer";
import Home from './pages/Home/Home'
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/" element={<Home />} />

        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
