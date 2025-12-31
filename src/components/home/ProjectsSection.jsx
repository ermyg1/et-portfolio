import React from "react";

const ProjectsSection = ({ projects }) => {
  return (
    <section id="projects" className="container mx-auto px-4 py-20">
      <h2 className="text-3xl font-bold mb-12 text-center">
        Featured Projects
      </h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-card rounded-xl p-6 border border-border hover:shadow-lg transition-shadow"
          >
            <h3 className="text-xl font-semibold mb-3">
              {project.title}
            </h3>

            <p className="text-muted-foreground mb-4">
              {project.description}
            </p>

            <div className="flex flex-wrap gap-2 mb-4">
              {project.tech.map((tech, i) => (
                <span
                  key={i}
                  className="text-sm px-3 py-1 rounded-full bg-muted"
                >
                  {tech}
                </span>
              ))}
            </div>

            {project.demo && (
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary font-medium hover:underline"
              >
                View Project →
              </a>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;
