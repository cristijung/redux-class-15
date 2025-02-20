// import { useGetAllCatsQuery } from "../../services/catApi";
// import { FetchBaseQueryError } from '@reduxjs/toolkit/query';
// //import { isRejectedWithValue } from '@reduxjs/toolkit';

// interface Cat {
//   id: string;
//   url: string;
//   width?: number;
//   height?: number;
// }

// export default function CatListQuery() {
//   const { data, isLoading, isError, error } = useGetAllCatsQuery();

//   if (isLoading) return <div>Carregando ...</div>;

//   if (isError) {
//     const fetchError = error as FetchBaseQueryError;
//     return (
//       <div>
//         Erro ao buscar gatos:{" "}
//         {fetchError?.data?.message || fetchError?.error || "Erro desconhecido"}
//       </div>
//     );
//   }

//   return (
//     <>
//       <ul>
//         {data?.map((cat) => (
//           <li key={cat.id}>
//             <img src={cat.url} alt="gatos" />
//           </li>
//         ))}
//       </ul>
//     </>
//   );
// }
