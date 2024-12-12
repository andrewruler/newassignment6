import { createContext, useState, useContext } from 'react';

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [userData, setUserData] = useState({
    firstName: "",
    lastName: "",
    username: "",
    email: "",
    pass: "",
    genres: [],
  });

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const updateUser = (field, value) => {
    setUserData((prevData) => ({
      ...prevData,  
      [field]: value, 
    }));
  };

  const updateGenre = (genre) => {
    setUserData((prevData) => {
      const isGenreSelected = prevData.genres.includes(genre);
  
      if (isGenreSelected) {
        return {
          ...prevData,
          genres: prevData.genres.filter((g) => g !== genre),
        };
      } else {
        return {
          ...prevData,
          genres: [...prevData.genres, genre],
        };
      }
    });
  };
  
  const toggleLogin = (boolean) => {
    setIsLoggedIn(boolean);
  }

  const checkLogin = () => {
    return isLoggedIn;
  }

  return (
    <UserContext.Provider value={{ userData, checkLogin, updateUser, updateGenre, toggleLogin }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUserContext = () => {
  return useContext(UserContext);
}
