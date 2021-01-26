import { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [data, setData] = useState([]);
  const [totalPages, setTotalPages] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetchData(1);
  }, []);

  const fetchData = async start => {
    try {
      const res = await axios.get(`/api?start=${start}`);
      console.log(res.data);
      setData(res.data.data);
      setTotalPages(Math.ceil(res.data.status.total_count / 100));
      setLoading(false);
    } catch (error) {
      setError(error.message);
      setLoading(false);
      console.error(error);
    }
  };

  const handleNavClick = direction => {
    if (direction === "next") {
      fetchData(currentPage * 100 + 1);
      setCurrentPage(lastPage => lastPage + 1);
    } else {
      fetchData((currentPage - 2) * 100 + 1);
      setCurrentPage(lastPage => lastPage - 1);
    }
  };
  return (
    <div>
      <header>
        <h1>Cryptocurrency Prices</h1>
      </header>
      {error && (
        <div>
          <h1>Oops! There was an error. Please refresh the page to try again.</h1>
        </div>
      )}
      {!loading && (
        <div>
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Price</th>
                <th>24 hour change</th>
              </tr>
            </thead>
            <tbody>
              {data.map(currency => {
                return (
                  <tr key={currency.id}>
                    <td>{currency.name}</td>
                    <td>{currency.quote.USD.price.toFixed(2)}</td>
                    <td>{currency.quote.USD.percent_change_24h.toFixed(2)}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
          {totalPages > 0 && (
            <div>
              <button disabled={currentPage <= 1} onClick={() => handleNavClick("prev")}>
                {"<"}
              </button>
              <span>
                Page {currentPage} of {totalPages}
              </span>
              <button
                disabled={currentPage >= totalPages || totalPages <= 1}
                onClick={() => handleNavClick("next")}>
                {">"}
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default App;
