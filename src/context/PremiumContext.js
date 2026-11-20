"use client";

import { createContext, useContext, useEffect, useState } from "react";

const PremiumContext = createContext(null);

export function PremiumProvider({ children }) {
  const [premium, setPremium] = useState(false);
  const [loaded, setLoaded] = useState(false);

  
  useEffect(() => {
    setPremium(localStorage.getItem("premium") === "true");
    setLoaded(true);
  }, []);

  useEffect(() => {
    if (loaded) localStorage.setItem("premium", String(premium));
  }, [premium, loaded]);

  return (
    <PremiumContext.Provider value={{ premium, setPremium, loaded }}>
      {children}
    </PremiumContext.Provider>
  );
}

export function usePremium() {
  return useContext(PremiumContext);
}