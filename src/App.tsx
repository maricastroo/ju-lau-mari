import { Routes, Route } from 'react-router-dom';
import Header from './Components/Header';
import Home from './pages/Home';
import Sobre from './pages/Sobre';
import JogoMenu from './pages/JogoMenu';
import Jogar from './pages/Jogar';

export default function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sobre" element={<Sobre />} />
        <Route path="/jogo" element={<JogoMenu />} />
        <Route path="/jogar" element={<Jogar />} />

      </Routes>
    </>
  );
}