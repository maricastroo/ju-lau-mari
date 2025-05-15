import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Sobre from './pages/Sobre';
import JogoMenu from './pages/JogoMenu';
import Jogar from './pages/Jogar';

function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sobre" element={<Sobre />} />
        <Route path="/jogo" element={<JogoMenu />} />
        <Route path="/jogar" element={<Jogar />} />
      </Routes>
    </div>
  );
}

export default App;
