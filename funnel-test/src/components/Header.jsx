import React, { useState } from "react";

const Header = ({ onSearch, onAddForm }) => {
  const [nameFilter, setNameFilter] = useState("");
  const [dateFilter, setDateFilter] = useState(""); 

  const handleSearch = () => {
    onSearch(nameFilter, dateFilter);
  };
  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      handleSearch(); // Search on enter
    }
  };
  return (
    <header className="header">
      <div className="breadcrumb">
        <p>
          <svg
            width="15"
            height="14"
            viewBox="0 0 15 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0 1.875C0 0.84082 0.84082 0 1.875 0H13.125C14.1592 0 15 0.84082 15 1.875V11.25C15 12.2842 14.1592 13.125 13.125 13.125H1.875C0.84082 13.125 0 12.2842 0 11.25V1.875ZM1.875 3.75V11.25H6.5625V3.75H1.875ZM13.125 3.75H8.4375V11.25H13.125V3.75Z"
              fill="#525252"
            />
          </svg>
          Vaialavorare {">"} <span> Form List</span>
        </p>
      </div>
      <div className="search-bar">
        <div className="search-input">
          <button onClick={onAddForm}>
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3.62532 16.4493C5.38246 18.2262 7.7735 19.2323 10.2724 19.2462C12.7713 19.2602 15.1735 18.2809 16.9503 16.5237C18.7272 14.7666 19.7333 12.3755 19.7472 9.87663C19.7612 7.37771 18.7819 4.97559 17.0247 3.19872C15.2676 1.42185 12.8765 0.415777 10.3776 0.401826C7.8787 0.387874 5.47659 1.36719 3.69972 3.12433C1.92285 4.88147 0.916775 7.2725 0.902823 9.77142C0.888872 12.2703 1.86818 14.6725 3.62532 16.4493ZM10.3486 5.60791C10.8378 5.61064 11.2312 6.00844 11.2259 6.4951L11.2122 8.94148L13.6586 8.95514C14.1479 8.95787 14.5413 9.35567 14.536 9.84233C14.5306 10.329 14.1354 10.725 13.6488 10.7197L11.2024 10.706L11.1887 13.1524C11.186 13.6417 10.7882 14.035 10.3015 14.0297C9.81488 14.0244 9.41889 13.6292 9.42421 13.1425L9.43786 10.6962L6.99148 10.6825C6.5022 10.6798 6.10882 10.282 6.11414 9.79531C6.11946 9.30865 6.51467 8.91265 7.00133 8.91797L9.44772 8.93163L9.46137 6.48525C9.4641 5.99597 9.8619 5.60259 10.3486 5.60791Z"
                fill="white"
              />
            </svg>
            Aggiungi Typeform
          </button>
          <div className="nome-form">
            <svg
              width="17"
              height="17"
              viewBox="0 0 17 17"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M13.8132 6.90659C13.8132 8.43068 13.3184 9.83856 12.485 10.9808L16.6887 15.1878C17.1038 15.6029 17.1038 16.277 16.6887 16.692C16.2736 17.1071 15.5996 17.1071 15.1845 16.692L10.9808 12.485C9.83857 13.3217 8.43069 13.8132 6.90659 13.8132C3.09136 13.8132 0 10.7218 0 6.90659C0 3.09136 3.09136 0 6.90659 0C10.7218 0 13.8132 3.09136 13.8132 6.90659ZM6.90659 11.6881C7.5345 11.6881 8.15627 11.5644 8.73638 11.3241C9.3165 11.0838 9.8436 10.7316 10.2876 10.2876C10.7316 9.8436 11.0838 9.3165 11.3241 8.73638C11.5644 8.15626 11.6881 7.5345 11.6881 6.90659C11.6881 6.27867 11.5644 5.65691 11.3241 5.07679C11.0838 4.49668 10.7316 3.96957 10.2876 3.52557C9.8436 3.08157 9.3165 2.72936 8.73638 2.48907C8.15627 2.24878 7.5345 2.1251 6.90659 2.1251C6.27867 2.1251 5.65691 2.24878 5.07679 2.48907C4.49668 2.72936 3.96957 3.08157 3.52557 3.52557C3.08157 3.96957 2.72936 4.49668 2.48907 5.07679C2.24878 5.65691 2.1251 6.27867 2.1251 6.90659C2.1251 7.5345 2.24878 8.15626 2.48907 8.73638C2.72936 9.3165 3.08157 9.8436 3.52557 10.2876C3.96957 10.7316 4.49668 11.0838 5.07679 11.3241C5.65691 11.5644 6.27867 11.6881 6.90659 11.6881Z"
                fill="black"
                fill-opacity="0.5"
              />
            </svg>
            <input
              type="text"
              placeholder="Nome form"
              value={nameFilter}
              onChange={(e) => setNameFilter(e.target.value)} onKeyDown={handleKeyDown}
            />
          </div>
          <input
            type="text" className="date"
            placeholder="Data di creazione"
            value={dateFilter}
            onChange={(e) => setDateFilter(e.target.value)} onKeyDown={handleKeyDown}
          />
        </div>

        <button className="search-button" onClick={handleSearch}>
          Cerca
        </button>
      </div>
    </header>
  );
};

export default Header;
