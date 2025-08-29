import { useContext } from "react";
import { UserContext } from "./UserContext";

const LoginButton = () => {
  const { login } = useContext(UserContext);

  const handleLogin = () => {
    const name = prompt("Enter your username:"); // simple input for demo
    if (name) login(name);
  };

  return <button onClick={handleLogin}>Login</button>;
};

export default LoginButton;
