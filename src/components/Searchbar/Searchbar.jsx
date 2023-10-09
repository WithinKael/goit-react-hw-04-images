import React, { useState } from 'react';
import css from '../../Styles.module.css';

export const Searchbar = ({ handleChangeSearch, setIsInitialLoad }) => {
  const [q, setQ] = useState('');

  const handleChange = event => {
    setQ(event.target.value.trimLeft());
  };

  const handleSubmit = event => {
    event.preventDefault();
    if (!q) {
      alert('Неудачный запрос');
    } else {
      handleChangeSearch(q);
      setQ('');
      setIsInitialLoad(true);
    }
  };

  return (
    <header className={css.Searchbar}>
      <form className={css.SearchForm} onSubmit={handleSubmit}>
        <button type="submit" className={css.SearchFormButton}>
          <span className={css.SearchFormButtonlabel}>Search</span>
        </button>

        <input
          onChange={handleChange}
          value={q}
          className={css.SearchForminput}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
      </form>
    </header>
  );
};
