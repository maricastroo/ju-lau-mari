import { Link, useLocation } from 'react-router-dom';
import { useState } from 'react';

export default function Header() {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false); // para o menu mobile

  const navLinks = [
    { name: 'Blog', path: '/' },
    { name: 'Sobre', path: '/sobre' },
    { name: 'Sobre o Jogo', path: '/jogo' },
  ];

  return (
    // header fixo no topo da página
    <header className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-br from-blue-700 via-blue-800 to-indigo-900 text-white shadow-2xl">
      {/* background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-indigo-800/20 backdrop-blur-sm z-0"></div>

      <div className="max-w-7xl mx-auto flex items-center justify-between px-8 py-5 relative z-10">
        {/* nome site */}
        <Link to="/" className="text-4xl font-extrabold tracking-tight text-white hover:text-blue-100 transition-colors duration-300 flex items-center gap-2">
          <span className="leading-none">nome site</span>
        </Link>

        {/* hamburger que aparece só em telas menores */}
        <div className="md:hidden"> 
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-white focus:outline-none focus:ring-2 focus:ring-blue-300 rounded-md p-2"
            aria-label={isMenuOpen ? "Fechar menu" : "Abrir menu"} // Acessibilidade
          >
            {isMenuOpen ? (
              // x para menu aberto (fecha ele)
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              // hamburguer para menu fechado (abre ele)
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* menuzinho*/}
        {/* 'hidden' por padrão (mobile), 'flex' a partir de 'md' (desktop) */}
        <nav className="hidden md:flex items-center space-x-9">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`relative text-lg font-medium py-2 transition-all duration-300 group
                ${location.pathname === link.path
                  ? 'text-blue-200'
                  : 'text-blue-100 hover:text-white'
                }`}>
              {link.name}
              <span
                className={`absolute bottom-0 left-0 w-full h-0.5 bg-blue-200 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300
                  ${location.pathname === link.path ? 'scale-x-100' : ''}`}
              ></span>
            </Link>
          ))}
          <Link
            to="/jogar"
            className="relative px-8 py-3 rounded-full text-white font-bold text-lg bg-gradient-to-r from-cyan-400 to-blue-500 shadow-xl
            hover:from-cyan-500 hover:to-blue-600 transition transform hover:-translate-y-1 active:translate-y-0
            focus:outline-none focus:ring-4 focus:ring-blue-300 focus:ring-opacity-70 group overflow-hidden ml-9"
            // Não precisa de onClick aqui, pois essa nav é para desktop
          >
            Jogar Agora
            <span className="absolute inset-0 block bg-gradient-to-r from-white to-transparent opacity-0 transform -skew-x-12 -translate-x-full
            group-hover:opacity-30 group-hover:translate-x-full transition-all duration-700 ease-out"></span>
          </Link>
        </nav>
      </div>

      {/* menu mobile, aparece em baixo em telas menores*/}
      <div
        className={`md:hidden absolute left-0 w-full bg-blue-800 bg-opacity-95 shadow-lg
          transition-all duration-500 ease-in-out ${isMenuOpen ? 'max-h-screen pt-4 pb-6' : 'max-h-0 overflow-hidden'}`} // espaçamento
      >
        <nav className="flex flex-col items-center space-y-4"> {/* space-y para espaçamento vertical dos links */}
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`block text-xl font-medium text-white hover:text-blue-200 py-2 w-full text-center transition-colors
                ${location.pathname === link.path ? 'bg-blue-700/50' : ''}`}
              onClick={() => setIsMenuOpen(false)} //menu se fecha ao clicar no link
            >
              {link.name}
            </Link>
          ))}
          <Link
            to="/jogar"
            className="inline-block px-8 py-3 rounded-full text-white font-bold text-lg bg-gradient-to-r from-cyan-400 to-blue-500 shadow-md
                      hover:from-cyan-500 hover:to-blue-600 transition mt-4"
            onClick={() => setIsMenuOpen(false)} //menu é fechado ao clicar no botão
          >
            Jogar Agora
          </Link>
        </nav>
      </div>
    </header>
  );
}