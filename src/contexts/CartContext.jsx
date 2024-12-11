import {createContext, useState} from 'react';

export const CartContext = createContext();

export const CartProvider = ({children}) => {
    const [cart,setCart] = useState([]);

    const addToCart = (item) => {
        if (!cart.find((cartItem) => cartItem.id === item.id)){
            setCart([...cart, item]);
        }
    };

    const removeFromCart = (item) => {
        setCart(cart.filter((cartItem) => cartItem.id!== item.id));
    }

    return (
        <CartContext.Provider value = { { cart, addToCart, removeFromCart }}>
            {children}
        </CartContext.Provider>
    )
}