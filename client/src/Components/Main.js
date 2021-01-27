import { useEffect, useState } from "react";
import axios from "axios";
import "../App.css";
import { Data, Nav } from "../Components";

const Main = () => {
  const [resData, setResData] = useState([]);
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
      setResData(res.data);
      setTotalPages(Math.ceil(res.data.status.total_count / 100));
      setLoading(false);
    } catch (error) {
      setError(error.message);
      setLoading(false);
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
    <main className="container">
      {error && (
        <div>
          <h1>Oops! There was an error. Please refresh the page and try again.</h1>
        </div>
      )}
      {!loading && !error && (
        <>
          <Data resData={resData} fetchData={fetchData} currentPage={currentPage} />
          {totalPages > 0 && (
            <Nav
              currentPage={currentPage}
              totalPages={totalPages}
              handleNavClick={handleNavClick}
            />
          )}
        </>
      )}
    </main>
  );
};

export default Main;
