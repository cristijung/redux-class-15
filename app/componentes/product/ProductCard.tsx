'use client';

import { useDispatch } from "react-redux";
import { addItem } from "../cart/CartSlice";
import { Props } from "@/app/types/Tipos";
import Image from "next/image";

export default function ProductCard({ product }: Props) {
    const dispatch = useDispatch();

    const addToCard = () => {
        dispatch(addItem(product));
    };

    return (
        <div className="bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition duration-300"> 
            <div className="relative h-48 w-full mb-4 overflow-hidden rounded-t-lg"> 
                <Image
                    src={product.image}
                    alt={product.name}
                    width={200}
                    height={200}
                    className="object-cover w-full h-full"
                />
            </div>
            <div className="p-2"> 
                <h3 className="text-lg font-semibold text-gray-800 mb-2">{product.name}</h3>
                <p className="text-gray-600 mb-4">R$ {product.price.toFixed(2)}</p> 
                <button
                    onClick={addToCard}
                    className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded transition duration-300 w-full"
                >
                    Adicionar ao Carrinho
                </button>
            </div>
        </div>
    );
}