import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight, faAngleLeft } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import styles from './Brands.module.scss';

const BrandsCarousel = props => {
  return (
    <div className={`container ${styles.root}`}>
      <div
        id='BrandsCarousel'
        className={`carousel slide w-100 ${styles.containerWrapper}`}
        data-ride='carousel'
      >
        <div className='carousel-inner slides6' data-visible='3'>
          <div className='carousel-item active'>
            <img
              className='d-block'
              src='https://res.cloudinary.com/dxfq3iotg/image/upload/v1561819026/brands_1.jpg'
              alt='First slide'
            />
          </div>
          <div className='carousel-item active'>
            <img
              className='d-block'
              src='https://res.cloudinary.com/dxfq3iotg/image/upload/v1561819026/brands_1.jpg'
              alt='Second slide'
            />
          </div>
          <div className='carousel-item active'>
            <img
              className='d-block'
              src='https://res.cloudinary.com/dxfq3iotg/image/upload/v1561819026/brands_1.jpg'
              alt='Third slide'
            />
          </div>
        </div>
        <a
          className='carousel-control-prev'
          href='#BrandsCarousel'
          role='button'
          data-slide='prev'
        >
          <FontAwesomeIcon className='carousel-control-prev-icon' icon={faAngleLeft} />
          <span className='sr-only'>Previous</span>
        </a>
        <a
          className='carousel-control-next'
          href='#BrandsCarousel'
          role='button'
          data-slide='next'
        >
          <FontAwesomeIcon className='carousel-control-next-icon' icon={faAngleRight} />
          <span className='sr-only'>Next</span>
        </a>
      </div>
    </div>
  );
};

export default BrandsCarousel;
