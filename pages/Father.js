import React from "react";
import Child from "./Child";

export default function Father() {
  return <div className="bg-black text-white">
Father
    <Child />
  </div>
}
