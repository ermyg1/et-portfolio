import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Download, Briefcase, GraduationCap, Award, Wrench as Tool } from 'lucide-react';

const Resume = () => {
  const experience = [
    {
      title: "Freelance Web Developer",
      company: "Self-Employed",
      period: "2020 - Present",
      description: "Created and maintained custom websites for various clients including Channon Tea, FYI Media, Sinematic, Shephard Care, Sam’s Barber, and more."
    },
    {
      title: "Machine Learning & Web Projects",
      company: "Personal & Client Projects",
      period: "2020 - Present",
      description: "Built personal and client apps using TensorFlow, React, and backend tools. Includes AI demos and data dashboards."
    }
  ];

  const education = [
    {
      degree: "Bachelor of Science in Applied Computing",
      institution: "University of Northumbria",
      period: "Graduated December 2019",
      focus: "Specialized in web development, software engineering, and data analysis. Acquired foundational knowledge for machine learning applications.",
      achievements: [
        "Developed proficiency in HTML5, CSS3, JavaScript, and various backend technologies.",
        "Completed multiple full-stack web projects.",
        "Engaged in self-study of Machine Learning and AI concepts post-graduation."
      ]
    }
  ];

  const selfTaughtSkills = [
    {
      area: "Machine Learning & AI (Self-Taught)",
      period: "2020 - Present",
      skills: [
        "TensorFlow & Keras for Neural Networks",
        "NumPy for Data Manipulation",
        "Deep Learning Model Development & Deployment",
        "Natural Language Processing Basics"
      ]
    }
  ];

  const certifications = [
    "TensorFlow Developer Certificate (In Progress)",
    "Advanced React Development",
    "Full-Stack Web Development Bootcamp"
  ];

  return (
    <div className="pt-32 pb-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-4xl font-bold">Professional Resume</h1>
            <Button
              onClick={() => window.open("/resume.pdf", "_blank")}
              className="bg-primary hover:bg-primary/90"
            >
              <Download className="mr-2 h-4 w-4" /> Download PDF
            </Button>
          </div>

          <div className="space-y-12">
            <section>
              <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2">
                <Briefcase className="h-6 w-6 text-primary" />
                Professional Experience
              </h2>
              <div className="space-y-6">
                {experience.map((job, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.2 }}
                    className="resume-card p-6 rounded-lg"
                  >
                    <h3 className="text-xl font-semibold text-primary">{job.title}</h3>
                    <p className="text-muted-foreground">{job.company}</p>
                    <p className="text-sm text-muted-foreground mb-2">{job.period}</p>
                    <p>{job.description}</p>
                  </motion.div>
                ))}
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2">
                <GraduationCap className="h-6 w-6 text-primary" />
                Education
              </h2>
              <div className="space-y-6">
                {education.map((edu, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.2 }}
                    className="resume-card p-6 rounded-lg"
                  >
                    <h3 className="text-xl font-semibold text-primary">{edu.degree}</h3>
                    <p className="text-muted-foreground">{edu.institution}</p>
                    <p className="text-sm text-muted-foreground mb-2">{edu.period}</p>
                    <p className="mb-4">{edu.focus}</p>
                    <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                      {edu.achievements.map((achievement, i) => (
                        <li key={i}>{achievement}</li>
                      ))}
                    </ul>
                  </motion.div>
                ))}
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2">
                <Tool className="h-6 w-6 text-primary" />
                Self-Taught Expertise & Skills
              </h2>
              <div className="space-y-6">
                {selfTaughtSkills.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.2 }}
                    className="resume-card p-6 rounded-lg"
                  >
                    <h3 className="text-xl font-semibold text-primary">{item.area}</h3>
                    <p className="text-sm text-muted-foreground mb-4">{item.period}</p>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {item.skills.map((skill, i) => (
                        <li
                          key={i}
                          className="flex items-center gap-2 text-muted-foreground"
                        >
                          <span className="w-2 h-2 bg-primary rounded-full"></span>
                          {skill}
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                ))}
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2">
                <Award className="h-6 w-6 text-primary" />
                Certifications & Training
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {certifications.map((cert, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.2 }}
                    className="resume-card p-4 rounded-lg flex items-center gap-2"
                  >
                    <Tool className="h-5 w-5 text-primary" />
                    <span>{cert}</span>
                  </motion.div>
                ))}
              </div>
            </section>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Resume;