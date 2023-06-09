export default function Pagination({ page, total, onChange }) {
  const getPages = () => {
    const result = [];
    for (let i = 0; i < total; i++) {
      result.push(
        <a
          onClick={() => onChange(i + 1)}
          className={page === i + 1 ? "active" : ""}
        >
          {i + 1}
        </a>
      );
    }
    return result;
  };

  return (
    <div className="topbar-filter">
      <label>Movies per page:</label>
      <select>
        <option value="range">5 Movies</option>
        <option value="saab">10 Movies</option>
      </select>
      <div className="pagination2">
        <span>
          Page {page} of {total}:
        </span>
        {getPages()}
        <a href="#">
          <i className="ion-arrow-right-b"></i>
        </a>
      </div>
    </div>
  );
}
