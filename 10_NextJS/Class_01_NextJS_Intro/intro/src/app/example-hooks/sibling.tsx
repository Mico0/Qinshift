"use client";

import { useState } from "react";

export default function Sibling() {
  console.log("Sibling rendering...");

  const [message, setMessage] = useState("Hello from the sibling component!");

  return (
    <div>
      <h1>Sibling Component</h1>
      <p>{message}</p>
      <button onClick={() => setMessage("This is the changed message!")}>
        Change the message!
      </button>
    </div>
  );
}
