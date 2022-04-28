import React from 'react';
import { useSelector } from 'react-redux';
import ReactTooltip from 'react-tooltip';
import { getActiveInGallery, getIsTopSeller } from '../../../redux/productsRedux';
import { getAllGalleryItem } from '../../../redux/galleryRedux';

import styles from './Gallery.module.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faExchangeAlt,
  faShoppingBasket,
  faAngleLeft,
  faAngleRight,
  faStar,
} from '@fortawesome/free-solid-svg-icons';
import { faStar as farStar, faHeart, faEye } from '@fortawesome/free-regular-svg-icons';

import Button from '../../common/Button/Button';

const Gallery = () => {
  const topSellerProducts = useSelector(getIsTopSeller);
  const activeProduct = useSelector(getActiveInGallery);
  const stateItemGallery = useSelector(getAllGalleryItem);

  return (
    <>
      <ReactTooltip place='right' />
      <div className={styles.roots}>
        <div className='container'>
          <div className='row'>
            <div className={'col-12 col-md-6'}>
              <div className={styles.gallery}>
                <div className={'col-auto ' + styles.heading}>
                  <h3>Furniture Gallery</h3>
                </div>
                <div className={styles.galleryBox}>
                  <nav className={styles.tabs}>
                    <ul>
                      <li>
                        <a href='#' className={styles.tab}>
                          Featured
                        </a>
                      </li>
                      <li>
                        <a href='#' className={styles.tab + styles.active}>
                          Top seller
                        </a>
                      </li>
                      <li>
                        <a href='#' className={styles.tab}>
                          Sale off
                        </a>
                      </li>
                      <li>
                        <a href='#' className={styles.tab}>
                          Top rated
                        </a>
                      </li>
                    </ul>
                  </nav>
                  <div
                    className={styles.activeProduct}
                    style={{ backgroundImage: `url('${activeProduct.image}')` }}
                  >
                    <div className={styles.icons}>
                      <p data-tip='Add to favorite'>
                        <FontAwesomeIcon
                          className={styles.icon}
                          icon={faHeart}
                        ></FontAwesomeIcon>
                      </p>
                      <p data-tip='Add to compare'>
                        <FontAwesomeIcon
                          className={styles.icon}
                          icon={faExchangeAlt}
                        ></FontAwesomeIcon>
                      </p>
                      <p data-tip='See details'>
                        <FontAwesomeIcon
                          className={styles.icon}
                          icon={faEye}
                        ></FontAwesomeIcon>
                      </p>
                      <p data-tip='Add to Cart'>
                        <FontAwesomeIcon
                          className={styles.icon}
                          icon={faShoppingBasket}
                        ></FontAwesomeIcon>
                      </p>
                    </div>
                    <div className={styles.description}>
                      <div className={styles.prices}>
                        <p>$ {activeProduct.price}</p>
                        <p> {activeProduct.oldPrice} </p>
                      </div>
                      <div className={styles.contentBgn}>
                        <div className={styles.content}>
                          <h5>{activeProduct.name}</h5>
                          <div className={styles.stars}>
                            {[1, 2, 3, 4, 5].map(i => (
                              <a key={i} href='#'>
                                {i <= activeProduct.stars ? (
                                  <FontAwesomeIcon icon={faStar}>
                                    {i} stars
                                  </FontAwesomeIcon>
                                ) : (
                                  <FontAwesomeIcon icon={farStar}>
                                    {i} stars
                                  </FontAwesomeIcon>
                                )}
                              </a>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={'row ' + styles.slider}>
                  <button
                    type='button'
                    className={'btn rounded-0 ' + styles.buttonLeft}
                  >
                    <FontAwesomeIcon className={styles.icon} icon={faAngleLeft} />
                  </button>
                  <div className={'col ' + styles.slides}>
                    {topSellerProducts.map(item => (
                      <div key={item.id} className={styles.slide}>
                        <img src={item.image} alt='' />
                      </div>
                    ))}
                  </div>
                  <button
                    type='button'
                    className={'btn rounded-0 ' + styles.buttonRight}
                  >
                    <FontAwesomeIcon className={styles.icon} icon={faAngleRight} />
                  </button>
                </div>
              </div>
            </div>
            <div className={'col-12 col-md-6 ' + styles.staticItemGallery}>
              <div className={styles.wrapper}>
                <div className={styles.content}>
                  <p>
                    {stateItemGallery.subtitle}{' '}
                    <span>{stateItemGallery.promoPrice}</span>
                  </p>
                  <h2>{stateItemGallery.title}</h2>
                  <Button className={styles.button} variant='main'>
                    ADD TO CART
                  </Button>
                </div>
                <div
                  className={styles.image}
                  style={{ backgroundImage: `url('${stateItemGallery.image}')` }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Gallery;
