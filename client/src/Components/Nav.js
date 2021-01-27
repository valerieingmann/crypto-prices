import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import "./Nav.css";

const Nav = ({ currentPage, totalPages, handleNavClick }) => {
  return (
    <div className="nav-container">
      <FontAwesomeIcon
        icon={faChevronLeft}
        className={currentPage < 2 ? "nav-disabled" : "nav"}
        onClick={() => handleNavClick("prev")}
      />
      <span className="nav-text">
        Page {currentPage} of {totalPages}
      </span>
      <FontAwesomeIcon
        icon={faChevronRight}
        className={currentPage >= totalPages || totalPages < 2 ? "nav-disabled" : "nav"}
        onClick={() => handleNavClick("next")}
      />
    </div>
  );
};

export default Nav;
