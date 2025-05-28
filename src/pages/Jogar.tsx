import React, { useEffect, useState } from 'react';
import PerguntaBox from '../Components/PerguntaBox';
import OpcaoBox from '../Components/OpcaoBox';
import ExplicacaoModal from '../Components/ExplicacaoModal';
import { Link } from 'react-router-dom'; 
import { quizData } from '../data/quizData'; 
import TelaNome from '../Components/TelaNome';

export default function Jogar() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOptionIndex, setSelectedOptionIndex] = useState<number | null>(null);
  const [showFeedback, setShowFeedback] = useState(false);
  const [showExplanationModal, setShowExplanationModal] = useState(false);
  const [showExplanationButton, setShowExplanationButton] = useState(false);
  const [showNextQuestionButton, setShowNextQuestionButton] = useState(false);
  const [score, setScore] = useState(0);
  const [quizFinished, setQuizFinished] = useState(false);
  const [playerName, setPlayerName] = useState('');
  const [showNameModal, setShowNameModal] = useState(true);

  const currentQuestion = quizData[currentQuestionIndex];

  const handleOptionSelect = (index: number) => {
    if (selectedOptionIndex === null) {
      setSelectedOptionIndex(index);
      setShowFeedback(true);

      if(index !== currentQuestion.respostaCorretaIndex){
        setShowExplanationButton(true);
      } else {
        setShowExplanationButton(false);
      }
      setShowNextQuestionButton(true);
       if (index === currentQuestion.respostaCorretaIndex) {
        setScore(prevScore => prevScore + 1);
      }
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
      setQuizFinished(true)
    }
  };

  useEffect(() => {
    if (localStorage.getItem('playerName')){
      const storedName = localStorage.getItem('playerName');
      setPlayerName(storedName   ? storedName : '');
      setShowNameModal(false);
    }
  })

    const handleStartGame = (name: string) => {
    setPlayerName(name);
    setShowNameModal(false);
  };


  if (!currentQuestion && !quizFinished) {
    return <div className="min-h-screen flex items-center justify-center bg-gray-50 text-xl font-semibold text-gray-700">Carregando quiz...</div>;
  }

   if (quizFinished) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 text-gray-700 p-4">
        <h2 className="text-4xl font-extrabold text-blue-700 mb-6">Quiz Concluído!</h2>
        <p className="text-2xl mb-8">Sua pontuação final é: <span className="font-bold text-blue-600">{score}</span> de <span className="font-bold text-blue-600">{quizData.length}</span></p>
        <Link to="/" className="px-8 py-3 rounded-full text-white font-bold bg-blue-500 hover:bg-blue-600 shadow-lg transition transform hover:-translate-y-1 active:translate-y-0 text-lg whitespace-nowrap">
          Voltar ao Início
        </Link>
        <button
            onClick={() => {
              setCurrentQuestionIndex(0);
              setSelectedOptionIndex(null);
              setShowFeedback(false);
              setScore(0);
              setQuizFinished(false);
            }}
            className="mt-4 px-8 py-3 rounded-full text-blue-700 font-bold bg-blue-100 hover:bg-blue-200 shadow-lg transition transform hover:-translate-y-1 active:translate-y-0 text-lg whitespace-nowrap"
          >
            Jogar Novamente
          </button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 pb-20">

      {showNameModal && <TelaNome onStart={handleStartGame} />}

      <section className="relative overflow-hidden flex items-center pt-28 pb-24 bg-gradient-to-br from-blue-700 to-indigo-900 text-white shadow-lg">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-indigo-800/20 backdrop-blur-sm z-0"></div>

        <div className="max-w-4xl mx-auto px-8 text-center relative z-10"> 
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-6 animate-fade-in-up">
            Jogo <span className="text-cyan-300">Constitucional</span>
            <br /> 
          </h1>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-8 mt-16 md:mt-24">
        { playerName && (
          <h2 className="text-3xl font-bold text-gray-800 mb-12 text-center">
            Jogador <span className="text-blue-600">{playerName} </span>! 
            <br></br>
            <div className="w-full bg-gray-200 rounded-full h-2.5 mb-8">
            <div 
              className="bg-blue-600 h-2.5 rounded-full mt-2" 
              style={{ width: `${((currentQuestionIndex + 1) / quizData.length) * 100}%` }}
            ></div>
            </div>
            Pergunta <span className="font-bold">{currentQuestionIndex + 1}</span> de <span className="font-bold">{quizData.length}</span>
          </h2>
      
          ) 
        }
        <div className="bg-gradient-to-br from-blue-600 to-indigo-800 rounded-2xl shadow-2xl p-8 w-full flex flex-col items-center">
          <div className="mb-8 w-full flex justify-center">
            <PerguntaBox caso={currentQuestion.caso} />
          </div>

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

          {(showExplanationButton || showNextQuestionButton) && (
            <div className="mt-8 flex flex-col md:flex-row gap-6 justify-center w-full px-4">
              {showExplanationButton && (
                <button
                  onClick={handleShowExplanation}
                  className="px-8 py-3 rounded-full text-white font-bold bg-blue-500 hover:bg-blue-600 shadow-lg transition transform hover:-translate-y-1 active:translate-y-0 text-lg whitespace-nowrap"
                >
                  Ver explicação
                </button>
              )}

              {showNextQuestionButton && (
                <button
                  onClick={handleNextQuestion}
                  className="px-8 py-3 rounded-full text-white font-bold bg-blue-500 hover:bg-blue-600 shadow-lg transition transform hover:-translate-y-1 active:translate-y-0 text-lg whitespace-nowrap"
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