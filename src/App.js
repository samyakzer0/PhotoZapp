import React from "react";
import Footer from "./Footer";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import SendPhotoPage from "./SendPhoto"; 
import RetrievePhotoPage from "./RetrievePhoto"; 
import "./App.css"; 

function App() {
  return (
    <Router>
      <div className="app-container fade-in">
        <nav className="nav-bar">
          <Link to="/send-photo" className="nav-button">Send Photo</Link>
          <Link to="/retrieve-photo" className="nav-button">Retrieve Photo</Link>
        </nav>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/send-photo" element={<SendPhotoPage />} />
          <Route path="/retrieve-photo" element={<RetrievePhotoPage />} />
        </Routes>
        <div className="container">
            {/* Other components like Send and Retrieve go here */}
            <Footer /> {/* Place the Footer here */}
        </div>
      </div>
    </Router>
  );
}

function HomePage() {
  return (
    <div className="home-container">
      <h2>Seamless Photo Transfer with Web3</h2>
      <p>Use this decentralized application to send and retrieve encrypted photo hashes via blockchain technology.</p>
    </div>
  );
}

export default App;
