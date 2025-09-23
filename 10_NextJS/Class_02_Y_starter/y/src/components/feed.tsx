"use client";

import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "../components/ui/tabs";
import { cn } from "@/lib/utils";
import { useState } from "react";
import ForYou from "./for-you";
import Following from "./following";

enum TabsValue {
  ForYou = "for-you",
  Following = "following",
}

export default function Feed() {
  const [selectedTab, setSelectedTab] = useState<TabsValue>(TabsValue.ForYou);

  return (
    <Tabs
      // Default tab when the component first loads
      defaultValue={TabsValue.ForYou}
      // Radix passes back the "value" of the clicked tab trigger.
      // We store it in React state so we can style the tabs accordingly.
      onValueChange={(value) => setSelectedTab(value as TabsValue)}
    >
      <TabsList className="border-b-2 border-gray-600">
        <TabsTrigger
          value={TabsValue.ForYou}
          className={cn(
            "py-3 px-5",
            // If this tab is active, apply black font + blue underline
            selectedTab === TabsValue.ForYou &&
              "font-black border-b-4 border-blue-400",
            // If NOT active, apply gray text
            selectedTab !== TabsValue.ForYou && "text-slate-400"
          )}
        >
          For you
        </TabsTrigger>
        <TabsTrigger
          value={TabsValue.Following}
          className={cn(
            "py-3 px-5",
            selectedTab === TabsValue.Following &&
              "font-black border-b-4 border-blue-400",
            selectedTab !== TabsValue.ForYou && "text-slate-400"
          )}
        >
          Following
        </TabsTrigger>
      </TabsList>
      <TabsContent value={TabsValue.ForYou}>
        <ForYou />
      </TabsContent>
      <TabsContent value={TabsValue.Following}>
        <Following />
      </TabsContent>
    </Tabs>
  );
}
