import React, { useEffect, useRef } from 'react';

type MusicProps = {
   musicSrc: string
}

export default function Music({ musicSrc }: MusicProps) {
   const audioRef = useRef<HTMLAudioElement>(null);

   useEffect(() => {
      const audioElement = audioRef.current;

      if (audioElement) {
         // Pausa o áudio atual e aguarda antes de alterar a fonte para evitar o erro no console
         const handleAudioChange = async () => {
            try {
               audioElement.pause(); // Pause o áudio atual

               // Altera a fonte e carrega o novo áudio
               audioElement.src = musicSrc;
               await audioElement.load();

               // Reproduz o novo áudio
               await audioElement.play();
               console.log('Áudio reproduzido com sucesso');
            } catch (error) {
               console.error('Erro ao tentar reproduzir o áudio:', error);
            }
         };

         handleAudioChange();
      }
   }, [musicSrc]);

   return (
      <div className="">
         <audio ref={audioRef} controls autoPlay loop />

         {/* <audio controls>
            <source src={musicSrc} type="audio/mpeg" />
            Your browser does not support the audio element.
         </audio> */}
      </div>
   )
}