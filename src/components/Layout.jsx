import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import Footer from "./Footer";
import FloatingWhatsAppButton from "./FloatingWhatsAppButton";
import Chatbot from "./Chatbot";

const Layout = ({ children }) => {
  const location = useLocation();
  const navigate = useNavigate();

  const handleLogoClick = (e) => {
    e.preventDefault();

    if (location.pathname !== "/") {
      navigate("/");
    }

    // Always scroll to top
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <nav className="fixed w-full z-50 nav-blur">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          {/* LOGO */}
          <a
            href="/"
            onClick={handleLogoClick}
            className="logo cursor-pointer"
          >
            ET
          </a>

          <div className="flex gap-8">
            {location.pathname === "/" ? (
              <>
                <a href="#about" className="nav-link hover:text-primary transition-colors">
                  About
                </a>
                <a href="#projects" className="nav-link hover:text-primary transition-colors">
                  Projects
                </a>
                <a href="#skills" className="nav-link hover:text-primary transition-colors">
                  Skills
                </a>
                <a href="#contact" className="nav-link hover:text-primary transition-colors">
                  Contact
                </a>
              </>
            ) : (
              <Link to="/" className="nav-link hover:text-primary transition-colors">
                Home
              </Link>
            )}
            <Link to="/blog" className="nav-link hover:text-primary transition-colors">
              Blog
            </Link>
            <Link to="/resume" className="nav-link hover:text-primary transition-colors">
              Resume
            </Link>
          </div>
        </div>
      </nav>

      <motion.main
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 20 }}
        transition={{ duration: 0.6 }}
        className="flex-grow"
      >
        {children}
      </motion.main>

      <Footer />
      <FloatingWhatsAppButton />
      <Chatbot />
    </div>
  );
};

export default Layout;
