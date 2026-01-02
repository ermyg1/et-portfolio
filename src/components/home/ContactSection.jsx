import React, { useState } from "react";
import { Mail, Download, Copy, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import resumePdf from "@/assets/Ermias_Tadesse_CV.pdf";

const EMAIL_ADDRESS = "ermyg@hotmail.co.uk";

/**
 * Dispatches a privacy-safe contact intent event.
 * No cookies. No network calls. No PII.
 */
const trackContactEvent = (eventName) => {
  window.dispatchEvent(
    new CustomEvent(eventName, {
      detail: {
        timestamp: Date.now(),
        source: "contact_section",
      },
    })
  );
};

const ContactSection = () => {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL_ADDRESS);
      setCopied(true);
      trackContactEvent("contact_email_copied");
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy email:", err);
    }
  };

  const handleEmailClick = () => {
    trackContactEvent("contact_email_clicked");
  };

  const handleCvDownload = () => {
    trackContactEvent("contact_cv_downloaded");
    window.open(resumePdf, "_blank", "noopener,noreferrer");
  };

  return (
    <section id="contact" className="py-24 bg-muted/30">
      <div className="container mx-auto px-6 max-w-3xl text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Let’s Work Together
        </h2>

        <p className="text-muted-foreground text-lg mb-6">
          I am available for freelance and contract web development work.
          If you have a project, need improvements to an existing system,
          or want to discuss a potential collaboration, feel free to get in touch.
          I typically respond within one business day.
        </p>

        <p className="text-sm text-muted-foreground mb-10">
          Email: <span className="font-medium">{EMAIL_ADDRESS}</span>
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          {/* Email — Gmail web compose */}
          <a
            href={`https://mail.google.com/mail/?view=cm&fs=1&to=${EMAIL_ADDRESS}`}
            target="_blank"
            rel="noopener noreferrer"
            onClick={handleEmailClick}
            className="inline-flex items-center justify-center rounded-md bg-primary px-8 py-3 text-base font-medium text-primary-foreground transition hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
          >
            <Mail className="h-5 w-5 mr-2" />
            Email Me
          </a>

          {/* Copy email */}
          <Button
            size="lg"
            variant="outline"
            onClick={handleCopyEmail}
            className="inline-flex items-center"
          >
            {copied ? (
              <>
                <Check className="h-5 w-5 mr-2" />
                Copied
              </>
            ) : (
              <>
                <Copy className="h-5 w-5 mr-2" />
                Copy Email
              </>
            )}
          </Button>

          {/* CV download — Vite-managed */}
          <Button
            size="lg"
            variant="outline"
            onClick={handleCvDownload}
          >
            <Download className="h-5 w-5 mr-2" />
            Download CV (PDF)
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
