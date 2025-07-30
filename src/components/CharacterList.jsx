import CharacterCard from "./CharacterCard";

const CharacterList = ({ personajes }) => {
  if (personajes.length === 0) {
    return <p className="text-center mt-4">No hay personajes para mostrar.</p>;
  }

  return (
    <div className="max-w-4xl mx-auto p-4 mt-10">
      <h2 className="text-xl font-bold mb-4">Listado de busqueda</h2>
    <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 mt-6">
      {personajes.map((personaje) => (
        <CharacterCard key={personaje.id} personaje={personaje} />
      ))}
    </div>
    </div>
  );
};

export default CharacterList;