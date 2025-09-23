"use client";

import { useState } from "react";

export default function ExampleHttp() {
  // useState hook is used to keep track of data inside a component
  // Initially, it will be an empty array here. []

  const [users, setUsers] = useState<{ name: string; age: number }[]>([]);

  return (
    <div className="p-8">
      <h1>Example Http</h1>

      <button
        className="bg-amber-500 p-2 rounded-md cursor-pointer hover:bg-amber-700"
        type="button"
        onClick={async () => {
          // Fetch data from our backend API http://localhost:3000/api/users
          const response = await fetch("http://localhost:3000/api/users");

          const data = await response.json();

          console.log(data);

          // Update the component's state with the fetched data
          // This tirggers a re-render - React will update the UI with the new list of users
          setUsers(data);
        }}
      >
        Fetch Data
      </button>

      <ol>
        {users.map((user) => (
          // React requires a "key" when rendering lists - here we use user.name as the unique key
          // In real apps, It is better to use a unique ID if available
          <li key={user.name}>
            {user.name} - {user.age}
          </li>
        ))}
      </ol>
    </div>
  );
}
