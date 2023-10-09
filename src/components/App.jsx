import { useEffect, useState } from 'react';
import { Searchbar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Button } from './ButtonPagination/Button';
import { getImages } from 'components/Services/api';
import { FidgetSpinner } from 'react-loader-spinner';
import { Modal } from './Modal/Modal';
import css from '../Styles.module.css';

import React from 'react';

export const App = () => {
  const [images, setImages] = useState([]);
  const [q, setQ] = useState('');
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [modal, setModal] = useState({ isOpen: false, modalData: null });
  const [isInitialLoad, setIsInitialLoad] = useState(false);

  const handleChangeSearch = value => {
    setQ(value);
    setImages([]);
    setPage(1);
  };

  const handleChangeButton = () => {
    setPage(page + 1);
  };

  const onOpenModal = modalData => {
    setModal({ isOpen: true, modalData: modalData });
  };

  const onCloseModal = () => {
    setModal({ isOpen: false, modalData: null });
  };

  useEffect(() => {
    if (isInitialLoad) {
      const fetchData = async () => {
        try {
          setIsLoading(true);
          const { hits } = await getImages(q, page);
          setImages(prevImages => [...prevImages, ...hits]);
        } catch (error) {
          console.error(error);
        } finally {
          setIsLoading(false);
        }
      };

      fetchData();
    } else {
      setIsInitialLoad(false);
    }
  }, [q, page, isInitialLoad]);

  return (
    <div className="App">
      <Searchbar
        handleChangeSearch={handleChangeSearch}
        setIsInitialLoad={setIsInitialLoad}
      />
      {isLoading ? (
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
      <ImageGallery images={images} onOpenModal={onOpenModal} />
      {modal.isOpen === true ? (
        <Modal onCloseModal={onCloseModal} data={modal.modalData} />
      ) : null}
      <Button handleChangeButton={handleChangeButton} />
    </div>
  );
};
