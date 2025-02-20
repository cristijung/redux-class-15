'use client';
import { useGetBreedsQuery, useGetBreedByIdQuery } from '../../store/catApiDois';
import Image from 'next/image'; 

export default function CatsGallery() {
  const { data: breeds, isLoading: breedsLoading } = useGetBreedsQuery();
  const { data: breed, isLoading: breedLoading } = useGetBreedByIdQuery('abys');

  if (breedsLoading) {
    return <div>Carregando raças...</div>;
  }

  if (breedLoading) {
    return <div>Carregando detalhes da raça...</div>;
  }

  return (
    <div className="flex flex-col items-center font-sans">
      <h1 className="text-2xl font-bold text-gray-800 mb-4">Raças de Gatos</h1>

      <div className="flex flex-wrap justify-center gap-4">
        {breeds?.map((breed) => (
          <div key={breed.id} className="bg-gray-100 rounded-lg p-4 shadow-md cursor-pointer transition transform hover:scale-105 hover:bg-gray-200">
            <span className="font-bold text-gray-800">{breed.name}</span>
          </div>
        ))}
      </div>

      {breed && (
        <div className="max-w-2xl text-center mt-8">
          <h2 className="text-xl font-bold text-gray-200">{breed.name}</h2>
          <p className="text-gray-100 leading-relaxed">{breed.description}</p>
          <Image
            src={breed.image?.url || '/gato.webp'}
            alt={breed.name}
            width={500}
            height={500}
            priority
            className="rounded-lg shadow-lg mt-4 mb-4"
          />
        </div>
      )}
    </div>
  );
}