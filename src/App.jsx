import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Layout from "@/components/Layout";
import HomePage from "@/pages/HomePage";
import BlogPage from "@/pages/BlogPage";
import ResumePage from "@/pages/ResumePage";
import { Toaster } from "@/components/ui/toaster";
import { AnimatePresence } from "framer-motion";

const App = () => {
  const location = useLocation();
  return (
    <>
      <Layout>
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<HomePage />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/resume" element={<ResumePage />} />
          </Routes>
        </AnimatePresence>
      </Layout>
      <Toaster />
    </>
  );
};

export default App;