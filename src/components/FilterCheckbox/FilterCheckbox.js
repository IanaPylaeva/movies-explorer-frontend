import React, { useState } from "react";
import './FilterCheckbox.css';

function FilterCheckbox() {
  const [checked, setChecked] = useState(true);

  function handleChange() {
    setChecked(!checked);
  }

  return (    
    <section className="filter-check-box">
      <div className="filter-check-box__button-switch">
        <input className="filter-check-box__input-switch" type="checkbox" checked={checked} onChange={handleChange} />
        <span className="filter-check-box__slider" />
      </div>
      <p className="filter-check-box__text">Короткометражки</p>
    </section>
  )
}

export default FilterCheckbox;