import { createContext, useContext, useState } from "react";

// Create context
const UserContext = createContext();

export const useUser = () => useContext(UserContext);

export const UserProvider = ({ children }) => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const SERVER_URL = "http://localhost:8000";

  let value = { SERVER_URL, setSelectedCategory, selectedCategory };
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
