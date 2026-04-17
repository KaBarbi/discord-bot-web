type Command = {
  command: string
  description: string
  args: string[]
}

type Category = {
  commands: Command[]
}

const categories: Category[] = [
  {
    commands: [
      {
        command: '/help',
        description: 'Show all available commands',
        args: [],
      },
    ],
  },
  {
    commands: [
      {
        command: '/add',
        description: 'Add two numbers',
        args: ['x', 'y'],
      },
    ],
  },
  {
    commands: [
      {
        command: '/weather',
        description: 'Get weather for a city',
        args: ['city'],
      },
    ],
  },
  {
    commands: [
      {
        command: '/dice',
        description: 'Roll a dice with a specified number of sides',
        args: ['sides'],
      },
    ],
  },
  {
    commands: [
      {
        command: '/convert',
        description: 'Convert currencies',
        args: ['amount', 'from', 'to'],
      },
      {
        command: '/dolar',
        description: 'Get USD to BRL exchange rate',
        args: [],
      },
    ],
  },
  {
    commands: [
      {
        command: '/sort',
        description: 'Pick a random winner from a list of names',
        args: ['names'],
      },
    ],
  },
]

function Commands() {
  return (
    <div className="w-screen min-h-screen flex justify-center items-start p-6">
      <div className="w-full max-w-225 flex flex-col gap-6">
        {/* CARD RETURN */}
        <div className="bg-[#202225] rounded-xl p-6 shadow-lg">
          <h1 className="text-white text-xl font-bold mb-2">
            List of Commands
          </h1>

          <p className="text-gray-300 text-md mb-4 leading-relaxed">
            Here you will find the complete list of commands available for
            Gleice Bot on Discord, along with their descriptions and usage
            examples.
          </p>

          <button className="flex items-center gap-2 border border-[#5865f2] text-[#5865f2] px-4 py-2 rounded-md hover:bg-[#5865f2]/10 transition">
            ← Return
          </button>
        </div>

        {/* CONTAINER */}
        <div className="w-full bg-[#202225] rounded-xl p-5 shadow-lg">
          {categories.map((category, index) => (
            <div key={index} className="mb-6 last:mb-0">
              <div className="flex flex-col gap-3">
                {category.commands.map((cmd, i) => (
                  <div
                    key={i}
                    className="flex items-center bg-[#2b2d31] rounded-lg p-3 text-white"
                  >
                    {/* Command Box */}
                    <div className="flex gap-2 bg-[#1e1f22] border border-[#40444b] px-3 py-1 rounded-md font-bold mr-3 whitespace-nowrap">
                      {cmd.command}

                      {cmd.args.length > 0 && (
                        <div className="flex gap-1 flex-wrap">
                          {cmd.args.map((arg, idx) => (
                            <span
                              key={idx}
                              className="bg-[#5865f2] content-center text-white px-2 py-0.5 rounded text-xs uppercase"
                            >
                              {arg}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>

                    {/* Description */}
                    <div className="flex flex-col">
                      <span>{cmd.description}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Commands
