type ButtonMenuProps = {
   name: string
   onClick?: any
   disabled?: boolean
}

export default function ButtonMenu({ name, onClick, disabled }: ButtonMenuProps) {
   return (
      <button onClick={onClick} className="w-full h-[80px] p-[6px] bg-black" disabled={disabled}>
         <div className="h-full p-[4px] bg-gradient-to-b from-[#3E4EB1] to-[#1D265D]">
            <div className={`
               flex
               justify-center
               items-center
               h-full 
               bg-gradient-to-b from-[#0F00B7] to-[#070056]
               ${disabled !== true && "hover:from-[#1D265D] hover:to-[#3E4EB1]"}
               text-white 
               text-[28px] 
               font-semibold
               ${disabled === true ? "opacity-[0.1]" : "opacity-[0.9]"}
            `}>
               {name}
            </div>
         </div>
      </button>
   );
}