import { useFavoritos } from "../context/FavoritesContext";

const CharacterCard = ({ personaje }) => {
  const { agregarFavorito } = useFavoritos();

  return (
    <div className="bg-white dark:bg-slate-800 rounded shadow p-4 flex flex-col items-center text-center">
      <img
        src={personaje.image}
        alt={personaje.name}
        className="w-32 h-32 rounded-full mb-4"
      />
      <h2 className="text-lg font-bold">{personaje.name}</h2>
      <p className="text-sm text-gray-600 dark:text-gray-300">
        {personaje.species} - {personaje.status}
      </p>
      <p className="text-sm text-gray-500 dark:text-gray-400">
        {personaje.location.name}
      </p>
      <button
        onClick={() => agregarFavorito(personaje)}
        className="mt-4 px-3 py-1 text-sm bg-pink-600 text-white rounded hover:bg-pink-700"
      >
        Agregar a favoritos
      </button>
    </div>
  );
};

export default CharacterCard;