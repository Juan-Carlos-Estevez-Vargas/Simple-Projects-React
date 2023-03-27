import React, { useEffect, useState } from "react";
import TiktokVideo from "./tiktokVideo";
import useFetch from "./useFetch";
import useItems from "./useItems";
import "./tiktok.css";

export default function Tiktok() {
  const [url, setUrl] = useState("");
  const [page, setPage] = useState(0);
  const [index, setIndex] = useState(0);
  const [response, data, isLoading] = useFetch(url, "json");
  const [items] = useItems(data);

  useEffect(() => {
    setUrl("http://localhost:4000/page/" + page);
  }, [page]);

  /**
   * Redirige al video siguiente.
   */
  function nextVideo() {
    if (index + 2 === items.length) {
      // cargar mas videos
      setPage(page + 1);
    }
    setIndex(index + 1);
  }

  /**
   * Redirige al video anterior.
   */
  function prevVideo() {
    if (index > 0) {
      setIndex(index - 1);
    }
  }

  return (
    <div>
      <div>{isLoading ? "Cargando ..." : ""}</div>
      <button disabled={isLoading} onClick={() => nextVideo()}>
        Next Video
      </button>
      <button disabled={isLoading} onClick={() => prevVideo()}>
        Prev Video
      </button>
      <div className="tiktoksContainerView">
        <div
          className="tiktoksContainer"
          style={{ transform: `translateY(${-1 * index * 960 + "px"})` }}
        >
          <Videos items={items} index={index} />
        </div>
      </div>
    </div>
  );
}

/**
 * Memoriza un item para que no se quede pensando la aplicación.
 */
const Videos = React.memo(({ items, index }) => {
  return (
    <>
      {items?.map((item, i) => (
        <TiktokVideo key={item.id} item={item} current={index === i} />
      ))}
    </>
  );
});
