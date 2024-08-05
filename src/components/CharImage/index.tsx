import Image from 'next/image';

type CharImageProps = {
   img: any
}

export default function CharImage({ img }: CharImageProps) {
   return (
      <Image src={img} alt={''} width={400} height={800} />
   )
}