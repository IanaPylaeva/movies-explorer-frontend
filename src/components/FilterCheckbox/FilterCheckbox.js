import React, { useEffect } from "react";
import './FilterCheckbox.css';

function FilterCheckbox({ filmsTumbler, handleGetMoviesTumbler }) {
  const [tumbler, setTumbler] = React.useState(true);

  function handleTumblerChange(evt) {
    setTumbler(!tumbler);
    handleGetMoviesTumbler(!tumbler);
  }

  useEffect(() => {
    setTumbler(filmsTumbler);
  }, [filmsTumbler]);

  return (    
    <section className="filter-check-box">
      <div className="filter-check-box__button-switch">
        <input className="filter-check-box__input-switch" type="checkbox" value={tumbler} checked={tumbler} onChange={handleTumblerChange} />
        <span className="filter-check-box__slider" />
      </div>
      <p className="filter-check-box__text">Короткометражки</p>
    </section>
  )
}

export default FilterCheckbox;