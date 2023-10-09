import React, { useEffect } from 'react';
import css from '../../Styles.module.css';

export const Modal = ({ data, onCloseModal }) => {
  useEffect(() => {
    const onEscapeDown = event => {
      if (event.key === 'Escape') {
        onCloseModal();
      }
    };
    window.addEventListener('keydown', onEscapeDown);

    return () => {
      window.removeEventListener('keydown', onEscapeDown);
    };
  }, [onCloseModal]);

  const onOverlayClick = event => {
    if (event.target === event.currentTarget) {
      onCloseModal();
    }
  };

  return (
    <div className={css.Overlay} onClick={onOverlayClick}>
      <div className={css.Modal}>
        <img className={css.modalImage} src={data} alt="img" />
      </div>
    </div>
  );
};
