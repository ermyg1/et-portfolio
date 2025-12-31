import React from "react";
import { motion } from "framer-motion";

const projects = [
  {
    title: "E.T Governance Advisor",
    subtitle: "Non-Executing Governance Advisory Artefact",
    link: "https://agent.ai/agent/fjuny02x9hvqjw79",
    description: [
      "Most AI agents prioritise autonomy and speed while ignoring governance, auditability, and human authority — creating operational and regulatory risk.",
      "This project demonstrates a governance-first approach to AI by design. The system is intentionally non-executing, permission-gated, and inspection-ready, with explicit architectural constraints that prevent autonomous action or external execution.",
      "It reframes capability as responsibility, showing how AI can remain useful without being uncontrolled.",
    ],
  },
  {
    title: "Shephard Care",
    subtitle: "Healthcare-Oriented Web Platform",
    link: "https://shephardcare.co.uk",
    description: [
      "Care providers require reliable, privacy-aware digital systems that support real operational workflows without unnecessary complexity.",
      "This project involved building a full-stack web platform with authentication, structured data flows, and role-aware access, prioritising clarity, maintainability, and predictable behaviour.",
      "It reflects an engineering approach suited to sensitive or regulated environments where trust and control matter.",
    ],
  },
  {
    title: "Sam’s Barber",
    subtitle: "Local Business Website",
    link: "https://samsbarber.co.uk",
    description: [
      "A clean, reliable website for a local barber business, focused on clarity, accessibility, and straightforward customer interaction.",
      "The project prioritised fast loading, simple structure, and ease of update over unnecessary visual complexity.",
    ],
  },
  {
    title: "Sinematic",
    subtitle: "Creative Media Website",
    link: "https://sinematic.co.uk",
    description: [
      "A portfolio-style website for a creative media brand, designed to showcase work clearly while remaining lightweight and maintainable.",
      "The emphasis was on presentation discipline, responsiveness, and long-term usability.",
    ],
  },
];

const additionalProjects = [
  {
    title: "Channon Tea",
    link: "https://channontea.co.uk",
    description:
      "Full-stack website delivery for an early-stage consumer brand, focused on clarity, performance, and long-term maintainability.",
  },
  {
    title: "Pagebeya",
    link: "https://pagebeya.com",
    description:
      "Practical web solution for a small business, prioritising usability, simplicity, and reliable delivery over experimental features.",
  },
  {
    title: "SOSTU",
    link: "https://sostu.co.uk",
    description:
      "Brand-focused website for a growing business, balancing visual identity with technical discipline and predictable behaviour.",
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-32">
      <div className="container mx-auto px-6 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center">
            Projects
          </h2>

          {/* Featured Projects — 2 Column Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-24">
            {projects.map((project, index) => (
              <div
                key={index}
                className="card-premium p-8 flex flex-col"
              >
                <div className="space-y-4">
                  <h3 className="text-2xl font-semibold">
                    {project.title}
                  </h3>

                  <p className="text-sm uppercase tracking-wide text-muted-foreground/70">
                    {project.subtitle}
                  </p>

                  <div className="space-y-4 text-muted-foreground text-base">
                    {project.description.map((para, i) => (
                      <p key={i}>{para}</p>
                    ))}
                  </div>
                </div>

                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-block text-primary hover:underline"
                >
                  View project →
                </a>
              </div>
            ))}
          </div>

          {/* Additional Engineering Work */}
          <div className="border-t pt-12 max-w-4xl mx-auto">
            <h3 className="text-xl font-semibold mb-6">
              Additional Engineering Work
            </h3>
            <ul className="space-y-4 text-muted-foreground text-lg">
              {additionalProjects.map((project, index) => (
                <li key={index}>
                  <strong className="text-foreground">
                    {project.title}
                  </strong>{" "}
                  — {project.description}{" "}
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline"
                  >
                    View →
                  </a>
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
