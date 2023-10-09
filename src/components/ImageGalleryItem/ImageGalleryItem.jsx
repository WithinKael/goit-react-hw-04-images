import React from 'react';
import css from '../../Styles.module.css';

export const ImageGalleryItem = ({ image, onOpenModal }) => {
  return (
    <li className={css.ImageGalleryItem}>
      <img
        className={css.ImageGalleryItemimage}
        src={image.webformatURL}
        alt=""
        onClick={() => onOpenModal(image.largeImageURL)}
      />
    </li>
  );
};
