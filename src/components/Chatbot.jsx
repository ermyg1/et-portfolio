import React, { useState, useRef, useEffect } from 'react';
import { Bot, X, Briefcase, Lightbulb, CalendarDays, Coffee } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const messagesEndRef = useRef(null);

  const initialWelcomeMessage = {
    id: Date.now(),
    sender: 'bot',
    text: '👋 Hi there! I’m Ermiyas — a freelance web developer. How can I help you today?',
  };

  const quickReplies = [
    { id: 'services', text: 'Learn about my services', icon: <Briefcase className="mr-2 h-4 w-4" /> },
    { id: 'project_idea', text: 'I have a project idea', icon: <Lightbulb className="mr-2 h-4 w-4" /> },
    { id: 'discovery_call', text: 'Book a free discovery call', icon: <CalendarDays className="mr-2 h-4 w-4" /> },
    { id: 'browsing', text: 'Just browsing, thanks', icon: <Coffee className="mr-2 h-4 w-4" /> },
  ];

  useEffect(() => {
    if (isOpen && messages.length === 0) {
      setMessages([initialWelcomeMessage]);
    }
  }, [isOpen]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(scrollToBottom, [messages]);

  const toggleChat = () => {
    setIsOpen(!isOpen);
    if (!isOpen && messages.length === 0) {
      setMessages([initialWelcomeMessage]);
    }
  };

  const handleQuickReply = (replyId) => {
    const userMessage = quickReplies.find(qr => qr.id === replyId);
    setMessages(prev => [...prev, { id: Date.now(), sender: 'user', text: userMessage.text }]);

    let botResponseText = "";
    switch (replyId) {
      case 'services':
        botResponseText = "I build modern websites, e-commerce stores, and web apps. Want to see examples?";
        break;
      case 'project_idea':
        botResponseText = "Tell me what you’re thinking — business, portfolio, booking system?";
        break;
      case 'discovery_call':
        botResponseText = "Drop your email and I’ll send a link to schedule a 15-min discovery call.";
        break;
      case 'browsing':
        botResponseText = "Great! Feel free to explore the site or message me any time.";
        break;
      default:
        botResponseText = "Sorry, I didn't understand that.";
    }
    
    setTimeout(() => {
      setMessages(prev => [...prev, { id: Date.now() + 1, sender: 'bot', text: botResponseText }]);
    }, 500);
  };

  return (
    <div className="chatbot-container">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.3, ease: "circOut" }}
            className="chatbot-window"
          >
            <div className="chatbot-header">
              <span>Chat with Ermiyas</span>
              <button onClick={toggleChat} aria-label="Close chat" className="hover:opacity-75 transition-opacity">
                <X size={20} />
              </button>
            </div>
            <div className="chatbot-messages">
              {messages.map((msg) => (
                <motion.div
                  key={msg.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.2 }}
                  className={`chatbot-message ${msg.sender === 'bot' ? 'bot' : 'user'}`}
                >
                  {msg.text}
                </motion.div>
              ))}
              <div ref={messagesEndRef} />
            </div>
            {messages.length > 0 && messages[messages.length - 1].sender === 'bot' && messages[messages.length - 1].id === initialWelcomeMessage.id && (
              <div className="chatbot-quick-replies">
                {quickReplies.map((reply) => (
                  <Button
                    key={reply.id}
                    variant="outline"
                    size="sm"
                    className="quick-reply-button"
                    onClick={() => handleQuickReply(reply.id)}
                  >
                    {reply.icon}
                    {reply.text}
                  </Button>
                ))}
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
      <button onClick={toggleChat} className="chatbot-icon-button" aria-label={isOpen ? "Close chat" : "Open chat"}>
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.div key="close" initial={{ rotate: -90, scale: 0 }} animate={{ rotate: 0, scale: 1 }} exit={{ rotate: 90, scale: 0 }} transition={{ duration: 0.2 }}>
              <X size={30} />
            </motion.div>
          ) : (
            <motion.div key="open" initial={{ rotate: 90, scale: 0 }} animate={{ rotate: 0, scale: 1 }} exit={{ rotate: -90, scale: 0 }} transition={{ duration: 0.2 }}>
              <Bot size={30} />
            </motion.div>
          )}
        </AnimatePresence>
      </button>
    </div>
  );
};

export default Chatbot;