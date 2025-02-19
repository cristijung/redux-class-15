'use client';

import { Product } from '../../types/Tipos';
import ProductCard from '../product/ProductCard';
import Cart from '../cart/Cart';


export default function Loja() {
  const products: Product[] = [
    { id: 1, name: 'Obi-Wan', price: 129.99, image: '/img1.jpg' },
    { id: 2, name: 'StormTrooper', price: 100.98, image: '/img2.jpg' },
    { id: 3, name: 'Luke Skywalker', price: 139.33, image: '/img5.jpg' },
    { id: 4, name: 'C3-PO', price: 129.99, image: '/img3.webp' },
    { id: 5, name: 'Darth Wader', price: 158.98, image: '/img4.jpg' },
    { id: 6, name: 'Luke Skywalker e Grogu', price: 245.99, image: '/img3.jpg' },
    { id: 7, name: 'Leia Organa', price: 119.99, image: '/img6.jpg' },
    { id: 8, name: 'Mestre Yoda', price: 119.99, image: '/img7.jpg' },
    { id: 9, name: 'Grogu - The Child', price: 119.99, image: '/img8.jpg' },
    
  ];

  return (
    <>
    <section className="container mx-auto p-4 bg-gray-700 font-sans">
  <h1 className="text-3xl font-bold mb-4 text-center text-gray-100">Loja Funko Star Wars</h1>
  <div className="flex flex-wrap justify-center gap-4 mb-8">
    {products.map((product) => (
      <div
        key={product.id}
        className="w-80 rounded-lg p-4 text-gray-700 overflow-hidden shadow-md transition duration-300 hover:scale-105 hover:shadow-lg bg-white"
      >
        <ProductCard product={product} />
      </div>
    ))}
  </div>
  <div className="mx-auto bg-white rounded-lg shadow-md p-6 text-gray-800">
    <Cart />
  </div>
</section>
    </>
  );
}