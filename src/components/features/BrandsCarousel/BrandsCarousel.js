import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight, faAngleLeft } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import styles from './Brands.module.scss';
import { useSelector } from 'react-redux';
import { getAllBrands } from '../../../redux/brandsRedux';

const BrandsCarousel = () => {
  const brands = useSelector(getAllBrands);

  return (
    <div className={`container ${styles.root}`}>
      <div
        id='BrandsCarousel'
        className={`carousel slide w-100 row ${styles.containerWrapper}`}
        data-ride='carousel'
      >
        <div className='carousel-inner'>
          <div className='carousel-item active d-flex px-5 justify-content-around'>
            {brands.map(brand => (
              <div key={brand.id} className={`col-lg-2 ${styles.imageBlock}`}>
                <img src={brand.image} alt={brand.name} />
              </div>
            ))}
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
