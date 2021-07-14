import { useContext } from "react";
import { UserContext } from "../contexts/User";

const RequireLogin = ({ children }) => {
  const { user } = useContext(UserContext);

  if (user.username) return children;
  return (
    <div>
      <h1>You need to login to post a comment!</h1>
    </div>
  );
};

export default RequireLogin;
