import { useContext } from "react";
import { UserContext } from "../contexts/User";

const UserProfile = () => {
  const { user } = useContext(UserContext);
  console.log(user);
  return (
    <div>
      <h2>Hi {user.username}</h2>
    </div>
  );
};

export default UserProfile;
