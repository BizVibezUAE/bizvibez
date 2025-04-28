"use client";

import React, { useState, useEffect } from "react";

export default function TypeformButton() {
  const [PopupButton, setPopupButton] = useState<React.ElementType | null>(null);

  useEffect(() => {
    import("@typeform/embed-react")
      .then((mod) => setPopupButton(() => mod.PopupButton))
      .catch((err) => console.error("Error loading Typeform:", err));
  }, []);

  // ✅ Prevent rendering until the component is loaded
  if (!PopupButton) return null;

  return (
    <PopupButton
      id="naqPzEEo"
      className="text-white bg-primary py-3 mt-5 px-4 rounded text-sm"
    >
      Cost Calculator
    </PopupButton>
  );
}
