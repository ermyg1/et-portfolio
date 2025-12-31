import React from "react";
import { motion } from "framer-motion";

const WelcomeMessage = () => {
  return (
    <section id="about" className="py-24 bg-muted/30">
      <div className="container mx-auto px-6 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
            About
          </h2>

          <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
            <p>
              I am a software engineer focused on building dependable,
              well-governed systems rather than experimental or opaque automation.
            </p>

            <p>
              My work spans full-stack web development, AI-assisted tooling, and
              system architecture, with particular attention to how software
              behaves in real operational environments. I prioritise clarity
              over cleverness, explicit control over unchecked autonomy, and
              designs that can be inspected, audited, and reasoned about long
              after they are deployed.
            </p>

            <p>
              I am especially interested in AI and agent-based systems where
              human authority, permission boundaries, and failure modes are
              treated as first-class concerns. I believe useful AI is not
              defined by how autonomous it appears, but by how safely and
              predictably it integrates into human decision-making.
            </p>

            <p>
              This portfolio is a record of practical work, architectural
              thinking, and projects built with long-term responsibility in
              mind.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WelcomeMessage;
