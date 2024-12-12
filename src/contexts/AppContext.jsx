import { createContext, useState } from 'react';

const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [username, setUsername] = useState("");

  const updateUsername = (newUsername) => {
    setUsername(newUsername)
  };

  return (
    <AppContext.Provider value={{ username, updateUsername}}>
      {children}
    </AppContext.Provider>
  );
};

export { AppProvider, AppContext };
