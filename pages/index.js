import { createContext, useState } from "react";
import User from "./User";
import Father from "./Father";
export const UserContext = createContext("Zac");

export default function Home(){
  const [number, setNumber] = useState(0);
  const inc = () => setNumber(number + 1);

  return (
    <UserContext.Provider value={number}>
        <button onClick={inc}>INC</button>
        <div className="grid grid-cols-2">
          <User />
          <User />
          <User />
          <Father />
        </div>
    </UserContext.Provider>
    )  
};
