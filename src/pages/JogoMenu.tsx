import { Link } from 'react-router-dom';

export default function JogoMenu() {
  return (
    <div>
      <h1>Bem-vindo ao Jogo!</h1>
      <Link to="/jogar">Começar Jogo</Link>
    </div>
  );
}