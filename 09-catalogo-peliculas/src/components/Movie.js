export default function Movie({
  title,
  stars,
  img,
  director,
  actors,
  date,
  duration,
  description,
}) {
  return (
    <div className="movie-item-style-2">
      <img src={img} alt={title} />
      <div className="mv-item-infor">
        <h6>
          <a href="moviesingle.html">{title}</a>
        </h6>
        <p className="rate">
          <i className="ion-android-star"></i>
          <span>{stars}</span> /10
        </p>
        <p className="describe">{description}</p>
        <p className="run-time">
          {" "}
          Run Time: {duration} . <span>MMPA: PG-13 </span> .{" "}
          <span>Release: {date}</span>
        </p>
        <p>
          Director: <a href="#">{director}</a>
        </p>
        <p>
          Stars: <a href="#">{actors}</a>
        </p>
      </div>
    </div>
  );
}
