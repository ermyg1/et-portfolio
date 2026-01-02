import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import Layout from "@/components/Layout";
import HomePage from "@/pages/HomePage";
import Blog from "@/pages/Blog";
import ResumePage from "@/pages/ResumePage";
import { Toaster } from "@/components/ui/toaster";

const App = () => {
  const location = useLocation();

  return (
    <>
      <Layout>
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<HomePage />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/resume" element={<ResumePage />} />
          </Routes>
        </AnimatePresence>
      </Layout>
      <Toaster />
    </>
  );
};

export default App;
