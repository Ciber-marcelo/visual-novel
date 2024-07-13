'use client'

import { useState } from 'react';
import Scene from "@/components/Scene";

const scenes = [
  {
    background: "/images/background1.jpg",
    charSrc: "/jaden/jaden_1.png",
    dialogue: "dialogo 1"
  },
  {
    background: "/images/background2.jpg",
    charSrc: "/jaden/jaden_2.png",
    dialogue: "dialogo 2 blz"
  }
];

export default function Home() {
  const [currentScene, setCurrentScene] = useState(0);

  function nextScene() {
    if (currentScene < scenes.length - 1) {
      setCurrentScene(currentScene + 1);
    }
  };

  return (
    <div onClick={() => nextScene()}>
      <Scene {...scenes[currentScene]} />
    </div>
  );
}
