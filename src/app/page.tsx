'use client'

import Scene from "@/components/Scene";
import { Provider } from "@/contexts/context";

export default function Home() {

  return (
    <div>
      <Provider>
        <Scene />
      </Provider>
    </div>
  );
}
