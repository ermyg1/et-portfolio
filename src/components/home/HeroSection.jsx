import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Github, Mail } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden py-24">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* PROFILE IMAGE */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="flex justify-center lg:justify-start"
          >
            <div className="relative">
              <img
                src="/profile.jpg"
                alt="Ermias Tadesse"
                className="w-64 h-64 md:w-80 md:h-80 rounded-full object-cover shadow-2xl"
              />
            </div>
          </motion.div>

          {/* TEXT CONTENT */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-center lg:text-left"
          >
            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
              Building reliable AI and software systems where control, governance,
              and clarity come first.
            </h1>

            <p className="text-lg text-muted-foreground mb-8 max-w-xl mx-auto lg:mx-0">
              I design and build full-stack applications and AI-assisted systems
              with a strong emphasis on safety, auditability, and real-world
              deployment constraints.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              {/* CONTACT — SCROLL TO CONTACT SECTION */}
              <Button asChild>
                <a href="#contact">
                  <Mail className="mr-2 h-4 w-4" />
                  Contact
                </a>
              </Button>

              {/* GITHUB */}
              <Button variant="outline" asChild>
                <a
                  href="https://github.com/ermyg1"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github className="mr-2 h-4 w-4" />
                  GitHub
                </a>
              </Button>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default HeroSection;
