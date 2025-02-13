import Image from 'next/image';

type LoadCardProps = {
   // image?: any
   // title?: any
   // date?: Date
   deleteSave: any
   onclick?: any
}

export default function CardLoadSaveGame({onclick, deleteSave}: LoadCardProps) {
   return (
      <button onClick={onclick} className="w-full h-[140px] flex box-border gap-5 border-[6px] border-black p-[14px] bg-gradient1 hover:bg-gradient3">
         <Image
            className="w-[178px] h-[100px] box-border border-[4px] border-black p-[10px] bg-blue-500"
            width={178}
            height={100}
            src={'./icons/Logo.png'}
            alt=''
            draggable={false} 
         />
         <div className="w-full flex flex-col gap-2">
            <div className="text-colorText1 font-semibold text-[16px]">
               Capitulo 1
            </div>
            <div className="text-colorText1 font-semibold text-[16px]">
               1651646
            </div>
         </div>
         <div>
            {/* 'stopPropagation()' serve para que o onclick do card não seja ativado quando clicar no botao de delete "X" */}
            <div onClick={(event) => {event.stopPropagation(); deleteSave();}} 
               className="
               w-[24px] 
               h-[24px] 
               flex 
               justify-center 
               items-center
               box-border 
               border-[4px] 
               border-black 
               text-colorText1 
               font-bold 
               bg-red-500
               hover:bg-red-800
            ">
               X
            </div>
         </div>
      </button>
   )
}