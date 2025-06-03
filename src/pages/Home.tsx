import { Link } from 'react-router-dom';
import { cardsData } from '../data/cardsData';

export default function ParaLeitura() {
  return (
    <section className="max-w-7xl mx-auto px-8 py-16 bg-white pt-40"> 

      {/* titulo principal */}
      <h1 className="text-5xl font-extrabold mb-4 text-blue-900 leading-tight">
        Constituição <span className="text-blue-600">em Jogo</span>
      </h1>

      {/* Subtítulo */}
      <h2 className="text-xl md:text-2xl font-medium mb-12 text-gray-600">
        Aprenda sobre os seus direitos e salve a Democracia
      </h2>

      {/* Título da seção de leitura com destaque */}
      <h3 className="text-3xl font-bold mb-10 text-gray-800 border-b-2 border-blue-400 pb-2 inline-block">
        Para Leitura
      </h3>

      <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {cardsData.map(({ id, title, summary, imageUrl }) => (
          <div
            key={id}
            className="bg-white rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300 overflow-hidden flex flex-col border border-gray-200"
          >
            <div className="block overflow-hidden">
              <img
                src={imageUrl}
                alt={title}
                className="w-full h-60 object-cover transform hover:scale-110 transition-transform duration-500 ease-in-out"
              />
            </div>

            <div className="p-6 flex flex-col flex-grow">
              <h3 className="text-xl font-bold mb-3 text-blue-800 leading-snug">{title}</h3>
              <p className="text-gray-700 text-base leading-relaxed flex-grow">{summary}</p>

              <Link
                to={`/card/${id}`}
                className="mt-6 inline-block text-blue-600 font-semibold hover:text-blue-700 transition-colors duration-300"
              >
                Leia mais
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}