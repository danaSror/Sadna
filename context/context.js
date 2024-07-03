import { createContext, useState } from "react";

export const DarkContext = createContext();

export default function Context({ children }) {
    const [darkMode, setDarkMode] = useState(false);
  
    return (
      <DarkContext.Provider value={{ darkMode, setDarkMode }}>
        {children}
      </DarkContext.Provider>
    );
};
  
