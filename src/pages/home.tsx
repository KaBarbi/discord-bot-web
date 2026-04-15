import ButtonAdd from '../components/buttonadd'
import ButtonCmd from '../components/buttoncmd'

const Home = () => {
  return (
    <div className="flex justify-center p-6">
      <div className="flex flex-row items-center bg-[#202225] rounded-xl shadow-lg max-w-225 w-full p-8 gap-8 mb-5 md:flex-col md:text-center md:p-5">
        <img
          src="/images/gleiceAI.png"
          alt="Descrição"
          className="w-50 h-50 object-cover rounded-xl md:w-62.5 md:h-62.5"
        />

        <div className="flex flex-col justify-center flex-1">
          <h2 className="text-2xl font-bold mb-4 text-white md:text-xl">
            Gleice Discord Bot
          </h2>

          <p className="text-[#b9bbbe] text-base mb-5 md:text-sm md:max-w-87.5 md:mx-auto">
            Personal project created to explore and expand my programming
            knowledge. Through it, I am learning to develop and integrate
            various technologies.
          </p>

          <div className="flex gap-4 md:justify-center">
            <ButtonAdd />
            <ButtonCmd />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
