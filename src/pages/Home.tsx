// cards 
const cardsData = [
  {
    id: 1,
    title: 'Constitucionalismo 1',
    summary: 'pipi popo.',
    imageUrl: '/imagens/imagemTeste.png', 
  },
  {
    id: 2,
    title: 'Constitucionalismo 2',
    summary: 'pipi popo 2',
    imageUrl: '/imagens/imagemTeste.png',
  },
  {
    id: 3,
    title: 'Constitucionalismo 3',
    summary: 'Rpipi popo 3',
    imageUrl: '/imagens/imagemTeste.png',
  },
];

export default function ParaLeitura() {
  return (
    <section className="max-w-7xl mx-auto px-8 py-12">
      
      {/* titulo */}
      <h1 className="text-4xl font-bold mb-2 text-gray-900">Título</h1>
      
      {/* sub */}
      <h2 className="text-xl font-semibold mb-8 text-gray-700">Subtítulo</h2>

      {/* para leitura */}
      <h3 className="text-2xl font-bold mb-8 text-gray-900">Para leitura</h3>

      <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
        {cardsData.map(({ id, title, summary, imageUrl }) => (
          <div
            key={id}
            className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col"
          >
            <div className="block overflow-hidden">
              <img
                src={imageUrl}
                alt={title}
                className="w-full h-48 object-cover transform hover:scale-105 transition-transform duration-300"
              />
            </div>

            <div className="p-4 flex flex-col flex-grow">
              <h3 className="text-lg font-semibold mb-2 text-gray-900">{title}</h3>
              <p className="text-gray-700 flex-grow">{summary}</p>

              <button
                disabled
                className="mt-4 inline-block text-blue-600 font-semibold cursor-not-allowed opacity-50"
              >
                Leia mais
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
