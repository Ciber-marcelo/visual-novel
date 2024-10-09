'use client'

import { ProviderScene } from "@/contexts/context-scene";
import MainPage from "@/components/MainPage";

export default function Home() {
  return (
    <div>
      <ProviderScene>
        <MainPage />
      </ProviderScene>
    </div>
  );
}