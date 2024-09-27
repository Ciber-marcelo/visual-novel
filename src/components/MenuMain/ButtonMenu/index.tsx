type ButtonMenuProps = {
   name: string
   onClick?: any
}

export default function ButtonMenu({ name, onClick }: ButtonMenuProps) {
   return (
      <button
         onClick={onClick}
         className="p-3 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300"
      >
         {name}
      </button>
   );
}