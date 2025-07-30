import { useState } from "react";
import CharacterSearch from "./components/CharacterSearch";
import Favoritos from "./components/Favoritos";
import ThemeButton from "./components/ThemeButton";
import { useFavoritos } from "./context/FavoritesContext";

function App() {
  const [mostrarFavoritos, setMostrarFavoritos] = useState(false);
  const { favoritos } = useFavoritos();

  const toggleFavoritos = () => {
    setMostrarFavoritos(!mostrarFavoritos);
  };

  return (
    <div className="min-h-screen bg-white dark:bg-slate-900 text-black dark:text-white p-6">
      <div className="flex justify-between items-center mb-6">
        <ThemeButton />

        <button
          onClick={toggleFavoritos}
          className="relative px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
        >
          Favoritos
          {favoritos.length > 0 && (
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
              {favoritos.length}
            </span>
          )}
        </button>
      </div>

      <h1 className="text-2xl font-bold mb-6 text-center">
        Buscador de Personajes
      </h1>

      <CharacterSearch />

      {mostrarFavoritos && <Favoritos />}
    </div>
  );
}

export default App;