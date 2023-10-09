import { Component } from 'react';
import { Searchbar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Button } from './ButtonPagination/Button';
import { getImages } from 'components/Services/api';
import { FidgetSpinner } from 'react-loader-spinner';
import { Modal } from './Modal/Modal';
import css from '../Styles.module.css';

export class App extends Component {
  state = {
    images: [],
    modal: {
      isOpen: false,
      modalData: null,
    },
    q: '',
    page: 1,
    isLoading: false,
  };

  async componentDidUpdate(_, prevState) {
    if (prevState.q !== this.state.q || prevState.page !== this.state.page) {
      try {
        this.setState({ isLoading: true });
        const { hits } = await getImages(this.state.q, this.state.page);
        this.setState(prevState => ({
          images: [...prevState.images, ...hits],
        }));
      } catch (error) {
        console.log(error);
      } finally {
        this.setState({ isLoading: false });
      }
    }
  }

  handleChangeSearch = value => {
    this.setState({ q: value, images: [], page: 1 });
  };

  handleChangeButton = () => {
    this.setState({ page: this.state.page + 1 });
  };

  onOpenModal = modalData => {
    this.setState({
      modal: {
        isOpen: true,
        modalData: modalData,
      },
    });
  };

  onCloseModal = () => {
    this.setState({
      modal: {
        isOpen: false,
        modalData: null,
      },
    });
  };

  render() {
    return (
      <div className="App">
        <Searchbar handleChangeSearch={this.handleChangeSearch} />
        {this.state.isLoading ? (
          <div className={css.spinnerStyle}>
            <FidgetSpinner
              visible={true}
              height="80"
              width="80"
              ariaLabel="dna-loading"
              wrapperStyle={{}}
              wrapperClass="dna-wrapper"
              ballColors={['#ff0000', '#00ff00', '#0000ff']}
              backgroundColor="#F4442E"
            />
          </div>
        ) : null}
        <ImageGallery
          images={this.state.images}
          onOpenModal={this.onOpenModal}
        />
        {this.state.modal.isOpen === true ? (
          <Modal
            onCloseModal={this.onCloseModal}
            data={this.state.modal.modalData}
          />
        ) : null}
        <Button handleChangeButton={this.handleChangeButton} />
      </div>
    );
  }
}
