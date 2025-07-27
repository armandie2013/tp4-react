import { useCart } from "../context/CartContext";

const ClearCartButton = () => {
  const { clearCart, cart } = useCart();

  const handleClear=()=>{
    const confirmClear=window.confirm("Estas seguro que queres vaciar el carrito?");
    if(confirmClear){
        clearCart();
        alert("El carrito fue vaciado.")
    }
  }

  if (cart.length === 0) return null;

  return (
    <button
      onClick={handleClear}
      className="mt-4 bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded"
    >
      Vaciar Carrito
    </button>
  );
};

export default ClearCartButton;
