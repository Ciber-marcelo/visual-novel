type ButtonMenuProps = {
   name: string
   onClick?: any
}

export default function ButtonMenu({ name, onClick }: ButtonMenuProps) {
   return (
      <button onClick={onClick} className="w-[400px] h-[80px] p-[6px] bg-black">
         <div className="h-full p-[4px] bg-gradient-to-b from-[#3E4EB1] to-[#1D265D]">
            <div className="
               flex
               justify-center
               items-center
               h-full 
               bg-gradient-to-b from-[#0F00B7] to-[#070056]
               hover:from-[#1D265D] hover:to-[#3E4EB1] 
               text-white
               text-[28px] 
               font-semibold
               opacity-[0.9]
            ">
               {name}
            </div>
         </div>
      </button>
   );
}