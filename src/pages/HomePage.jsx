import React, { useEffect, useRef } from "react";
import HeroSection from "@/components/home/HeroSection";
import ProjectsSection from "@/components/home/ProjectsSection";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import SkillsSection from "@/components/home/SkillsSection";
import ContactSection from "@/components/home/ContactSection";

const HomePage = () => {
  const heroRef = useRef(null);

  const introText =
    "I help startups and small businesses build reliable, scalable web applications with a focus on clarity, performance, and long-term maintainability.";

  const projects = [
    {
      title: "Channon Tea",
      description:
        "A premium e-commerce website built to support brand presentation, customer trust, and a smooth ordering experience.",
      tech: ["React", "Firebase", "Firestore", "Tailwind CSS"],
      demo: "https://channontea.co.uk",
    },
    {
      title: "Sinematic",
      description:
        "An education-focused tutoring platform designed to clearly present services and build user trust through structured content.",
      tech: ["React", "Node.js", "MongoDB"],
      demo: "https://sinematic.co.uk",
    },
    {
      title: "Pagebeya",
      description:
        "A cultural wellness and e-commerce platform focused on clean navigation, usability, and scalable front-end architecture.",
      tech: ["React", "Firebase", "Stripe"],
      demo: "https://pagebeya.com",
    },
    {
      title: "E.T Governance Advisor",
      description:
        "A non-executing AI governance advisory artefact demonstrating risk awareness, auditability, and human-in-the-loop system design.",
      tech: ["AI Governance", "Risk Analysis", "Auditability"],
      demo: "https://agent.ai/agent/et-governance-advisor",
    },
    {
      title: "Sam’s Barber",
      description:
        "A local service website built to clearly present services, pricing, and contact information with a mobile-friendly layout.",
      tech: ["HTML", "CSS", "JavaScript"],
      demo: "https://samsbarber.co.uk",
    },
    {
      title: "Shephard Care",
      description:
        "A healthcare-focused service website designed to support patient engagement, service clarity, and future secure member access.",
      tech: ["React", "Firebase", "Firestore"],
      demo: "https://shephardcare.co.uk",
    },
  ];

  const testimonials = [
    {
      quote:
        "Ermias helped us bring the Channon Tea legacy online with clarity and professionalism.",
      author: "Founder, Channon Tea",
    },
    {
      quote:
        "The Sinematic platform clearly communicated our services and improved how students engage with us.",
      author: "Co-Founder, Sinematic",
    },
    {
      quote:
        "The Pagebeya website is clean, intuitive, and easy for our customers to navigate. It reflects our values clearly.",
      author: "Founder, Pagebeya",
    },
    {
      quote:
        "Shephard Care now has a clear and structured online presence that helps patients understand our services quickly.",
      author: "Operations Lead, Shephard Care",
    },
  ];

  const skills = [
    {
      category: "Front-End Engineering",
      items: ["JavaScript", "React", "HTML", "CSS", "Tailwind CSS"],
    },
    {
      category: "Back-End and Data",
      items: ["Firebase Auth", "Firestore", "Node.js", "MongoDB", "Stripe"],
    },
    {
      category: "Governance and Systems Thinking",
      items: [
        "Governance-aware design",
        "Human-in-the-loop systems",
        "Risk awareness",
      ],
    },
    {
      category: "Cybersecurity Foundations (In Progress)",
      items: ["Networking", "LAN/WAN", "Routing and switching"],
    },
  ];

  useEffect(() => {
    const updateMousePosition = (ev) => {
      if (!heroRef.current) return;
      heroRef.current.style.setProperty("--mouse-x", `${ev.clientX}px`);
      heroRef.current.style.setProperty("--mouse-y", `${ev.clientY}px`);
    };

    window.addEventListener("mousemove", updateMousePosition);
    return () => window.removeEventListener("mousemove", updateMousePosition);
  }, []);

  return (
    <div ref={heroRef}>
      <HeroSection introText={introText} />
      <ProjectsSection projects={projects} />
      <TestimonialsSection testimonials={testimonials} />
      <SkillsSection skills={skills} />
      <ContactSection />
    </div>
  );
};

export default HomePage;
