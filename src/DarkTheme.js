import { useState, useEffect } from "react";

function DarkTheme() {
  const [theme, setTheme] = useState(false); // false = light, true = dark

  // Quando cambia theme, aggiorna la classe del body
  useEffect(() => {
    document.body.className = theme ? "dark" : "light";
  }, [theme]);

  const toggleTheme = () => {
    setTheme(!theme);
  };

  return (
    <button className="theme-button" onClick={toggleTheme}>
      Cambia Il Tema
    </button>
  );
}

export default DarkTheme;
