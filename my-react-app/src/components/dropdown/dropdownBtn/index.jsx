import { useState } from "react";
import './index.scss';

export const DropdownBtn = ({ openDropdown, setPage }) => {
  const [display, setDisplay] = useState(openDropdown);

  const handleClick = () => {
    setDisplay(prevState => !prevState);
    setPage("Homework");
  }

  const handleItemClick = (page) => {
    setPage(page);

  }

  const dropdownDown = (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 15L6 9H18L12 15Z" fill="white" />
    </svg>
  );

  const dropdownUp = (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 9L18 15H6L12 9Z" fill="white" />
    </svg>
  );

  return (
    <div className="dropdown">
      <button className="header__link" onMouseOver={handleClick}>
        Homework {display ? dropdownUp : dropdownDown}
      </button>
      {display && (
        <nav className="homework__nav">
          <ul className="homework__list">
            <li className="homework__el" onClick={() => handleItemClick("HW37")}>HW37</li>
            <li className="homework__el" onClick={() => handleItemClick("HW38")}>HW38</li>
            <li className="homework__el" onClick={() => handleItemClick("HW39")}>HW39</li>
          </ul>
        </nav>
      )}
    </div>
  );
};
