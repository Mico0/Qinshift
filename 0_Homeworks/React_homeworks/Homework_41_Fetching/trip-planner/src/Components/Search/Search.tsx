import { useEffect, useState } from "react";

interface SearchProps {
  handleChange?: (input: string) => void;
}

function Search({ handleChange }: SearchProps) {
  const [value, setValue] = useState("");

  useEffect(() => {
    // console.log("IN TIMEOUT FUNC");
    const timerId = setTimeout(() => {
      if (handleChange) {
        handleChange(value);
      }
    }, 1000);

    return () => {
      // console.log("CLEARING TIMEOUT");
      clearTimeout(timerId);
    };
  }, [value]);

  return (
    <div className="flex px-4 py-3 rounded-md border-2 border-blue-500 overflow-hidden max-w-[40vw] w-full m-auto col-span-full">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 192.904 192.904"
        width="16px"
        className="fill-gray-600 mr-3 rotate-90"
      >
        <path d="m190.707 180.101-47.078-47.077c11.702-14.072 18.752-32.142 18.752-51.831C162.381 36.423 125.959 0 81.191 0 36.422 0 0 36.423 0 81.193c0 44.767 36.422 81.187 81.191 81.187 19.688 0 37.759-7.049 51.831-18.751l47.079 47.078a7.474 7.474 0 0 0 5.303 2.197 7.498 7.498 0 0 0 5.303-12.803zM15 81.193C15 44.694 44.693 15 81.191 15c36.497 0 66.189 29.694 66.189 66.193 0 36.496-29.692 66.187-66.189 66.187C44.693 147.38 15 117.689 15 81.193z"></path>
      </svg>
      <input
        onChange={(e) => setValue(e.target.value)}
        value={value}
        type="email"
        placeholder="Search for a country"
        className="w-full outline-none bg-transparent text-gray-600 text-sm"
      />
    </div>
  );
}

export default Search;
