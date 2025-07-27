import ProductList from "./components/ProductList";
import Cart from "./components/Cart";
import ThemeButton from "./components/ThemeButton";

function App() {
  return (
    <div className="min-h-screen p-4 bg-white dark:bg-black text-black dark:text-white transition-colors">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Carrito de Compras</h1>
        <ThemeButton />
      </div>
      <ProductList />
      <Cart />
    </div>
  );
}

export default App;