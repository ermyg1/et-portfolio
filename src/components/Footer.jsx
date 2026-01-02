import React from "react";
import {
  GitCommit as GitHub,
  Linkedin,
  Mail,
  MessageSquare as WhatsApp
} from "lucide-react";

const EMAIL_ADDRESS = "ermyg@hotmail.co.uk";

const Footer = () => {
  const socialLinks = [
    {
      icon: <Linkedin className="h-5 w-5" />,
      href: "https://www.linkedin.com/in/ermiyas-t/",
      label: "LinkedIn",
      external: true
    },
    {
      icon: <GitHub className="h-5 w-5" />,
      href: "https://github.com/ermyg1",
      label: "GitHub",
      external: true
    },
    {
      icon: <Mail className="h-5 w-5" />,
      href: `https://mail.google.com/mail/?view=cm&fs=1&to=${EMAIL_ADDRESS}`,
      label: "Email",
      external: true
    },
    {
      icon: <WhatsApp className="h-5 w-5" />,
      href: "https://wa.me/447405248307?text=Hi%20Ermiyas%2C%20I%20visited%20your%20portfolio%20website%20and%20I'm%20interested%20in%20working%20with%20you%20on%20a%20web%20project.%20Could%20we%20have%20a%20quick%20chat%3F",
      label: "WhatsApp",
      external: true
    }
  ];

  return (
    <footer className="bg-secondary/30 border-t border-border/10 py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-center space-y-4">
          <div className="flex items-center space-x-6">
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon text-muted-foreground hover:text-primary transition-colors duration-300"
                aria-label={link.label}
              >
                {link.icon}
              </a>
            ))}
          </div>

          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Ermiyas Tadesse. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
