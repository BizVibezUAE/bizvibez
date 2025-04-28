"use client"
import React from "react";
  import { BsWhatsapp } from "react-icons/bs";

  export interface WhatsAppButtonProps {
    phoneNumber: string;
    message?: string;
    className?: string;
  }

  const WhatsAppButton: React.FC<WhatsAppButtonProps> = ({
    phoneNumber,
    message = "",
    className = ""
  }) => {
    // Construct the WhatsApp URL with the optional message
    const whatsappUrl = `https://wa.me/${phoneNumber}${message ? `?text=${encodeURIComponent(message)}` : ""}`;

    return (
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className={`whatsapp-button ${className} text-green-500  w-fit p-2 `}
        style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}
      >
        <BsWhatsapp size={60} />
      </a>
    );
  };

  export default WhatsAppButton;