import { useState } from "react"

interface playerNameModalProps {
  onStart: (name: string) => void;
}

export default function TelaNome({ onStart }: playerNameModalProps) {
  const [name, setName] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
  e.preventDefault();
  if (name.trim()) {
    localStorage.setItem('playerName', name.trim());
    onStart(name.trim());
  }
};

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white p-8 rounded-2xl max-w-md w-full mx-4">
        <h2 className="text-2xl font-bold mb-6 text-center">Antes de começar...</h2>
        <form onSubmit={handleSubmit}>
          <label className="block mb-4">
            <span className="block text-sm font-medium text-gray-700 mb-2">Qual é o seu apelido?</span>
            <input
              type="text"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
              value={name}
              onChange={(e) => setName(e.target.value)}
              // minLength={10}
              placeholder="Digite seu apelido de no máximo 10 letras"
              required
            />
          </label>
          <button
            type="submit"
            className="w-full px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Começar o jogo
          </button>
        </form>
      </div>
    </div>
  )
}
