import { Link } from 'react-router-dom';

export default function JogoMenu() {
  return (
    <div className="min-h-screen bg-white pb-20">

      {/* parte para ajuste */}
      <section className="relative overflow-hidden
            flex items-center /* Adicionado: Centraliza o conteúdo verticalmente com flexbox */
            pt-28 pb-24 /* Mantido: padding-top para compensar o header, padding-bottom para controlar a altura */
            bg-gradient-to-br from-blue-700 to-indigo-900 text-white shadow-lg">
        {/* backgroundzinho */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-indigo-800/20 backdrop-blur-sm z-0"></div>

        <div className="max-w-4xl mx-auto px-8 text-center relative z-10">
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-6 animate-fade-in-up">
            titulo <span className="text-cyan-300">impactante</span>
            <br />
          </h1>
          <Link
            to="/jogar"
            className="inline-block px-10 py-4 rounded-full text-white font-bold text-lg bg-gradient-to-r from-teal-400 to-blue-500 shadow-xl
              hover:from-teal-500 hover:to-blue-600 transition transform hover:-translate-y-1 active:translate-y-0
              focus:outline-none focus:ring-4 focus:ring-blue-300 focus:ring-opacity-70 group overflow-hidden"
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
          Menicânica do jogo, como jogar?
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* passos do jogo*/}
          <div className="bg-white p-8 rounded-xl shadow-lg border border-blue-100 transform hover:scale-105 transition-transform duration-300 flex flex-col items-center text-center">
            <div className="text-blue-600 mb-4">
              {/* ícone do font awesome */}
              <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 mx-auto" viewBox="0 0 576 512">
                <path fill="currentColor" d="M64 0C28.7 0 0 28.7 0 64L0 352c0 35.3 28.7 64 64 64l176 0-10.7 32L160 448c-17.7 0-32 14.3-32 32s14.3 32 32 32l256 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-69.3 0L336 416l176 0c35.3 0 64-28.7 64-64l0-288c0-35.3-28.7-64-64-64L64 0zM512 64l0 224L64 288 64 64l448 0z"/>
              </svg>
            </div>
            {/* primeiro passo */}
            <h3 className="text-xl font-bold text-blue-800 mb-3">1. Receba um caso</h3>
            <p className="text-gray-700 leading-relaxed flex-grow">
              Cada rodada apresenta um cenário prático. e blabla blablabla
            </p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-lg border border-blue-100 transform hover:scale-105 transition-transform duration-300 flex flex-col items-center text-center">
            <div className="text-blue-600 mb-4">
              {/* ícone do font awesome */}
              <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 mx-auto" viewBox="0 0 512 512">
                <path fill="currentColor" d="M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416zm0 464A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-111 111-47-47c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9l64 64c9.4 9.4 24.6 9.4 33.9 0L369 209z"/>
              </svg>
            </div>
            <h3 className="text-xl font-bold text-blue-800 mb-3">2. Analise as opções</h3>
            <p className="text-gray-700 leading-relaxed flex-grow">
              Diante do caso, você terá diversas alternativas.
            </p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-lg border border-blue-100 transform hover:scale-105 transition-transform duration-300 flex flex-col items-center text-center">
            <div className="text-blue-600 mb-4">
              {/* ícone do font awesome */}
              <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 mx-auto" viewBox="0 0 384 512">
                <path fill="currentColor" d="M280 64l40 0c35.3 0 64 28.7 64 64l0 320c0 35.3-28.7 64-64 64L64 512c-35.3 0-64-28.7-64-64L0 128C0 92.7 28.7 64 64 64l40 0 9.6 0C121 27.5 153.3 0 192 0s71 27.5 78.4 64l9.6 0zM64 112c-8.8 0-16 7.2-16 16l0 320c0 8.8 7.2 16 16 16l256 0c8.8 0 16-7.2 16-16l0-320c0-8.8-7.2-16-16-16l-16 0 0 24c0 13.3-10.7 24-24 24l-88 0-88 0c-13.3 0-24-10.7-24-24l0-24-16 0zm128-8a24 24 0 1 0 0-48 24 24 0 1 0 0 48z"/>
              </svg>
            </div>
            <h3 className="text-xl font-bold text-blue-800 mb-3">3. Explicação da alternativa</h3>
            <p className="text-gray-700 leading-relaxed flex-grow">
              Após sua decisão, receba uma explicação detalhada sobre a resposta correta.
            </p>
          </div>
        </div>
      </section>

      {/* Seção de Chamada para Ação Final */}
      <section className="text-center mt-20 px-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">
          Pronto para se tornar um especialista em constitucionalismo?
        </h2>
        <p className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto">
          venha jogar e teste seus conhecimentos e blablabla
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