import React, { useState, useRef, useEffect } from "react";
import { Bot, X, Briefcase, Download, Mail, FolderKanban } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import profileImage from "@/assets/profile.jpg";
import resumePdf from "@/assets/Ermias_Tadesse_CV.pdf";

const EMAIL_ADDRESS = "ermyg@hotmail.co.uk";

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const messagesEndRef = useRef(null);

  const welcomeMessage = {
    id: "welcome",
    sender: "bot",
    text:
      "Hi — I can help you quickly with my work, experience, or getting in touch. What would you like to do?",
  };

  const actions = [
    {
      id: "projects",
      label: "View projects",
      icon: <FolderKanban className="h-4 w-4 mr-2" />,
      action: () => {
        document
          .querySelector("#projects")
          ?.scrollIntoView({ behavior: "smooth" });
        return "I’ve scrolled the page to show you my projects.";
      },
    },
    {
      id: "experience",
      label: "What do you specialise in?",
      icon: <Briefcase className="h-4 w-4 mr-2" />,
      action: () =>
        "I specialise in building reliable web applications, governance-aware systems, and AI-assisted tools with a strong focus on clarity and long-term maintainability.",
    },
    {
      id: "cv",
      label: "Download CV",
      icon: <Download className="h-4 w-4 mr-2" />,
      action: () => {
        window.open(resumePdf, "_blank");
        return "I’ve opened my CV in a new tab for you.";
      },
    },
    {
      id: "contact",
      label: "Contact Ermias",
      icon: <Mail className="h-4 w-4 mr-2" />,
      action: () => {
        window.open(
          `https://mail.google.com/mail/?view=cm&fs=1&to=${EMAIL_ADDRESS}`,
          "_blank"
        );
        return "I’ve opened an email draft so you can get in touch directly.";
      },
    },
  ];

  useEffect(() => {
    if (isOpen && messages.length === 0) {
      setMessages([welcomeMessage]);
    }
  }, [isOpen]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleAction = (action) => {
    setMessages((prev) => [
      ...prev,
      { id: Date.now(), sender: "user", text: action.label },
    ]);

    const responseText = action.action();

    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        { id: Date.now() + 1, sender: "bot", text: responseText },
      ]);
    }, 400);
  };

  return (
    <div className="chatbot-container">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.25 }}
            className="chatbot-window"
          >
            <div className="chatbot-header">
              <span>Assistant</span>
              <button onClick={() => setIsOpen(false)}>
                <X size={18} />
              </button>
            </div>

            <div className="chatbot-messages">
              {messages.map((msg) => (
                <div
                  key={msg.id}
                  className={`chatbot-message-row ${
                    msg.sender === "bot" ? "bot" : "user"
                  }`}
                >
                  {msg.sender === "bot" && (
                    <img
                      src={profileImage}
                      alt="Ermias Tadesse"
                      className="chatbot-avatar"
                    />
                  )}

                  <div className={`chatbot-message ${msg.sender}`}>
                    {msg.text}
                  </div>
                </div>
              ))}
              <div ref={messagesEndRef} />
            </div>

            <div className="chatbot-quick-replies">
              {actions.map((action) => (
                <Button
                  key={action.id}
                  size="sm"
                  variant="outline"
                  onClick={() => handleAction(action)}
                  className="quick-reply-button"
                >
                  {action.icon}
                  {action.label}
                </Button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <button
        onClick={() => setIsOpen((v) => !v)}
        className="chatbot-icon-button"
        aria-label="Toggle chat"
      >
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.div
              key="close"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0 }}
            >
              <X size={28} />
            </motion.div>
          ) : (
            <motion.div
              key="open"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0 }}
            >
              <Bot size={28} />
            </motion.div>
          )}
        </AnimatePresence>
      </button>
    </div>
  );
};

export default Chatbot;
