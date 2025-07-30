import { createContext, useContext, useEffect, useState } from "react";

const FavoritesContext = createContext();

export const FavoritesProvider = ({ children }) => {
  const [favoritos, setFavoritos] = useState(() => {
    const guardados = localStorage.getItem("favoritos");
    return guardados ? JSON.parse(guardados) : [];
  });

  useEffect(() => {
    localStorage.setItem("favoritos", JSON.stringify(favoritos));
  }, [favoritos]);

  const agregarFavorito = (personaje) => {
    if (!favoritos.find((p) => p.id === personaje.id)) {
      setFavoritos([...favoritos, personaje]);
    }
  };

  const eliminarFavorito = (id) => {
    setFavoritos(favoritos.filter((p) => p.id !== id));
  };

  const eliminarTodos = () => {
    setFavoritos([]);
  };

  return (
    <FavoritesContext.Provider
      value={{ favoritos, agregarFavorito, eliminarFavorito, eliminarTodos }}
    >
      {children}
    </FavoritesContext.Provider>
  );
};

export const useFavoritos = () => useContext(FavoritesContext);
