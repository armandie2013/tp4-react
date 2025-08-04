import { useState } from "react";
import CharacterList from "./CharacterList";
import { toast } from "react-toastify";

const CharacterSearch = () => {
  const [nombre, setNombre] = useState("");
  const [cantidad, setCantidad] = useState(5);
  const [cargando, setCargando] = useState(false);
  const [error, setError] = useState(null);
  const [personajes, setPersonajes] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!nombre.trim()) return;

    setCargando(true);
    setError(null);

    // comsumimos el link de la api que esta en la variable de entorno //
    const texto = nombre.toLowerCase();
    let url = `${import.meta.env.VITE_API_URL}?`;

    if (["alive", "dead", "unknown"].includes(texto)) {
      url += `status=${texto}`;
    } else if (["male", "female", "genderless"].includes(texto)) {
      url += `gender=${texto}`;
    } else if (["human", "alien"].includes(texto)) {
      url += `species=${texto}`;
    } else {
      url += `name=${encodeURIComponent(nombre)}`;
    }

    try {
      const respuesta = await fetch(url);
      if (!respuesta.ok) throw new Error("No se encontraron personajes.");
      const datos = await respuesta.json();

      const limitados = datos.results.slice(0, cantidad);
      setPersonajes(limitados);
      toast.success("Personajes cargados con éxito...");
    } catch (err) {
      setError(err.message);
      setPersonajes([]);
      toast.error("Error: " + err.message);
    } finally {
      setCargando(false);
    }
  };

  return (
    <div className="p-4 max-w-4xl mx-auto">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-4 sm:flex-row sm:items-center mb-4"
      >
        <input
          type="text"
          placeholder="Buscar personaje"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
          className="flex-1 px-4 py-2 rounded bg-slate-100 text-slate-800 dark:bg-slate-700 dark:text-white"
        />

        <input
          type="number"
          min="1"
          max="100"
          placeholder="Cantidad"
          value={cantidad}
          onChange={(e) => setCantidad(e.target.value)}
          className="w-28 px-4 py-2 rounded bg-slate-100 text-slate-800 dark:bg-slate-700 dark:text-white"
        />

        <button
          type="submit"
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Buscar
        </button>
      </form>

      {cargando && <p className="mt-4 text-yellow-400">Cargando...</p>}
      {error && <p className="mt-4 text-red-500">{error}</p>}

      <CharacterList personajes={personajes} />
    </div>
  );
};

export default CharacterSearch;
