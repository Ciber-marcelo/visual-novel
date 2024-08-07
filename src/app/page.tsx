'use client'

import Scene from "@/components/Scene";
import { ProviderScene } from "@/contexts/context-scene";
import { ProviderInfo } from "@/contexts/context-info";


export default function Home() {

  return (
    <div>
      <ProviderScene>
        <ProviderInfo>
          <Scene />
        </ProviderInfo>
      </ProviderScene>
    </div>
  );
}
