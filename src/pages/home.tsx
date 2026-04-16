import ButtonAdd from '../components/buttonadd'
import ButtonCmd from '../components/buttoncmd'

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-6 gap-6">
      {/* Card principal */}
      <div className="flex items-center bg-[#202225] rounded-xl shadow-lg max-w-900 w-full p-8 gap-8">
        {/* IMAGEM */}
        <img
          src="/images/gleiceAI.png"
          alt="Gleice Bot"
          className="w-50 h-auto object-cover rounded-xl shrink-0"
        />

        {/* CONTEÚDO */}
        <div className="flex flex-col justify-center items-start flex-1">
          <h2 className="text-3xl font-bold text-white mb-3 leading-tight">
            Gleice Discord Bot
          </h2>

          <p className="text-[#b9bbbe] text-lg mb-6 max-w-150 leading-relaxed">
            Personal project created to explore and expand my programming
            knowledge. Through it, I am learning to develop and integrate
            various technologies.
          </p>

          <div className="flex gap-4">
            <ButtonAdd />
            <ButtonCmd />
          </div>
        </div>
      </div>

      {/* Card contato */}
      <div className="w-full max-w-225 bg-[#202225] rounded-xl p-6 shadow-lg">
        <h3 className="text-lg font-semibold text-white mb-3">Contact Me</h3>

        <p className="text-lg text-[#b9bbbe] mb-5 leading-relaxed">
          Feel free to try and help me improve this project. For questions,
          suggestions, or reporting issues, contact me through the means below:
        </p>

        <div className="space-y-3 text-white text-base">
          <p>
            <strong>Email: </strong>
            <a
              href="mailto:kauebarbicode@gmail.com"
              className="text-[#5865f2] hover:text-[#4752c4]"
            >
              kauebarbicode@gmail.com
            </a>
          </p>

          <p>
            <strong>Discord: </strong>
            <span className="bg-[#2b2d31] px-2 py-1 rounded text-sm font-semibold">
              bs_barbi
            </span>
          </p>
        </div>
      </div>

      {/* Footer */}
      <p className="text-[#b9bbbe] select-none text-md">Barbi © 2026</p>
    </div>
  )
}

export default Home
