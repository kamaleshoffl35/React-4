import { useContext } from "react";
import { UserContext } from "./UserContext";

const WelcomeMessage = () => {
  const { isLoggedIn, username } = useContext(UserContext);

  return (
    <div style={{ marginTop: "10px" }}>
      {isLoggedIn ? (
        <h2>Welcome, {username} 🎉</h2>
      ) : (
        <h2>Please log in.</h2>
      )}
    </div>
  );
};

export default WelcomeMessage;
