import { createContext } from "react";

const UserContext = createContext({
  name: "Ismail bhai",
  email: "default@example.com",
});

export default UserContext;
