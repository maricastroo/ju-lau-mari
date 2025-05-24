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
    caso: "Durante a pandemia de covid-19 houve, por consequência da Medida Provisória nº 954, de 17 de abril de 2020, o compartilhamento de dados pessoais por empresas de telecomunicações com o IBGE. ", 
    
    opcoes: [
      "Sigilo de dados (privacidade) ",
      " Estatísticas (Informação)"
    ],
    respostaCorretaIndex: 0,
    explicacao: "As operadoras telefônicas não poderiam ser obrigadas a compartilhar dados de usuários durante a pandemia de COVID-19, mesmo que para fins de suporte à produção estatística oficial durante a situação de emergência de saúde pública de importância internacional. Tal compartilhamento  deve ser limitado ao mínimo necessário para não violar o direito ao sigilo de dados, à intimidade, à vida privada, e à autodeterminação informativa. ",
  
  },

  {
    id: 2,
    caso: "Caso Francischini: No dia das eleições de 2018, o então deputado federal Fernando Francischini (PSL-PR) realizou uma live alegando, sem provas, que urnas eletrônicas estavam fraudadas para impedir votos no candidato Jair Bolsonaro. O Tribunal Superior Eleitoral (TSE), em outubro de 2021, cassou o mandato de Francischini por uso indevido dos meios de comunicação e abuso de poder político, tornando-o inelegível por oito anos. Em junho de 2022, o ministro Kassio Nunes Marques, do STF, concedeu liminar suspendendo os efeitos da decisão do TSE, permitindo que Francischini retornasse ao cargo. Entretanto, poucos dias depois, a Segunda Turma do STF, por maioria de 3 votos a 2, restabeleceu a cassação e inelegibilidade do deputado.",
    opcoes: [
      "liberdade de expressão",
      "integridade do processo eleitoral (proteção da democracia)"
    ],
    respostaCorretaIndex: 1,
    explicacao: "Consolidou o entendimento de que a disseminação de fake news por agentes públicos, especialmente em contextos eleitorais, pode configurar abuso de poder e justificar sanções severas, incluindo cassação de mandato e inelegibilidade. Jurisprudência: TUTELA PROVISÓRIA ANTECEDENTE 39",
  },

  {
    id: 3,
    caso: "Caso Luth (1958): Erich Lüth, jornalista, convocou publicamente um boicote ao filme de Veit Harlan, cineasta envolvido com o regime nazista. A empresa de produção moveu ação civil para impedir a campanha, alegando violação do § 826 do Código Civil Alemão (ato contrário aos bons costumes).",
    opcoes: [
      "Direito ao boicote (liberdade de expressão)",
      "Liberdade profissional e econômica"
    ],
    respostaCorretaIndex: 0,
    explicacao: "O Tribunal Constitucional declarou que a liberdade de expressão deve ser protegida mesmo nas relações entre particulares, reconhecendo a eficácia horizontal dos direitos fundamentais (Drittwirkung). O Estado, ao aplicar normas civis, deve considerar os valores constitucionais — os direitos fundamentais são elementos estruturantes da ordem jurídica como um todo."
  },

  {
    id: 4,
    caso: "caso 4",
    opcoes: [
      "liberdade de expressão",
      "proteção da ordem pública"
    ],
    respostaCorretaIndex: 0,
    explicacao: "O  STF entendeu que as plataformas digitais têm responsabilidade sobre os conteúdos publicados e disseminados pela rede, por serem capazes de moderar adequadamente esse conteúdo. Portanto, estarão sujeitas às medidas restritivas (espécie de sanção/punição) quando falham e não coíbem atos considerados criminosos em suas plataformas."
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
            Jogo <span className="text-cyan-300">Constitucional</span>
            <br /> 
          </h1>
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