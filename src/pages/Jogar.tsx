// src/pages/Jogar.tsx
import React, { useState } from 'react';
import PerguntaBox from '../Components/PerguntaBox';
import OpcaoBox from '../Components/OpcaoBox';
import ExplicacaoModal from '../Components/ExplicacaoModal';
import { Link } from 'react-router-dom'; 

// Perguntas e respostas
const quizData = [
  {
    id: 1,
    caso: "caso 1",
    opcoes: [
      "opção 1",
      "opção 2",
      "opção 3",
      "opção 4"
    ],
    respostaCorretaIndex: 1,
    explicacao: "essa é a resposta correta porque..."
  },
  {
    id: 2,
    caso: "caso 2",
    opcoes: [
      "opção 1",
      "opção 2",
      "opção 3",
      "opção 4"
    ],
    respostaCorretaIndex: 0,
    explicacao: "essa é a resposta correta porque..."
  },
  {
    id: 3,
    caso: "caso 3",
    opcoes: [
      "opção 1",
      "opção 2",
      "opção 3",
      "opção 4"
    ],
    respostaCorretaIndex: 2,
    explicacao: "essa é a resposta correta porque..."
  },
];

export default function Jogar() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOptionIndex, setSelectedOptionIndex] = useState<number | null>(null);
  const [showFeedback, setShowFeedback] = useState(false);
  const [showExplanationModal, setShowExplanationModal] = useState(false);
  const [showExplanationButton, setShowExplanationButton] = useState(false);
  const [showNextQuestionButton, setShowNextQuestionButton] = useState(false);

  const currentQuestion = quizData[currentQuestionIndex];

  const handleOptionSelect = (index: number) => {
    if (selectedOptionIndex === null) {
      setSelectedOptionIndex(index);
      setShowFeedback(true);
      setShowExplanationButton(true);
      setShowNextQuestionButton(true);
    }
  };

  const handleShowExplanation = () => {
    setShowExplanationModal(true);
  };

  const handleCloseExplanation = () => {
    setShowExplanationModal(false);
  };

  const handleNextQuestion = () => {
    setShowExplanationModal(false);
    setShowExplanationButton(false);
    setShowNextQuestionButton(false);

    if (currentQuestionIndex < quizData.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setSelectedOptionIndex(null);
      setShowFeedback(false);
    } else {
      alert('quiz concluído!');
      setCurrentQuestionIndex(0); // reinicia o quiz
      setSelectedOptionIndex(null);
      setShowFeedback(false);
    }
  };

  if (!currentQuestion) {
    return <div className="min-h-screen flex items-center justify-center bg-gray-50 text-xl font-semibold text-gray-700">Carregando quiz...</div>;
  }

  return (
    <div className="min-h-screen bg-gray-50 pb-20">

      {/* BANNER AZUL */}
      <section className="relative overflow-hidden
           flex items-center /* Copiado do JogoMenu */
           pt-28 pb-24 /* Copiado do JogoMenu: Define a altura e alinhamento */
           bg-gradient-to-br from-blue-700 to-indigo-900 text-white shadow-lg">
        {/* backgroundzinho */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-indigo-800/20 backdrop-blur-sm z-0"></div>

        {/* conteúdo do texto do banner do quiz*/}
        <div className="max-w-4xl mx-auto px-8 text-center relative z-10"> 
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-6 animate-fade-in-up">
            Jogo <span className="text-cyan-300">Quiz</span>
            <br /> sobre Constitucionalismo Digital
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 font-light mb-8 opacity-0 animate-fade-in delay-200">
            Responda às perguntas e aprofunde-se no tema!
          </p>
        </div>
      </section>

      {/* seção principal do quiz */}
      <section className="max-w-4xl mx-auto px-8 mt-16 md:mt-24">
        {/* CARD PRINCIPAL COLORIDO */}
        <div className="bg-gradient-to-br from-blue-600 to-indigo-800 rounded-2xl shadow-2xl p-8 w-full flex flex-col items-center">
          {/* pergunta (bloco superior) */}
          <div className="mb-8 w-full flex justify-center">
            <PerguntaBox caso={currentQuestion.caso} />
          </div>

          {/* opções */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-12 w-full px-4">
            {currentQuestion.opcoes.map((opcao, index) => (
              <OpcaoBox
                key={index}
                opcao={opcao}
                index={index}
                isSelected={selectedOptionIndex === index}
                isCorrect={index === currentQuestion.respostaCorretaIndex}
                showFeedback={showFeedback}
                disabled={selectedOptionIndex !== null}
                onClick={handleOptionSelect}
              />
            ))}
          </div>

          {/* container para os botões "Ver Explicação" e "Próxima Pergunta" */}
          {(showExplanationButton || showNextQuestionButton) && (
            <div className="mt-8 flex flex-col md:flex-row gap-6 justify-center w-full px-4">
              {showExplanationButton && (
                <button
                  onClick={handleShowExplanation}
                  className="px-8 py-3 rounded-full text-white font-bold bg-blue-500 hover:bg-blue-600 shadow-lg transition transform hover:-translate-y-1 active:translate-y-0
                             text-lg whitespace-nowrap"
                >
                  Ver explicação
                </button>
              )}

              {showNextQuestionButton && (
                <button
                  onClick={handleNextQuestion}
                  className="px-8 py-3 rounded-full text-white font-bold bg-blue-500 hover:bg-blue-600 shadow-lg transition transform hover:-translate-y-1 active:translate-y-0
                             text-lg whitespace-nowrap"
                >
                  Próxima pergunta
                </button>
              )}
            </div>
          )}
        </div>
      </section>


      <ExplicacaoModal
        explicacao={currentQuestion.explicacao}
        onClose={handleCloseExplanation}
        isVisible={showExplanationModal}
      />
    </div>
  );
}