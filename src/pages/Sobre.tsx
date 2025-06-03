import { Link } from 'react-router-dom';

export default function Sobre() {
  return (
    <div className="min-h-screen bg-gray-50 pb-20">

      {/* banner azul */}
      <section className="relative overflow-hidden
           flex items-center 
           pt-28 pb-24 
           bg-gradient-to-br from-blue-700 to-indigo-900 text-white shadow-lg">
        {/* backgroundzinho */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-indigo-800/20 backdrop-blur-sm z-0"></div>

        <div className="max-w-4xl mx-auto px-8 text-center relative z-10"> 
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-6 animate-fade-in-up">
            Sobre o <span className="text-cyan-300">Projeto</span>
            <br />Pondera Legal
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 font-light mb-8 opacity-0 animate-fade-in delay-200">
            Explore a essência e os pilares que guiam nossa iniciativa.
          </p>
        </div>
      </section>

      {/* seção principal*/}
      <section className="max-w-4xl mx-auto px-8 mt-16 md:mt-24">
        <h2 className="text-3xl font-bold text-gray-800 mb-8 border-b-2 border-blue-400 pb-3">
          Sobre o projeto
        </h2>
        <div className="prose prose-lg text-gray-700 leading-relaxed space-y-6">
          <p>
            O site Pondera Legal foi idealizado pela estudante de <strong>Direto</strong> Laryssa Paiva e desenvolvido por Laura  e Mariana, estudantes de <strong>Sistemas de Informação e Ciência da Computação</strong> que ficaram responsáveis por “gameficar” os casos jurídicos. 
          </p>
          <p>
            A ideia surgiu a partir de uma atividade em grupo proposta pelo professor de Direito da PUCPR, Bruno Menezes Lorenzetto, sobre Constitucionalismo Digital. Nessa atividade, as acadêmicas Carolina Castro, Carolina Teixeira, Kauana Pozzo, Laryssa Paiva, Marianne Leite e Michaela Moro elaboraram uma cartilha sobre os impactos das novas tecnologias nos direitos fundamentais.
          </p>
          <p>
            Pensando em maneiras criativas para despertar o interesse do público-alvo, adolescentes e jovens, o projeto foi arquitetado. Laryssa contatou as programadoras e juntas, combinaram o rigor acadêmico com a inovação tecnológica para oferecer um jogo que não apenas informa, mas também instiga o raciocínio crítico e aprofunda o entendimento sobre o constitucionalismo digital e seus desafios.
          </p>
        </div>
      </section>
      <section className="max-w-4xl mx-auto px-8 mt-16">
        <h2 className="text-3xl font-bold text-gray-800 mb-8 border-b-2 border-blue-400 pb-3">
          Nossa Equipe
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-blue-50 p-6 rounded-lg shadow-md flex flex-col items-center text-center">
            <img
              src="/imagens/lary.png"
              alt="Foto de Laryssa Paiva"
              className="w-32 h-32 rounded-full object-cover mb-4 border-4 border-blue-200"
            />
            <h3 className="text-xl font-semibold text-gray-800 mb-1">Laryssa Paiva</h3>
            <p className="text-blue-700 text-sm mb-2">Acadêmica de Direito</p>
            <p className="text-gray-600">Idealizadora do Projeto</p>
          </div>

          <div className="bg-blue-50 p-6 rounded-lg shadow-md flex flex-col items-center text-center">
            <img
              src="/imagens/marianne.jpg"
              alt="Foto de Marianne Leite"
              className="w-32 h-32 rounded-full object-cover mb-4 border-4 border-blue-200"
            />
            <h3 className="text-xl font-semibold text-gray-800 mb-1">Marianne Leite</h3>
            <p className="text-blue-700 text-sm mb-2">Acadêmica de Direito</p>
            <p className="text-gray-600">Idealizadora do Projeto</p>
          </div>

          <div className="bg-blue-50 p-6 rounded-lg shadow-md flex flex-col items-center text-center">
            <img
              src="/imagens/carolina.jpg"
              alt="Foto de Carolina Castro"
              className="w-32 h-32 rounded-full object-cover mb-4 border-4 border-blue-200"
            />
            <h3 className="text-xl font-semibold text-gray-800 mb-1">Carolina Castro</h3>
            <p className="text-blue-700 text-sm mb-2">Acadêmica de Direito</p>
            <p className="text-gray-600">Idealizadora do Projeto</p>
          </div>

          <div className="bg-blue-50 p-6 rounded-lg shadow-md flex flex-col items-center text-center">
            <img
              src="/imagens/laura.png"
              alt="Foto de Laura Santos"
              className="w-32 h-32 rounded-full object-cover mb-4 border-4 border-blue-200"
            />
            <h3 className="text-xl font-semibold text-gray-800 mb-1">Laura Santos</h3>
            <p className="text-blue-700 text-sm mb-2">Acadêmica de Sistemas de Informação</p>
            <p className="text-gray-600">Desenvolvedora</p>
          </div>

          <div className="bg-blue-50 p-6 rounded-lg shadow-md flex flex-col items-center text-center">
            <img
              src="/imagens/mari.png" 
              alt="Foto de Mariana"
              className="w-32 h-32 rounded-full object-cover mb-4 border-4 border-blue-200"
            />
            <h3 className="text-xl font-semibold text-gray-800 mb-1">Mariana Castro</h3>
            <p className="text-blue-700 text-sm mb-2">Acadêmica de Ciência da Computação</p>
            <p className="text-gray-600">Desenvolvedora</p>
          </div>
        </div>
      </section>

      {/* principais objetivos do site*/}
      <section className="max-w-4xl mx-auto px-8 mt-16">
        <h2 className="text-3xl font-bold text-gray-800 mb-8 border-b-2 border-blue-400 pb-3">
          Principais objetivos
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md border border-blue-100">
            <h3 className="text-xl font-semibold text-blue-700 mb-2">Direito</h3>
            <p className="text-gray-600">
              Nosso objetivo é <strong>estimular o raciocínio jurídico e a capacidade de análise de casos complexos</strong>, especialmente aqueles envolvendo a colisão de direitos fundamentais.
              Além de conscientizar sobre os impactos da tecnologia nos direitos individuais, coletivos e difusos, fomentando uma perspectiva crítica e ética.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border border-blue-100">
            <h3 className="text-xl font-semibold text-blue-700 mb-2">Tecnologia</h3>
            <p className="text-gray-600">
              Gamificar e democratizar o acesso ao conhecimento jurídico, utilizando ferramentas digitais para tornar o aprendizado de conceitos complexos mais dinâmico, interativo e divertido. <strong>Explorando o potencial das inovações digitais para a educação</strong> e a conscientização cívica, mostrando como a tecnologia pode ser uma aliada na promoção da cidadania.
            </p>
          </div>

        </div>
      </section>

      {/* seção de chamada */}
      <section className="text-center mt-20 px-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">
          Pronto para se tornar um Especialista em Direito Constitucional?
        </h2>
        <p className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto">
          Jogue e teste seus conhecimentos com o Choque Jurídico ⚡
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