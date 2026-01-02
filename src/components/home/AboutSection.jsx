import React from "react";

const AboutSection = () => {
  return (
    <section id="about" className="py-24">
      <div className="container mx-auto px-6 max-w-4xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          About Me
        </h2>

        <div className="space-y-6 text-lg text-muted-foreground">
          <p>
            I’m a web developer focused on building clear, reliable, and
            maintainable software systems. My work prioritises structure,
            long-term sustainability, and thoughtful design over short-term
            hacks or unnecessary complexity.
          </p>

          <p>
            I’ve worked with startups, small businesses, and service-based
            organisations to design and build websites and applications that
            communicate clearly, perform reliably, and scale sensibly as
            requirements grow.
          </p>

          <p>
            More recently, my work has expanded into governance-aware system
            design — particularly around AI-assisted tools, human-in-the-loop
            workflows, and risk-conscious architecture. I’m interested in how
            software behaves not just when it works, but when it fails.
          </p>

          <p>
            I value clarity, accountability, and practical engineering. If a
            system can’t be explained simply, it’s probably doing too much.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
