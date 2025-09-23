"use client";

import { AvatarFallback } from "@radix-ui/react-avatar";
import { Avatar, AvatarImage } from "./ui/avatar";

export default function ComposeTweet() {
  return (
    <div className="flex flex-row p-4 gap-4 border-b-2 border-gray-600">
      <div>
        <Avatar>
          <AvatarImage
            src="https://github.com/shadcn.png"
            className="w-12 h-12 rounded-full"
          />
          <AvatarFallback>Avatar</AvatarFallback>
        </Avatar>
      </div>
      <div>This is where the textarea is going to be rendered.</div>
      <div>This is where the button is going to be rendered.</div>
    </div>
  );
}
