// src/components/PerguntaBox.tsx
import React from 'react';

interface PerguntaBoxProps {
  caso: string;
}

export default function PerguntaBox({ caso }: PerguntaBoxProps) {
  return (
    <div className="bg-white text-gray-900 rounded-xl p-6 md:p-8 shadow-md max-w-2xl w-full text-center border-2 border-gray-200">
      <p 
        className="text-lg md:text-xl font-semibold leading-relaxed"
        style={{ whiteSpace: 'pre-wrap' }}
      >
        {caso}
      </p>
    </div>
  );
}