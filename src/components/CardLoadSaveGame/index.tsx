import Image from 'next/image';

type LoadCardProps = {
   // image?: any
   // title?: any
   // date?: Date
   deleteSave: any
   onclick?: any
}

export default function LoadCard({onclick, deleteSave}: LoadCardProps) {
   return (
      <div onClick={onclick} className="
         w-full 
         min-w-[421px] 
         h-[140px] 
         flex 
         box-border 
         border-[6px] 
         border-black 
         p-[14px] 
         bg-gradient-to-r from-[#1D265D] to-[#3E4EB1]
         hover:from-[#141a41] hover:to-[#2b367c]
         gap-5
         cursor-pointer
      ">
         <Image
            className="w-[178px] h-[100px] box-border border-[4px] border-black p-[10px] bg-blue-500"
            width={178}
            height={100}
            src={'./icons/Logo.png'}
            alt=''
            draggable={false}
         />
         <div className="w-full flex flex-col gap-2">
            <div className="text-white font-semibold text-[16px]">
               Capitulo 1
            </div>
            <div className="text-white font-semibold text-[16px]">
               1651646
            </div>
         </div>
         <div>
            <div onClick={(event) => {event.stopPropagation(); deleteSave();}} 
               className="
               w-[24px] 
               h-[24px] 
               flex 
               box-border 
               border-[4px] 
               border-black 
               justify-center 
               items-center
               text-white 
               font-bold 
               bg-red-500
               hover:bg-red-800
            ">
               X
            </div>
         </div>
      </div>
   )
}