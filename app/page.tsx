"use client";

import { useState, useEffect } from "react";

const usersData = [
  {
    name: "John Doe",
    age: 32,
    address: "123, Charming Avenue",
  },
  {
    name: "Clark Kent",
    age: 25,
    address: "456, Sunny Side Lane",
  },
  {
    name: "Bruce Wayne",
    age: 40,
    address: "789, Elegant Street",
  },
  {
    name: "Tony Stark",
    age: 35,
    address: "0123, Marvelous Boulevard",
  },
];

interface User {
  id: number;
  firstName: string;
}

const Page = () => {
  const [count, setCount] = useState<User[]>([]);
  useEffect(() => {
    const getUsers = async () => {
      const response = await fetch("https://dummyjson.com/users");
      const data = await response.json();
      console.log(data);
      setCount(data.users);
    };
    getUsers();
  }, []);

  return (
    <div className="flex flex-wrap items-center justify-center h-screen w-full">
      {count?.map((user, index) => {
        return (
          <div
            key={index}
            className="border border-black p-4 m-4 rounded-lg bg-green-300"
          >
            <h1 className="text-xl">User</h1>
            <p>ID:{user.id}</p>
            <p>firstName:{user.firstName}</p>
            
          </div>
        );
      })}
    </div>
  );
};
export default Page;
