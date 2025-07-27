import { useCart } from "../context/CartContext";
import ClearCartButton from "./ClearCartButton";

const Cart = () => {
  const { cart, removeFromCart, updateQuantity, totalPrice } = useCart();

  return (
    <div className="p-4 mt-8 bg-gray-100 rounded dark:bg-gray-800 text-black dark:text-white">
      <h2 className="text-xl font-bold mb-4">Carrito</h2>
      {cart.length === 0 ? (
        <p>El carrito esta vacio.</p>
      ) : (
        <ul className="space-y-4">
          {cart.map((item) => (
            <li key={item.id} className="flex justify-between items-center border-b pb-2">
              <span>{item.name} (${item.price} x {item.quantity})</span>
              <div className="flex items-center gap-2">
                <button onClick={() => updateQuantity(item.id, item.quantity - 1)} className="px-2">-</button>
                <span>{item.quantity}</span>
                <button onClick={() => updateQuantity(item.id, item.quantity + 1)} className="px-2">+</button>
                <button onClick={() => removeFromCart(item.id)} className="text-red-600">Eliminar</button>                
              </div>
            </li>            
          ))}
        </ul>        
      )}
      <div className="mt-4 font-semibold">Total a pagar: $ {totalPrice}</div>

      {/* boton eliminar todo */}
      <div>
        <ClearCartButton />
      </div>
    </div>
    
  );
};

export default Cart;