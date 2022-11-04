import React, { useEffect, useState } from "react";
import { onGetUsers } from "../../api/user";
import GetRequestCard from "../UI/GetRequestCard";

import { CircularProgress } from "@mui/material";

const GetRequest = () => {
  const [users, setUsers] = useState([]);
  const [usersData, setUsersData] = useState({});
  const [loading, setLoading] = useState(true);

  const [hidden, setHidden] = useState(false);

  const fetchUsers = async (page = 1) => {
    const usersData = await onGetUsers(page);

    return usersData;
  };

  useEffect(() => {
    fetchUsers().then((data) => {
      if (data.success) {
        setUsersData(data);
        setUsers(data.users);

        setLoading(false);
      }
    });
  }, []);

  const handleShowMore = () => {
    setLoading(true);

    const nextPage = usersData.page + 1;

    fetchUsers(nextPage).then((data) => {
      if (data.success) {
        setUsersData(data);
        setUsers((prevState) => {
          return [...prevState, ...data.users];
        });

        setLoading(false);

        setHidden(data.total_pages === nextPage);
      }
    });
  };

  return (
    <div className="mt-6">
      <h1 className="text-center m-3 mb-5">Working with GET request</h1>
      <div className="p-4">
        <div className="row row-cols row-cols-md-2 row-cols-lg-3 g-3 g-lg-4 ">
          {users.map((user) => {
            return (
              <div className="col" key={user.id}>
                <GetRequestCard user={user} />
              </div>
            );
          })}
        </div>
      </div>
      {loading && (
        <div className="d-flex justify-content-center mb-5">
          <CircularProgress />
        </div>
      )}
      <div className="d-flex justify-content-center">
        <button hidden={hidden} className="mt-3" onClick={handleShowMore}>
          Show More
        </button>
      </div>
    </div>
  );
};

export default GetRequest;
