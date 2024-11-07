'use client'

import { ProviderScene } from "@/contexts/context-scene";
import CurrentPage from "@/components/CurrentPage";
import ResponsiveDiv from "@/components/ResponsiveDiv";

export default function Home() {
  return (
    <div className="w-screen h-screen flex items-center justify-center overflow-hidden">
      <div className="aspect-full-width aspect-full-height aspect-[16/9] bg-red-400">
        <ResponsiveDiv>
          <ProviderScene>
            <CurrentPage />
          </ProviderScene>
        </ResponsiveDiv>
      </div>
    </div>
  );
}