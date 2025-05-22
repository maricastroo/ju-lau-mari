export default function Sobre() {
  return (
    <div className="min-h-screen bg-gray-50 pb-20">

      {/* ajustes de altura e padding-top */}
      <section className="relative overflow-hidden
          pt-28 pb-24 /* Ajustado: padding-top para compensar o header, padding-bottom para controlar a altura */
          bg-gradient-to-br from-blue-700 to-indigo-900 text-white shadow-lg">
        {/* tipo um backgroundzinho*/}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-indigo-800/20 backdrop-blur-sm z-0"></div>

        <div className="max-w-4xl mx-auto px-8 text-center relative z-10">
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-6 animate-fade-in-up">
            Sobre o <span className="text-cyan-300">Projeto</span>
            <br />Constitucionalismo Digital
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 font-light mb-8 opacity-0 animate-fade-in delay-200">
            Explore a essência e os pilares que guiam nossa iniciativa.
          </p>
        </div>
      </section>

      {/* seção principal*/}
      <section className="max-w-4xl mx-auto px-8 mt-16 md:mt-24">
        <h2 className="text-3xl font-bold text-gray-800 mb-8 border-b-2 border-blue-400 pb-3">
          Descrição sobre o projeto
        </h2>
        <div className="prose prose-lg text-gray-700 leading-relaxed space-y-6">
          <p>
            projeto blablabla de blablabla (adicionar texto correto aqui)
          </p>
          <p>
            continuação do texto sobre o projeto, explicando mais sobre a proposta e os objetivos.
          </p>
          <p>
            fique atento blabla
          </p>
        </div>
      </section>

      {/* principais objetivos do site*/}
      <section className="max-w-4xl mx-auto px-8 mt-16">
        <h2 className="text-3xl font-bold text-gray-800 mb-8 border-b-2 border-blue-400 pb-3">
          principais objetivos
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md border border-blue-100">
            <h3 className="text-xl font-semibold text-blue-700 mb-2">direito</h3>
            <p className="text-gray-600">
              exemplo: Nosso objetivo é promover o conhecimento e a aplicação do direito 
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border border-blue-100">
            <h3 className="text-xl font-semibold text-blue-700 mb-2">tecnologia</h3>
            <p className="text-gray-600">
              exemplo: alcançar o publico jovem atraves de jogos dinamicos
            </p>
          </div>

        </div>
      </section>
    </div>
  );
}