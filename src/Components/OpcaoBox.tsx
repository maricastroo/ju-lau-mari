// src/components/OpcaoBox.tsx
import React from 'react';

interface OpcaoBoxProps {
  opcao: string;
  index: number;
  isSelected: boolean;
  isCorrect: boolean;
  showFeedback: boolean;
  disabled: boolean;
  onClick: (index: number) => void;
}

export default function OpcaoBox({
  opcao,
  index,
  isSelected,
  isCorrect,
  showFeedback,
  disabled,
  onClick,
}: OpcaoBoxProps) {
  return (
    <button
      onClick={() => onClick(index)}
      disabled={disabled}
      // Cores de feedback (verde/vermelho) apenas na seleção com showFeedback.
      className={`w-full min-h-[100px] flex items-center justify-center text-center px-8 py-5 rounded-xl border-2 text-lg font-medium transition-all duration-300 relative z-10
                  ${isSelected
                    ? (showFeedback && isCorrect
                        ? 'bg-green-500 border-green-700 text-white shadow-md' // selecionada e correta
                        : showFeedback && !isCorrect
                        ? 'bg-red-500 border-red-700 text-white shadow-md'   // selecionada e errada
                        : 'bg-blue-500 border-blue-700 text-white shadow-md') // selecionada (sem feedback final ainda, mas com cor de seleção)
                    : (showFeedback && isCorrect // mostra a correta se a selecionada estiver errada
                        ? 'bg-green-300 border-green-500 text-green-800 animate-pulse' // correta, mas não selecionada
                        : 'bg-white border-gray-300 text-gray-800 hover:border-blue-400 hover:shadow-sm') 
                  }
                  ${disabled ? 'cursor-not-allowed opacity-80' : 'cursor-pointer'}
                 `}
    >
      {opcao}
    </button>
  );
}