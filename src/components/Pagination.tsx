import { useNavigate } from "react-router-dom";

function Pagination({ currentPage }: { currentPage: number }) {
  const navigate = useNavigate();

  const pages: number[] = [];

  for (let i: number = 1; i <= 30; i++) {
    pages.push(i);
  }

  return (
    <div className="flex flex-row flex-center justify-center text-center font-semibold my-10">
      {pages.map((pageNumber) => {
        if (pageNumber === currentPage) {
          return (
            <div
              className="cursor-pointer border border-gray-700 p-1 font-bold w-8 bg-black text-white"
              key={pageNumber}
              onClick={() => navigate(`/pokemons/${pageNumber}`)}
            >
              {pageNumber}
            </div>
          );
        }
        return (
          <div
            className="cursor-pointer border border-gray-700 p-1 w-8 bg-black text-white"
            key={pageNumber}
            onClick={() => navigate(`/pokemons/${pageNumber}`)}
          >
            {pageNumber}
          </div>
        );
      })}
    </div>
  );
}

export default Pagination;
