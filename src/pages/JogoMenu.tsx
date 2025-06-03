import { Link } from 'react-router-dom';

export default function JogoMenu() {
  return (
    <div className="min-h-screen bg-white pb-20">

      {/* parte para ajuste */}
      <section className="relative overflow-hidden
            flex items-center
            pt-28 pb-24
            bg-gradient-to-br from-blue-700 to-indigo-900 text-white shadow-lg">
        {/* backgroundzinho */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-indigo-800/20 backdrop-blur-sm z-0"></div>

        <div className="max-w-4xl mx-auto px-8 text-center relative z-10">
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-6 animate-fade-in-up">
            Choque <span className="text-cyan-300">Jurídico</span>
            <br />
          </h1>
          <Link
            to="/jogar"
            className="inline-block px-10 py-4 rounded-full text-white font-bold text-lg bg-gradient-to-r from-teal-400 to-blue-500 shadow-xl
              hover:from-teal-500 hover:to-blue-600 transition transform hover:-translate-y-1 active:translate-y-0
              focus:outline-none focus:ring-4 focus:ring-blue-300 focus:ring-opacity-70 group overflow-hidden mt-8"
          >
            Jogue Agora
            {/* efeito ao passar o mouse*/}
            <span className="absolute inset-0 block bg-gradient-to-r from-white to-transparent opacity-0 transform -skew-x-12 -translate-x-full
              group-hover:opacity-30 group-hover:translate-x-full transition-all duration-700 ease-out"></span>
          </Link>
        </div>
      </section>

      {/* explicando mais sobre o jogo*/}
      <section className="max-w-5xl mx-auto px-8 mt-16 md:mt-24">
        <h2 className="text-3xl font-bold text-gray-800 mb-12 text-center">
          Os Direitos Fundamentais
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* passos do jogo*/}
          <div className="bg-white p-8 rounded-xl shadow-lg border border-blue-100 transform hover:scale-105 transition-transform duration-300 flex flex-col items-center text-center">
            <div className="text-blue-600 mb-4">
              {/* ícone do font awesome */}

            </div>
            {/* primeiro passo */}
            <h3 className="text-xl font-bold text-blue-800 mb-3">1.</h3>
            <p className="text-gray-700 leading-relaxed flex-grow">
             Devem ser garantidos na maior medida possível
            </p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-lg border border-blue-100 transform hover:scale-105 transition-transform duration-300 flex flex-col items-center text-center">
            <div className="text-blue-600 mb-4">
              {/* ícone do font awesome */}

            </div>
            <h3 className="text-xl font-bold text-blue-800 mb-3">2.</h3>
            <p className="text-gray-700 leading-relaxed flex-grow">
             Não são absolutos
            </p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-lg border border-blue-100 transform hover:scale-105 transition-transform duration-300 flex flex-col items-center text-center">
            <div className="text-blue-600 mb-4">
              {/* ícone do font awesome */}

            </div>
            <h3 className="text-xl font-bold text-blue-800 mb-3">3.</h3>
            <p className="text-gray-700 leading-relaxed flex-grow">
              Podem colidir
            </p>
          </div>
        </div>
      </section>

      {/* Seção de Chamada para Ação Final */}
      <section className="text-center mt-20 px-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">
          Assim, seu objetivo é descobrir quais direitos estão em conflito.
        </h2>
        <p className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto">
          Para isso, você receberá um caso real e identificará quais bens jurídicos estão em conflito. 
        Após cada resposta haverá a explicação da decisão e seus pontos serão acumulados 

        </p>
        <Link
          to="/jogar"
          className="inline-block px-12 py-5 rounded-full text-white font-bold text-xl bg-gradient-to-r from-blue-500 to-indigo-700 shadow-2xl
                     hover:from-blue-600 hover:to-indigo-800 transition transform hover:-translate-y-1 active:translate-y-0
                     focus:outline-none focus:ring-4 focus:ring-blue-300 focus:ring-opacity-70 group overflow-hidden"
        >
          Comece a Jogar Agora!
          <span className="absolute inset-0 block bg-gradient-to-r from-white to-transparent opacity-0 transform -skew-x-12 -translate-x-full
                           group-hover:opacity-30 group-hover:translate-x-full transition-all duration-700 ease-out"></span>
        </Link>
      </section>

    </div>
  );
}