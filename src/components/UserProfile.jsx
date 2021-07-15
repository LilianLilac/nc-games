import { useContext } from "react";
import { UserContext } from "../contexts/User";

const UserProfile = () => {
  const { user } = useContext(UserContext);
  return (
    <div>
      <p>Logged in as: {user.username}</p>
    </div>
  );
};

export default UserProfile;
