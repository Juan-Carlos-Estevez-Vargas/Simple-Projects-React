import "./App.css";
import Movie from "./components/Movie";
import PageWrapper from "./components/PageWrapper";
import Pagination from "./components/Pagination";
import moviesJson from "./util/movies.json";
import { useEffect, useState } from "react";

function App() {
  const [actualPage, setActualPage] = useState(1);
  const TOTAL_ITEMS_PER_PAGE = 6;
  let movies = moviesJson;

  /**
   * Busca las películas en el servidor remoto
   * cuando se inicie la página.
   */
  // useEffect(() => {
  //   findMovies();
  // }, []);

  const findMovies = async () => {
    let url =
      "https//cors-anywhere.herokuapp.com/https://lucasmoy.dev/data/react/peliculas.json";

    let response = await fetch(url, {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Origin: "https://lucasmoy.dev",
      },
    });

    let json = await response.json();
    alert(json);
  };

  const loadMoviesWithPagination = () => {
    movies = movies.slice(
      (actualPage - 1) * TOTAL_ITEMS_PER_PAGE,
      actualPage * TOTAL_ITEMS_PER_PAGE
    );
  };

  const getTotalPages = () => {
    let totalMovies = moviesJson.length;
    return Math.ceil(totalMovies / TOTAL_ITEMS_PER_PAGE);
  };

  loadMoviesWithPagination();

  return (
    <PageWrapper>
      {movies.map((movie) => (
        <Movie
          title={movie.title}
          stars={movie.stars}
          img={movie.img}
          director={movie.director}
          actors={movie.actors}
          date={movie.date}
          duration={movie.duration}
          description={movie.description}
        />
      ))}

      <Pagination
        page={actualPage}
        total={getTotalPages()}
        onChange={(page) => {
          setActualPage(page);
        }}
      />
    </PageWrapper>
  );
}

export default App;
