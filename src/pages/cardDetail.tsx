import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { cardsData } from '../data/cardsData';

export default function CardDetailPage() {
  const { id } = useParams();

  const cardId = parseInt(id || '', 10);

  const card = cardsData.find(c => c.id === cardId);

  if (!card) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <h1 className="text-3xl text-red-600">Card não encontrado!</h1>
      </div>
    );
  }

  return (
    <section className="max-w-4xl mx-auto px-8 py-16 bg-white pt-40">
      <h1 className="text-4xl md:text-5xl font-extrabold mb-6 text-blue-900 leading-tight">
        {card.title}
      </h1>
      <p className="text-lg text-gray-700 leading-relaxed mb-10">
        {card.fullContent}
      </p>

      <Link to="/" className="inline-block bg-blue-600 text-white font-semibold py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors duration-300">
        Voltar para a lista
      </Link>
    </section>
  );
}