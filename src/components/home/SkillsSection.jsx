import React from "react";
import { motion } from "framer-motion";

const SkillsSection = ({ skills }) => {
  return (
    <section id="skills" className="py-20 bg-secondary/20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center">Skills & Tools</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skills.map((skillGroup, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="skill-item rounded-lg p-6"
            >
              <h3 className="text-xl font-semibold mb-3">{skillGroup.category}</h3>
              <p className="text-muted-foreground mb-4">{skillGroup.description}</p>
              <div className="flex flex-wrap gap-2">
                {skillGroup.items.map((skill, i) => (
                  <span
                    key={i}
                    className="text-sm bg-primary/10 text-primary px-3 py-1 rounded-full"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;