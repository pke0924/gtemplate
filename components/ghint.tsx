"use client";
import React, { useRef, useEffect } from "react";
import { Messages } from "primereact/messages";

  
interface GHintProps {
  severity?: "success" | "info" | "warn" | "error";
  summary?: string;
  children: React.ReactNode;
}

const GHint: React.FC<GHintProps> = ({
  severity = "info",
  summary = "",
  children,
}: GHintProps) => {
  const msgs = useRef<Messages | null>(null);

  useEffect(() => {
    
  
    const messageOptions = {
      sticky: true,
      severity: severity,
      summary: summary,
      detail: children,
      icon: false,
      closable: false 
      
    };

    msgs.current?.show(messageOptions);
  }, [severity, summary, children]);

  return (
    <Messages ref={msgs} />
  );
};

export default GHint;
