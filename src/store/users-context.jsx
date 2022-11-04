import React, { useState } from "react";
import UserService from "../services/UserService";

const UsersContext = React.createContext({
  users: [],
  usersData: {},
  onGetUsers: (f) => f,
  assignUsersValue: (users, usersData) => {},
});

export const UsersContextProvider = ({ children }) => {
  const [users, setUsers] = useState([]);
  const [usersData, setUsersData] = useState({});

  const fetchUsers = async (page = 1) => {
    const response = await UserService.getUsers(page);

    return response;
  };

  const assignUsersValue = (users, usersData, merge = true) => {
    if (merge) {
      setUsers((prevState) => {
        return [...prevState, ...users];
      });
    } else {
      setUsers(users);
    }
    setUsersData(usersData);
  };

  return (
    <UsersContext.Provider
      value={{
        users: users,
        usersData: usersData,
        onGetUsers: fetchUsers,
        assignUsersValue: assignUsersValue,
      }}
    >
      {children}
    </UsersContext.Provider>
  );
};

export default UsersContext;
