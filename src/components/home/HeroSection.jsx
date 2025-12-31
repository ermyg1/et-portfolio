import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Github, Mail } from "lucide-react";

const HeroSection = ({ introText }) => {
  return (
    <section className="relative overflow-hidden py-24">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* PROFILE IMAGE — LEFT (current image retained) */}
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
                className="w-64 h-64 md:w-80 md:h-80 rounded-full object-cover shadow-2xl border-4 border-primary/30"
              />
            </div>
          </motion.div>

          {/* TEXT — RIGHT */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
              Ermias Tadesse
            </h1>

            <h2 className="text-xl md:text-2xl text-primary mb-4">
              Building high-performance, scalable web applications that help startups and businesses grow.
            </h2>

            <p className="text-muted-foreground text-lg mb-8 max-w-xl">
              {introText}
            </p>

            <div className="flex flex-wrap gap-4">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90"
                onClick={() => window.open("https://github.com/ermyg1", "_blank")}
              >
                <Github className="h-5 w-5 mr-2" />
                GitHub
              </Button>

              <Button
                size="lg"
                variant="outline"
                onClick={() =>
                  document
                    .getElementById("contact")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
              >
                <Mail className="h-5 w-5 mr-2" />
                Let’s Work Together
              </Button>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default HeroSection;
