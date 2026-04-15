const ButtonAdd = () => {
  return (
    <a
      href="https://discord.com/oauth2/authorize?client_id=1306407860493877258&scope=bot%20applications.commands&permissions=8"
      target="_blank"
      rel="noopener noreferrer"
      className="relative inline-block px-12 py-2 text-[17px] font-normal uppercase text-[#5865f2] border border-[#5865f2] rounded-md overflow-hidden transition-all duration-500 group hover:text-[#0a191e]"
    >
      Add
      <span className="absolute -top-4 -left-4 w-10 h-10 bg-[#5865f2] rounded-full transition-all duration-700 ease-in-out group-hover:w-105 group-hover:h-105 z-[-1]" />
      <span className="absolute -bottom-4 -right-4 w-10 h-10 bg-[#5865f2] rounded-full transition-all duration-700 ease-in-out group-hover:w-105 group-hover:h-105 z-[-1]" />
    </a>
  )
}

export default ButtonAdd
