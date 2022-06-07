import React from "react";
import { useContext } from "react";
import { UserContext } from "./index";

export default function User() {
  const user = useContext(UserContext);
  return (
    <div className=" w-1 select-none  text-red h-1 active:bg-green-500 cursor-pointer border-2 m-5 p-10 bg-red-500 hover:bg-blue-500">
      {user}
      <br />
      User
    </div>
  );
}
