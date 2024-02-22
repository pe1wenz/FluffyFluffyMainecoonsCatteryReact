import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from "./pages/Home";
import Layout from "./components/Layout";
import Kittens from "./pages/Kittens";
import OurCat from "./pages/OurCats";
import Owning from "./pages/Owning";
import ContactUs from "./pages/ContactUs";
import GlobalStyles from "./globalStyles";
import NavbarComponent from "./components/NavbarComponent";


function App() {
  return (
      <>
          <GlobalStyles />
          <NavbarComponent />
      </>
      // <Router>
      //   <Routes>
      //       <Route path="/" element={
      //               <Layout>
      //                   <Home />
      //               </Layout>}
      //       />
      //       <Route path="/kittens" element={
      //           <Layout>
      //               <Kittens />
      //           </Layout>}
      //       />
      //       <Route path="/our-cats" element={
      //           <Layout>
      //               <OurCat />
      //           </Layout>}
      //       />
      //       <Route path="/owning" element={
      //           <Layout>
      //               <Owning />
      //           </Layout>}
      //       />
      //       <Route path="/contact-us" element={
      //           <Layout>
      //               <ContactUs />
      //           </Layout>}
      //       />
      //       <Route path="*" element={
      //           <Layout>
      //               <div>
      //                   Page Not Found
      //               </div>
      //           </Layout>}
      //       />
      //   </Routes>
      // </Router>
  );
}

export default App;
