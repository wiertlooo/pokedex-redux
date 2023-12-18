import { useNavigate } from "react-router-dom";

function Pagination({ currentPage }: { currentPage: number }) {
  const navigate = useNavigate();

  const pages: number[] = [];

  for (let i: number = 1; i <= 30; i++) {
    pages.push(i);
  }

  return (
    <div className="flex flex-row flex-center justify-center">
      {pages.map((pageNumber) => {
        if (pageNumber === currentPage) {
          return (
            <div
              className="cursor-pointer border p-1 font-bold"
              key={pageNumber}
              onClick={() => navigate(`/pokemons/${pageNumber}`)}
            >
              {pageNumber}
            </div>
          );
        }
        return (
          <div
            className="cursor-pointer border p-1"
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
