
import React from 'react';

interface ExplicacaoModalProps {
  explicacao: string;
  onClose: () => void;
  isVisible: boolean;
}

export default function ExplicacaoModal({ explicacao, onClose, isVisible }: ExplicacaoModalProps) {
  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 p-4">
      <div
        className={`bg-blue-800 text-white rounded-lg shadow-2xl p-8 max-w-xl w-full
                    transform transition-all duration-700
                    ${isVisible ? 'scale-100 opacity-100 rotate-y-0' : 'scale-0 opacity-0 rotate-y-90'}`}
      >
        <h3 className="text-2xl md:text-3xl font-bold text-gray-200 mb-6 text-center">
          EXPLICAÇÃO:
        </h3>
        <p className="text-gray-200 leading-relaxed text-base md:text-lg mb-8">
          {explicacao}
        </p>
        <button
          onClick={onClose}
          className="w-full px-8 py-3 rounded-full text-white font-bold bg-blue-500 hover:bg-blue-600 shadow-lg transition transform hover:-translate-y-1 active:translate-y-0"
        >
          Fechar
        </button>
      </div>
    </div>
  );
}