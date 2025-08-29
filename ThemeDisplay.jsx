import { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

const ThemeDisplay = () => {
  const { theme } = useContext(ThemeContext);

  const style = {
    padding: "20px",
    margin: "10px 0",
    borderRadius: "8px",
    backgroundColor: theme === "light" ? "#f5f5f5" : "#333",
    color: theme === "light" ? "#000" : "#fff",
  };

  return <div style={style}>Current Theme: <strong>{theme}</strong></div>;
};

export default ThemeDisplay;
