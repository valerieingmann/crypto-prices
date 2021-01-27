import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSortDown, faSortUp } from "@fortawesome/free-solid-svg-icons";

const PercentChangeCell = ({ percentChange }) => {
  const percentChangeFixed = percentChange.toFixed(2);
  const isDisplayed = percentChangeFixed > 0 || percentChangeFixed < 0;
  const isUp = percentChangeFixed > 0;

  return (
    <div>
      {isDisplayed && (
        <div className="percent-change-container">
          <FontAwesomeIcon
            icon={isUp ? faSortUp : faSortDown}
            className={isUp ? " green green-icon" : "red red-icon"}
          />
          <span className={isUp ? "green" : "red"}> {percentChangeFixed}%</span>
        </div>
      )}
    </div>
  );
};

export default PercentChangeCell;
