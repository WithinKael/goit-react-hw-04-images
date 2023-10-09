import { Component } from 'react';
import css from '../../Styles.module.css';

export class Searchbar extends Component {
  state = {
    q: '',
  };

  handleChange = event => {
    this.setState({ q: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.handleChangeSearch(this.state.q);
    this.setState({ q: '' });
  };

  render() {
    return (
      <header className={css.Searchbar}>
        <form className={css.SearchForm} onSubmit={this.handleSubmit}>
          <button type="submit" className={css.SearchFormButton}>
            <span className={css.SearchFormButtonlabel}>Search</span>
          </button>

          <input
            onChange={this.handleChange}
            value={this.state.q}
            className={css.SearchForminput}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
        </form>
      </header>
    );
  }
}
