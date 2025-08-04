import { useFavoritos } from "../context/FavoritesContext";

const Favoritos = () => {
  const { favoritos, eliminarFavorito, eliminarTodos } = useFavoritos();

  if (favoritos.length === 0) {
    return (
      <div className="max-w-4xl mx-auto mt-10">
        <p className="text-center text-sm text-slate-500 dark:text-slate-300">
          Sin personajes favoritos por ahora.
        </p>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto p-4 mt-10">
      <h2 className="text-xl font-bold mb-4">Listado de favoritos</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {favoritos.map((personaje) => (
          <div
            key={personaje.id}
            className="bg-slate-100 dark:bg-slate-800 rounded shadow p-4 flex flex-col items-center text-center"
          >
            <img
              src={personaje.image}
              alt={personaje.name}
              className="w-32 h-32 rounded-full mb-4"
            />
            <h2 className="text-lg font-bold">{personaje.name}</h2>
            <p className="text-sm text-slate-700 dark:text-slate-300">
              {personaje.species} - {personaje.status}
            </p>
            <p className="text-sm text-slate-600 dark:text-slate-400">
              {personaje.location.name}
            </p>
            <button
              onClick={() => eliminarFavorito(personaje.id)}
              className="mt-4 px-3 py-1 text-sm bg-red-600 text-white rounded hover:bg-red-700"
            >
              Quitar
            </button>
          </div>
        ))}
      </div>

      <div className="mt-6 flex justify-center">
        <button
          onClick={eliminarTodos}
          className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 text-sm"
        >
          Eliminar todos
        </button>
      </div>
    </div>
  );
};

export default Favoritos;