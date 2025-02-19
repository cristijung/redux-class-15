"use client";

import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../store/store";
import { removeItem, updateQuantity } from "./CartSlice";
import CartItem from "./CartItem";
import CartTotal from "./CartTotal";
import { FaShoppingCart } from "react-icons/fa";

export default function Cart() {
  const cartItems = useSelector((state: RootState) => state.cart.items);
  const dispatch = useDispatch();

  const excluirItem = (productId: number) => {
    dispatch(removeItem(productId));
  };

  const atualizarQuantidade = (productId: number, quantity: number) => {
    dispatch(updateQuantity({ productId, quantity }));
  };

  return (
    <div className="container mx-auto p-4 bg-gray-400 rounded-lg shadow-md">
      <FaShoppingCart className="text-2xl mr-2 text-gray-800" />
      <h2 className="text-2xl font-bold mb-4 text-gray-800">
        Carrinho de Compras
      </h2>

      {cartItems.length > 0 ? (
        <ul className="divide-y divide-gray-100">
          {cartItems.map((item) => (
            <CartItem
              key={item.product.id}
              item={item}
              onRemove={excluirItem}
              onUpdateQuantity={atualizarQuantidade}
            />
          ))}
        </ul>
      ) : (
        <p className="text-white">O carrinho está vazio.</p>
      )}

      <div className="mt-6">        
        <CartTotal items={cartItems} />
      </div>
    </div>
  );
}
