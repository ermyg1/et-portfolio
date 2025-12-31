import React from 'react';
import { MessageSquare } from 'lucide-react';

const FloatingWhatsAppButton = () => {
  const whatsappLink = "https://wa.me/447405248307?text=Hi%20Ermiyas%2C%20I%20visited%20your%20portfolio%20website%20and%20I'm%20interested%20in%20working%20with%20you%20on%20a%20web%20project.%20Could%20we%20have%20a%20quick%20chat%3F";

  return (
    <a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      className="floating-whatsapp-button"
      aria-label="Chat on WhatsApp"
    >
      <MessageSquare size={32} />
    </a>
  );
};

export default FloatingWhatsAppButton;