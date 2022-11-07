import React, { useContext, useEffect, useState } from "react";
import UsersContext from "../../store/users-context";
import UserCard from "../UI/Card/UserCard";
import AppErrorMessage from "../UI/Error/AppErrorMessage";

import AppCurcularProgress from "../UI/Progress/AppCurcularProgress";

const Users = () => {
  const ctx = useContext(UsersContext);

  const [loading, setLoading] = useState(true);

  const [usersError, setUsersError] = useState(false);

  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const fetchUsers = async () => {
      const data = await ctx.onGetUsers();
      if (data.success) {
        ctx.assignUsersValue(data.usersData.users, data.usersData);
        setLoading(false);
      } else {
        setUsersError(data.message);
      }
    };

    fetchUsers();
  }, []);

  const handleShowMore = async () => {
    setLoading(true);

    const nextPage = ctx.usersData.page + 1;
    const data = await ctx.onGetUsers(nextPage);

    if (data.success) {
      ctx.assignUsersValue(data.usersData.users, data.usersData);

      setLoading(false);

      setHidden(data.usersData.total_pages === nextPage);
    } else {
      setUsersError(data.message);
    }
  };

  return (
    <div className="mt-6">
      <h1 className="text-center">Working with GET request</h1>
      <div className="p-4">
        <div className="row row-cols row-cols-md-2 row-cols-lg-3 g-3 g-lg-4 ">
          {ctx.users.map((user) => {
            return (
              <div className="col" key={user.id}>
                <UserCard user={user} />
              </div>
            );
          })}
        </div>
      </div>
      <AppErrorMessage error={usersError} />
      <AppCurcularProgress loading={loading} />
      <div className="d-flex justify-content-center">
        <button hidden={hidden} className="mt-3" onClick={handleShowMore}>
          Show More
        </button>
      </div>
    </div>
  );
};

export default Users;
