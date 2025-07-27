import { useCart } from "../context/CartContext";
import products from "../data/Products";

const ProductList = () => {
  const { addToCart } = useCart();

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Productos</h2>
      <ul className="grid gap-4">
        {products.map((product) => (
          <li
            key={product.id}
            className="p-4 border rounded flex justify-between items-center"
          >
            <span>
              {product.name} - ${product.price}
            </span>
            <button
              onClick={() => addToCart(product)}
              className="bg-blue-600 text-white px-4 py-2 rounded"
            >
              Agregar
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
