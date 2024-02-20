import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "./pages/Home";
import Layout from "./components/Layout";


function App() {
  return (
      <Router>
        <Routes>

            <Route path="/" element={
                    <Layout>
                        {/* Content specific to the Home page */}
                        <Home />
                    </Layout>}
            />

            <Route path="*" element={<div>Page Not Found</div>} />
        </Routes>
      </Router>

  );
}

export default App;
