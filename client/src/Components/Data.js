import { Table } from "../Components";
import "./Data.css";

const Data = ({ resData, fetchData, currentPage }) => {
  return (
    <div className="container">
      <div>
        <span>
          <strong>Last Updated:</strong> {new Date(resData.status.timestamp).toTimeString()}
        </span>
        <button onClick={() => fetchData((currentPage - 1) * 100 + 1)}>Refresh</button>
      </div>
      <Table resData={resData} />
    </div>
  );
};

export default Data;
