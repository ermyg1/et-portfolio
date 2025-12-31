import React from "react";
import { motion } from "framer-motion";

const projects = [
  {
    title: "E.T Governance Advisor",
    subtitle: "Non-Executing Governance Advisory Artefact",
    description: [
      "Most AI agents prioritise autonomy and speed while ignoring governance, auditability, and human authority — creating operational and regulatory risk.",
      "This project demonstrates a governance-first approach to AI by design. The system is intentionally non-executing, permission-gated, and inspection-ready, with explicit architectural constraints that prevent autonomous action or external execution.",
      "It reframes capability as responsibility, showing how AI can remain useful without being uncontrolled."
    ],
  },
  {
    title: "Shephard Care",
    subtitle: "Healthcare-Oriented Web Platform",
    description: [
      "Care providers require reliable, privacy-aware digital systems that support real operational workflows without unnecessary complexity.",
      "This project involved building a full-stack web platform with authentication, structured data flows, and role-aware access, prioritising clarity, maintainability, and predictable behaviour.",
      "It reflects an engineering approach suited to sensitive or regulated environments where trust and control matter."
    ],
  },
];

const additionalProjects = [
  {
    title: "Channon Tea",
    description:
      "Full-stack website delivery for an early-stage consumer brand, focused on clarity, performance, and long-term maintainability.",
  },
  {
    title: "Pagebeya",
    description:
      "Practical web solution for a small business, prioritising usability, simplicity, and reliable delivery over experimental features.",
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-32">
      <div className="container mx-auto px-6 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            Projects
          </h2>

          {/* Featured Projects */}
          <div className="space-y-16 mb-20">
            {projects.map((project, index) => (
              <div key={index} className="space-y-4">
                <h3 className="text-2xl font-semibold">
                  {project.title}
                </h3>
                <p className="text-sm uppercase tracking-wide text-muted-foreground/70">
                  {project.subtitle}
                </p>
                <div className="space-y-4 text-muted-foreground text-lg">
                  {project.description.map((para, i) => (
                    <p key={i}>{para}</p>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Additional Work */}
          <div className="border-t pt-12">
            <h3 className="text-xl font-semibold mb-6">
              Additional Engineering Work
            </h3>
            <ul className="space-y-4 text-muted-foreground text-lg">
              {additionalProjects.map((project, index) => (
                <li key={index}>
                  <strong className="text-foreground">
                    {project.title}
                  </strong>{" "}
                  — {project.description}
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;
