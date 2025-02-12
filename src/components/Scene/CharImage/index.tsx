import Image from 'next/image';

type CharImageProps = {
   charImg: string
   faceImg: string
}

export default function CharImage({ charImg, faceImg }: CharImageProps) {
   return (
      <div className="flex w-[570px] h-[600px] relative">
         <Image
            src={charImg}
            alt={''}
            width={570}
            height={600}
            draggable={false}
         />

         <Image
            className='absolute top-[90px] left-[195px]'
            src={faceImg}
            alt={''}
            width={180}
            height={180}
            draggable={false}
         />
      </div>
   )
}