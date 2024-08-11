'use client'

import { ProviderScene } from "@/contexts/context-scene";
import { ProviderInfo } from "@/contexts/context-info";
import Main from "@/components/Main";

export default function Home() {
  return (
    <div>
      <ProviderScene>
        <ProviderInfo>
          <Main />
        </ProviderInfo>
      </ProviderScene>
    </div>
  );
}
