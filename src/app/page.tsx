'use client'

import { ProviderScene } from "@/contexts/context-scene";
import Scene from "@/components/Scene";

export default function Home() {
  return (
    <div>
      <ProviderScene>
          {/* <Main /> */}
          <Scene />
      </ProviderScene>
    </div>
  );
}
