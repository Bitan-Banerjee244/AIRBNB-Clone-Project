import { createContext, useContext } from "react";

// Create context
const UserContext = createContext();

export const useUser = () => useContext(UserContext);

export const UserProvider = ({ children }) => {
  const SERVER_URL = "http://localhost:8000";

  let value = { SERVER_URL };
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
