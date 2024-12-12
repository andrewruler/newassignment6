import { useContext } from "react";
import { CartContext } from "./CartContext";

function CartView() {
  const { cart, setCart } = useContext(CartContext);

  return (
    <div className="cart-view">
      <h1>Movie Cart</h1>

      <div className="cart-items">
        {
          cart.entrySeq().map(([key, value]) => {
            return (
              <div className="cart-item" key={key}>
                <img src={`https://image.tmdb.org/t/p/w500${value.url}`} />
                <h1>{value.title}</h1>
                <button onClick={() => setCart((prevCart) => prevCart.delete(key))}>Remove</button>
              </div>
            )
          })
        }
      </div>
    </div>
  );
}

export default CartView;
