import React from "react";

import UsersList from "../components/UsersList";

const Users = () => {
  const USERS = [
    {
      id: "u1",
      name: "Felipe Pessoto",
      image:
        "https://www.farmersalmanac.com/wp-content/uploads/2020/11/words-for-snow-AdobeStock_301401130.jpg",
      places: 3,
    },
  ];

  return <UsersList items={USERS} />;
};

export default Users;
