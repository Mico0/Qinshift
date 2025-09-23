"use client";

import { useState } from "react";
import Child from "./child";
import Sibling from "./sibling";

export default function Parent() {
  // Every time we call setCount(newValue), React(Next) re-renders this component (and its children);
  const [count, setCount] = useState(1);

  console.log("Parent render: ", count);

  return (
    <div className="p-8">
      <button onClick={() => setCount(count + 1)}>
        INCREASE COUNT FROM PARENT
      </button>
      <Child count={count} setCount={setCount} />
      <Sibling />
    </div>
  );
}
