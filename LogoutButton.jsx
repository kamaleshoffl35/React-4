import { useContext } from "react";
import { UserContext } from "./UserContext";

const LogoutButton = () => {
  const { logout } = useContext(UserContext);
  return <button onClick={logout}>Logout</button>;
};

export default LogoutButton;
