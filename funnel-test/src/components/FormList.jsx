import React, { useState } from "react";
import Header from "./Header";

const FormList = () => {
  const [allForms, setAllForms] = useState([
    {
      name: "Typeform | Funnel C...",
      date: "Ven 27 Mag 2024",
      counter: "45",
      sheetLink: "#",
    },
    {
      name: "Typeform | Vaialavorare_R...",
      date: "Gio 7 Lug 2024",
      counter: "45",
      sheetLink: "#",
    },
    {
      name: "Typeform | Funnel Con...",
      date: "Mar 29 Ott 2024",
      counter: "45",
      sheetLink: "#",
    },
 
  ]);

  const [filteredForms, setFilteredForms] = useState(allForms);
  const [isAdding, setIsAdding] = useState(false);
  const [newForm, setNewForm] = useState({
    name: "",
    date: "",
    counter: "22",
    sheetLink: "",
  });


  // Filter form
  const handleSearch = (nameFilter, dateFilter) => {
    const filtered = allForms.filter((form) => {
      const matchesName = form.name.toLowerCase().includes(nameFilter.toLowerCase());
      const matchesDate = dateFilter
        ? form.date.toLowerCase().includes(dateFilter.toLowerCase())
        : true;
      return matchesName && matchesDate;
    });
    setFilteredForms(filtered);
  };

  // Add form
  const addForm = () => {
    if (!newForm.name || !newForm.date || !newForm.sheetLink) {
      alert("Tutti i campi sono obbligatori!");
      return;
    }

    const updatedForms = [...allForms, newForm];
    setAllForms(updatedForms);
    setFilteredForms(updatedForms); 
    setNewForm({ name: "", date: "", counter: "0", sheetLink: "" }); 
    setIsAdding(false); 
  };

  return (
    <div className="container">
      <Header onSearch={handleSearch} onAddForm={() => setIsAdding(true)} />

      {isAdding && (
        <div className="add-form-container">
          <h3>Aggiungi un nuovo form</h3>
          <input
            type="text"
            placeholder="Nome form"
            value={newForm.name}
            onChange={(e) => setNewForm({ ...newForm, name: e.target.value })}
          />
          <input
            type="text"
            placeholder="Data di creazione"
            value={newForm.date}
            onChange={(e) => setNewForm({ ...newForm, date: e.target.value })}
          />
          <input
            type="text"
            placeholder="Link Google Sheet"
            value={newForm.sheetLink}
            onChange={(e) => setNewForm({ ...newForm, sheetLink: e.target.value })}
          />
          <button className="btn-add" onClick={addForm}>Aggiungi</button>
          <button className="btn-cancel" onClick={() => setIsAdding(false)}>Annulla</button>
        </div>
      )}

      <div className="form-table-container">
        <table className="form-table">
          <thead>
            <tr>
              <th></th>
              <th>Nome form</th>
              <th>Data Creazione</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {filteredForms.map((form, index) => (
              <tr key={index}>
                <td>
                  <div className="form-icon">AB</div>
                </td>
                <td>
                  {form.name}
                  <div className="form-badge">
                    <svg
                      width="12"
                      height="9"
                      viewBox="0 0 12 9"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M1.6875 2.25C1.6875 1.65326 1.92455 1.08097 2.34651 0.65901C2.76847 0.237053 3.34076 0 3.9375 0C4.53424 0 5.10653 0.237053 5.52849 0.65901C5.95045 1.08097 6.1875 1.65326 6.1875 2.25C6.1875 2.84674 5.95045 3.41903 5.52849 3.84099C5.10653 4.26295 4.53424 4.5 3.9375 4.5C3.34076 4.5 2.76847 4.26295 2.34651 3.84099C1.92455 3.41903 1.6875 2.84674 1.6875 2.25ZM0 8.47793C0 6.74648 1.40273 5.34375 3.13418 5.34375H4.74082C6.47227 5.34375 7.875 6.74648 7.875 8.47793C7.875 8.76621 7.64121 9 7.35293 9H0.52207C0.233789 9 0 8.76621 0 8.47793ZM10.7104 9H8.28809C8.38301 8.83477 8.43926 8.64316 8.43926 8.4375V8.29688C8.43926 7.22988 7.96289 6.27188 7.2123 5.62852C7.25449 5.62676 7.29492 5.625 7.33711 5.625H8.41641C9.98086 5.625 11.25 6.89414 11.25 8.46035C11.25 8.75918 11.0074 9 10.7104 9ZM7.59375 4.5C7.04883 4.5 6.55664 4.27852 6.1998 3.92168C6.54609 3.4541 6.75 2.87578 6.75 2.25C6.75 1.77891 6.63398 1.33418 6.42832 0.943945C6.75527 0.704883 7.15781 0.5625 7.59375 0.5625C8.68184 0.5625 9.5625 1.44316 9.5625 2.53125C9.5625 3.61934 8.68184 4.5 7.59375 4.5Z"
                        fill="#F700A9"
                      />
                    </svg>
                    {form.counter}
                  </div>
                </td>
                <td>{form.date}</td>
                <td className="buttons">
                  <a href={form.sheetLink} download className="btn doc">
                    Download Sheet
                  </a>
                  <a className="btn copy-link" href="#"> <svg
                      width="17"
                      height="13"
                      viewBox="0 0 17 13"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M15.2039 6.6785C16.7324 5.14993 16.7324 2.67446 15.2039 1.14589C13.8511 -0.206826 11.7193 -0.382679 10.1636 0.729254L10.1203 0.759014C9.73076 1.03767 9.64148 1.57876 9.92014 1.96564C10.1988 2.35251 10.7399 2.4445 11.1268 2.16584L11.1701 2.13608C12.0385 1.51653 13.2262 1.61393 13.9783 2.36875C14.8305 3.22096 14.8305 4.60073 13.9783 5.45294L10.9428 8.49384C10.0906 9.34606 8.71081 9.34606 7.8586 8.49384C7.10379 7.73903 7.00639 6.55134 7.62594 5.68561L7.6557 5.64232C7.93436 5.25274 7.84237 4.71165 7.45549 4.4357C7.06862 4.15974 6.52483 4.24902 6.24887 4.6359L6.21911 4.67918C5.10447 6.2321 5.28033 8.36398 6.63304 9.7167C8.16161 11.2453 10.6371 11.2453 12.1657 9.7167L15.2039 6.6785ZM1.14643 6.04543C-0.382142 7.574 -0.382142 10.0495 1.14643 11.578C2.49914 12.9308 4.63102 13.1066 6.18665 11.9947L6.22993 11.9649C6.61952 11.6863 6.7088 11.1452 6.43014 10.7583C6.15148 10.3714 5.61039 10.2794 5.22351 10.5581L5.18023 10.5878C4.31178 11.2074 3.1241 11.11 2.37199 10.3552C1.51978 9.50027 1.51978 8.12049 2.37199 7.26828L5.40748 4.23008C6.25969 3.37787 7.63946 3.37787 8.49168 4.23008C9.24649 4.9849 9.34389 6.17258 8.72434 7.04103L8.69458 7.08431C8.41592 7.4739 8.50791 8.01498 8.89478 8.29094C9.28166 8.56689 9.82545 8.47761 10.1014 8.09073L10.1312 8.04745C11.2458 6.49182 11.07 4.35994 9.71724 3.00723C8.18867 1.47866 5.7132 1.47866 4.18463 3.00723L1.14643 6.04543Z"
                        fill="#F700A9"
                      />
                    </svg>
                    Copia link
                  </a>
                  <a className="btn edit-form" href="#">
                    Modifica form
                  </a>
                </td>
              </tr>
            ))}
            {filteredForms.length === 0 && (
              <tr>
                <td colSpan="3" style={{ textAlign: "center" }}>
                  Nessun risultato trovato
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default FormList;
