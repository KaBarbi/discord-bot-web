import { Link } from 'react-router-dom'

const ButtonCmd = () => {
  return (
    <Link
      to="/commands"
      className="relative inline-block px-10 py-2 text-[17px] font-normal uppercase text-[#5865f2] border border-[#5865f2] rounded-md overflow-hidden transition-all duration-500 group hover:text-[#0a191e]"
    >
      Commands
      <span className="absolute -top-4 -left-4 w-10 h-10 bg-[#5865f2] rounded-full transition-all duration-700 ease-in-out group-hover:w-105 group-hover:h-105 z-[-1]" />
      <span className="absolute -bottom-4 -right-4 w-10 h-10 bg-[#5865f2] rounded-full transition-all duration-700 ease-in-out group-hover:w-105 group-hover:h-105 z-[-1]" />
    </Link>
  )
}

export default ButtonCmd
