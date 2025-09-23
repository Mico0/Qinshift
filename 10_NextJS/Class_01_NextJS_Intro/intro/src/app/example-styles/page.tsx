"use client";

export default function Page() {
  return (
    <div>
      <h1 className="text-3xl font-bold">Example Styles</h1>
      <p className="text-2xl">This is an example of a paragraph text</p>
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-700 shadow-md"
        onClick={() => console.log("Button was clicked!")}
      >
        Click me!
      </button>
    </div>
  );
}
