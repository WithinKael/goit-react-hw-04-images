import React, { Component } from 'react';
import css from '../../Styles.module.css';

export class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.onEscapeDown);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.onEscapeDown);
  }

  onEscapeDown = event => {
    if (event.key === 'Escape') {
      this.props.onCloseModal();
    }
  };

  onOverlayClick = event => {
    if (event.target === event.currentTarget) {
      this.props.onCloseModal();
    }
  };

  render() {
    return (
      <div className={css.Overlay} onClick={this.onOverlayClick}>
        <div className={css.Modal}>
          <img className={css.modalImage} src={this.props.data} alt="" />
        </div>
      </div>
    );
  }
}
