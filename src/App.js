import React from "react";
import { BrowserRouter as Router, Routes,Route } from "react-router-dom";

// COMPONENT IMPORTS
import Navbar from "./components/Navbar";
import HeroSection from "./components/Herosection";
import AboutPage from "./pages/AboutPage";
import BlogSection from "./components/BlogSection";
import BlogPage from "./pages/BlogPage";
import ResourcesPage from "./pages/ResourcePage";
import Footer from "./components/FooterSection";
import ContactPage from "./pages/ContactPage";
import BlogDetailPage from "./pages/BlogDetailedPage";


export default function App() {
  return (
    <Router>
      {/* COMMON NAVBAR */}
      <Navbar />

      <Routes>
        {/* HOME PAGE */}
        <Route
          path="/"
          element={
            <>
             <HeroSection/>
             {/* <AboutSection/> */}
             <BlogSection/>
             {/* <ResourcesSection/> */}
             {/* <Contact/> */}
            </>
          }
        />

        OTHER PAGES
        <Route path="/about" element={<AboutPage/>} />
        <Route path="/blog" element={<BlogPage/>} />
        <Route path="/blogdetailed" element={<BlogDetailPage />} />

        <Route path="/resource" element={<ResourcesPage />} />
                <Route path="/contact" element={<ContactPage />} />

        

      </Routes>
<Footer/>
      {/* COMMON FOOTER */}
    </Router>
  );
}
