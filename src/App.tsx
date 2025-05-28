import { Routes, Route } from 'react-router-dom';
import Header from './Components/Header';
import Home from './pages/Home';
import Sobre from './pages/Sobre';
import JogoMenu from './pages/JogoMenu';
import Jogar from './pages/Jogar';
import CardDetailPage from './pages/cardDetail';

export default function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/card/:id" element={<CardDetailPage />} />
        <Route path="/sobre" element={<Sobre />} />
        <Route path="/jogo" element={<JogoMenu />} />
        <Route path="/jogar" element={<Jogar />} />
      </Routes>
    </>
  );
}