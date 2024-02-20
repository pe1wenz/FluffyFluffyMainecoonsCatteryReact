import React from 'react';
import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from "./pages/Home";
import Layout from "./components/Layout";
import Kittens from "./pages/Kittens";
import OurCat from "./pages/OurCats";
import Owning from "./pages/Owning";


function App() {
  return (
      <Router>
        <Routes>
            <Route path="/" element={
                    <Layout>
                        <Home />
                    </Layout>}
            />
            <Route path="/kittens" element={
                <Layout>
                    <Kittens />
                </Layout>}
            />
            <Route path="/our-cats" element={
                <Layout>
                    <OurCat />
                </Layout>}
            />
            <Route path="/owning" element={
                <Layout>
                    <Owning />
                </Layout>}
            />
            <Route path="*" element={
                <Layout>
                    <div>
                        Page Not Found
                    </div>
                </Layout>}
            />
        </Routes>
      </Router>
  );
}

export default App;
