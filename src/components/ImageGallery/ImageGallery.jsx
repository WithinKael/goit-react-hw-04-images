import React, { Component } from 'react';
import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import css from '../../Styles.module.css';

export class ImageGallery extends Component {
  render() {
    return (
      <ul className={css.ImageGallery}>
        {this.props.images.map(image => (
          <ImageGalleryItem
            key={image.id}
            image={image}
            onOpenModal={this.props.onOpenModal}
          />
        ))}
      </ul>
    );
  }
}
