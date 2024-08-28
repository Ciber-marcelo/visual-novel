import React, { useEffect, useRef } from 'react';

type MusicProps = {
   musicSrc: string
}

export default function Music({ musicSrc }: MusicProps) {
   const audioRef = useRef<HTMLAudioElement>(null);

   useEffect(() => {
      if (audioRef.current) {
         audioRef.current.src = musicSrc;
         audioRef.current.play();
      }
   }, [musicSrc]);

   return (
      <div className="">
         <audio ref={audioRef} controls autoPlay loop/>
         
         {/* <audio controls>
            <source src={musicSrc} type="audio/mpeg" />
            Your browser does not support the audio element.
         </audio> */}
      </div>
   )
}