import { Link, useLocation } from 'react-router-dom';

export default function Header() {
  const location = useLocation();

  const navLinks = [
    { name: 'Blog', path: '/' },  
    { name: 'Sobre', path: '/sobre' },
    { name: 'Sobre o Jogo', path: '/jogo' },
  ];

  return (
    <header className="bg-gray-100 border-b border-gray-300">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-8 py-4">

        {/* site nome e logo que ainda nao existe */}

        <Link to="/" className="text-xl font-semibold text-gray-900">
          Site nome/logo
        </Link>

        {/* menuzinho*/}
        <nav className="bg-white rounded-full shadow-sm px-6 py-2 flex space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`text-sm font-medium transition-colors duration-300 ${
                location.pathname === link.path
                  ? 'text-blue-700'
                  : 'text-gray-700 hover:text-blue-700'
              }`}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        <Link
          to="/jogar"
          className="px-5 py-2 rounded-full text-white font-semibold bg-gradient-to-r from-blue-500 to-blue-700 shadow-md hover:from-blue-600 hover:to-blue-800 transition"
        >
          Jogar Agora
        </Link>

      </div>
    </header>
  );
}
