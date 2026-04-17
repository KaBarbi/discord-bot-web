import { Link } from 'react-router-dom'

function ButtonBack() {
  return (
    <Link
      to="/"
      className="group relative w-40 h-10 rounded-md border-2 border-[#5865f2] text-[#5865f2] font-semibold flex items-center justify-center pl-4 overflow-hidden transition-all duration-300"
    >
      {/* Icon container */}
      <div className="absolute left-0 top-0 h-full w-1/4 bg-[#5865f2] grid place-items-center z-10 transition-all duration-500 group-hover:w-full">
        <svg
          width="20"
          height="20"
          viewBox="0 0 1024 1024"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill="#000000"
            d="M224 480h640a32 32 0 1 1 0 64H224a32 32 0 0 1 0-64z"
          />
          <path
            fill="#000000"
            d="m237.248 512 265.408 265.344a32 32 0 0 1-45.312 45.312l-288-288a32 32 0 0 1 0-45.312l288-288a32 32 0 1 1 45.312 45.312L237.248 512z"
          />
        </svg>
      </div>

      {/* Text */}
      <span className="relative z-20 translate-x-4">Return</span>
    </Link>
  )
}

export default ButtonBack
