import "./Table.css";
import { PercentChangeCell } from "../Components";

const Table = ({ resData }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Price</th>
          <th>Market Cap</th>
          <th>24 hour change</th>
          <th>7 day change</th>
          <th>Volume</th>
        </tr>
      </thead>
      <tbody>
        {resData.data.map(currency => {
          return (
            <tr key={currency.id} className="table-row">
              <td>{currency.name}</td>
              <td>${currency.quote.USD.price.toLocaleString()}</td>
              <td>${Math.round(currency.quote.USD.market_cap).toLocaleString()}</td>
              <td>
                <PercentChangeCell percentChange={currency.quote.USD.percent_change_24h} />
              </td>
              <td>
                <PercentChangeCell percentChange={currency.quote.USD.percent_change_7d} />
              </td>
              <td>${Math.round(currency.quote.USD.volume_24h).toLocaleString()}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default Table;
