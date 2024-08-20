import Image from 'next/image';

type CharImageProps = {
   img: string
}

export default function CharImage({ img }: CharImageProps) {
   return (
      <Image 
         src={img} 
         alt={''} 
         width={600} 
         height={1200} 
         draggable={false}
      />
   )
}