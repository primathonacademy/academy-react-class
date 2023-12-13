import { useEffect, useState } from "react";
import { getMovies, searchMovies } from "../../api/api-movie";
import MovieCard from "./MovieCard";

const PaginationButton = (props) => {
  const onClick = () => {
    if (props.onClick) {
      props.onClick(props.text);
    }
    // props?.onClick?.(props.text);
  };
  return (
    <button
      className={`border rounded px-3 py-1 ${
        props.selected ? "bg-green-500 text-white" : ""
      } ${props.disabled ? "cursor-not-allowed opacity-50" : ""}`}
      onClick={onClick}
      disabled={props.disabled}
    >
      {props.text}
    </button>
  );
};

const MovieList = () => {
  const [movies, setMovies] = useState([]);
  const [totalPages, setTotalPages] = useState(1);
  const [activePage, setActivePage] = useState(1);
  const [searchValue, setSearchValue] = useState("");
  const [seenResults, setSeenResults] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        console.log("Data fetching started");
        const payload = {
          page: activePage,
        };
        const response = await getMovies(payload);
        if (response?.results && Array.isArray(response.results)) {
          setMovies(response.results);
          setTotalPages(response.total_pages);
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [activePage]);

  const onPageButtonClick = (page) => {
    setActivePage(page);
  };

  const onSearchValueChange = (event) => {
    const value = event.target.value;
    setSearchValue(value);
    console.log(value);
  };

  const onSearchSubmit = async (event) => {
    if (event.key === "Enter") {
      console.log("Search Submit");
      try {
        const payload = {
          query: searchValue,
        };
        const response = await searchMovies(payload);
        if (response?.results && Array.isArray(response.results)) {
          setMovies(response.results);
        }
      } catch (error) {
        console.error(error);
      } finally {
        setSearchValue("");
      }
    }
  };

  return (
    <>
      <div className='flex justify-between gap-4 p-5 overflow-hidden flex-wrap bg-gray-200'>
        <div>LOGO</div>
        <div>
          <input
            className='border rounded px-3 py-1'
            type='text'
            placeholder='Search'
            value={searchValue}
            onChange={onSearchValueChange}
            onKeyDown={onSearchSubmit}
          />
        </div>
      </div>
      <div className='flex gap-4 p-5 overflow-hidden flex-wrap'>
        <PaginationButton text={"<<"} onClick={onPageButtonClick} />
        <PaginationButton
          text={"<"}
          onClick={() => {
            setActivePage((prevActivePage) =>
              prevActivePage === 1 ? prevActivePage : activePage - 1
            );
          }}
          disabled={activePage === 1}
        />
        {new Array(seenResults + 10).fill(0).map((_, index) => (
          <PaginationButton
            key={index}
            text={index + 1}
            onClick={onPageButtonClick}
            selected={activePage === index + 1}
          />
        ))}
        <PaginationButton
          text={">"}
          onClick={() => {
            setActivePage(activePage + 1);
          }}
        />
        <PaginationButton
          text={">>"}
          onClick={() => {
            setSeenResults((prevSeenResult) => prevSeenResult + 10);
          }}
        />
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 lg:gap-5 p-5'>
        {movies.map((movie, index) => {
          return <MovieCard key={movie.id} movie={movie} index={index} />;
        })}
      </div>
    </>
  );
};

export default MovieList;
