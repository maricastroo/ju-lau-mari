import { Link } from 'react-router-dom';

export default function JogoMenu() {
  return (
    <section className="min-h-screen bg-white px-8 py-12 max-w-7xl mx-auto">
      <div>
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Título do Jogo</h1>
        <h2 className="text-xl font-semibold text-gray-700 mb-6">Subtítulo</h2>
        <p className="text-base text-gray-700 mb-8">
          Explicação do jogo e sobre o que ele é.
        </p>
        <Link
          to="/jogar"
          className="inline-block px-6 py-3 rounded-full text-white font-semibold bg-gradient-to-r from-blue-500 to-blue-700 shadow-md hover:from-blue-600 hover:to-blue-800 transition"
        >
          Jogue aqui
        </Link>
      </div>
    </section>
  );
}
