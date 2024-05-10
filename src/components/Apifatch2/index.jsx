import React, { useEffect, useState } from "react";

const UserName = () => {
  const [user, setUser] = useState([]);
  const getBlogsFn = async () => {
    const response = await fetch("https://dummyjson.com/users");
    const user = await response.json();
    setUser(user.users);
    console.log(user);
  };

  useEffect(() => {
    getBlogsFn(user);
  }, []);
  console.log(user);
  return (
    <div className="flex flex-col gap-2 bg-yellow-200 p-5">
      <table className="grid gap-3 bg-white">
        {user?.map((user) => (
          <tr className="grid grid-cols-8 gap-2 bg-slate-300 rounded-md">
            <td key={user.id}>
              <img src={user.image} alt="" className="h-16 w-14" />
            </td>
            <td key={user.id}>{user.firstName}</td>
            <td key={user.id}>{user.lastName}</td>
            <td key={user.id}>{user.maidenName}</td>
            <td key={user.id}>{user.age}</td>
            <td key={user.id}>{user.gender}</td>
            <td key={user.id}>{user.email}</td>
            <td key={user.id}>{user.phone}</td>
          </tr>
        ))}
      </table>
    </div>
  );
};

export default UserName;
