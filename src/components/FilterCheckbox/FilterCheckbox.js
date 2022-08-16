import React from "react";
import './FilterCheckbox.css';

function FilterCheckbox(props) {  
  return (    
    <div className="filter-check-box">
      <label className="filter-check-box__button-switch">
        <input className="filter-check-box__input-switch" type="checkbox" value={props.tumbler} checked={props.tumbler} onChange={props.handleTumblerChange} />
        <span className="filter-check-box__slider" />
      </label>
      <p className="filter-check-box__text">Короткометражки</p>
    </div>
  )
}

export default FilterCheckbox;