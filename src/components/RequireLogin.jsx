import { useContext } from "react";
import { UserContext } from "../contexts/User";

const RequireLogin = ({ children }) => {
  const { user, setUser } = useContext(UserContext);

  const handleSubmit = (event) => {
    event.preventDefault();
    setUser({ username: "jessjelly " });
  };

  if (user.username) return children;
  return (
    <div>
      <h3>You need to login to post a comment!</h3>
      <form onSubmit={handleSubmit}>
        <button>Login as jessjelly</button>
      </form>
    </div>
  );
};

export default RequireLogin;
