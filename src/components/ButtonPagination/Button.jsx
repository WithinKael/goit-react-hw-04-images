import React from 'react';
import css from '../../Styles.module.css';

export const Button = ({ handleChangeButton }) => {
  return (
    <button className={css.Button} onClick={handleChangeButton} type="button">
      Load more
    </button>
  );
};
