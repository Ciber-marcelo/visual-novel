type ButtonMenuProps = {
   name: string
   onClick?: any
   disabled?: boolean
}

export default function ButtonMenu({ name, onClick, disabled }: ButtonMenuProps) {
   return (
      <button onClick={onClick} className="w-full h-[80px] p-[6px] bg-black" disabled={disabled}>
         <div className="h-full p-[4px] bg-gradient2">
            <div className={`flex justify-center items-center h-full bg-gradient3 text-colorText1 text-[28px] font-semibold 
               ${disabled === true ? "opacity-[0.1]" : "hover:bg-gradient1"}
            `}>
               {name}
            </div>
         </div>
      </button>
   );
}