import Image from 'next/image';

type sceneProps = {
   background: any
   charSrc: string
   dialogue: any
}

export default function Scene({ background, charSrc, dialogue }: sceneProps) {
   return (
      <div className={`flex flex-col items-center justify-center h-screen bg-cover bg-center bg-${background}`}>

         <div>
            <Image src={charSrc} alt={''} width={200} height={400} />
         </div>

         <div className="bg-blue-500 text-white p-5 rounded-lg">
            <p>{dialogue}</p>
         </div>

      </div>
   )
}

