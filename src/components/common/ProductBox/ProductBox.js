import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';

import styles from './ProductBox.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faStar,
  faExchangeAlt,
  faShoppingBasket,
} from '@fortawesome/free-solid-svg-icons';
import { faStar as farStar, faHeart } from '@fortawesome/free-regular-svg-icons';
import Button from '../Button/Button';
import { addProductToCompare } from '../../../redux/productsRedux';
import { removeProductToCompare } from '../../../redux/productsRedux';
import { toggleProductFavorite } from '../../../redux/productsRedux';

import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

const ProductBox = ({
  name,
  price,
  oldPrice,
  promo,
  stars,
  isFavorite,
  toCompare,
  image,
  id,
  description,
  size,
  color,
}) => {
  const dispatch = useDispatch();
  const handleClickToCompare = (e, useSelector) => {
    e.preventDefault();
    if (!toCompare) {
      dispatch(addProductToCompare(id));
    } else if (toCompare) {
      dispatch(removeProductToCompare(id));
    }
  };
  const handleClickFavorite = e => {
    e.preventDefault();
    dispatch(toggleProductFavorite(id));
  };

  return (
    <div className={styles.root}>
      <div className={styles.photo} style={{ backgroundImage: `url(${image})` }}>
        {promo && <div className={styles.sale}>{promo}</div>}
        <div className={styles.buttons}>
          <Popup trigger={<Button variant='small'>Quick View</Button>} modal nested>
            {close => (
              <div className={styles.popup}>
                <button className={styles.close} onClick={close}>
                  &times;
                </button>
                <div className='container'>
                  <div className='row'>
                    <div className='col'>
                      <div
                        className={styles.image}
                        style={{ backgroundImage: `url('${image}')` }}
                      ></div>
                    </div>
                    <div className='col'>
                      <div className={styles.content}>
                        <h2 className={styles.title}> {name} </h2>
                        <p className={styles.description}> {description} </p>
                        <p className={styles.size}>
                          {' '}
                          <b>Size:</b> {size}{' '}
                        </p>
                        <p className={styles.color}>
                          {' '}
                          <b>Color:</b> <span> {color} </span>{' '}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </Popup>
          <Button variant='small'>
            <FontAwesomeIcon icon={faShoppingBasket}></FontAwesomeIcon> ADD TO CART
          </Button>
        </div>
      </div>
      <div className={styles.content}>
        <h5>{name}</h5>
        <div className={styles.stars}>
          {[1, 2, 3, 4, 5].map(i => (
            <a key={i} href='#'>
              {i <= stars ? (
                <FontAwesomeIcon icon={faStar}>{i} stars</FontAwesomeIcon>
              ) : (
                <FontAwesomeIcon icon={farStar}>{i} stars</FontAwesomeIcon>
              )}
            </a>
          ))}
        </div>
      </div>
      <div className={styles.line}></div>
      <div className={styles.actions}>
        <div className={styles.outlines}>
          <Button
            variant='outline'
            isFavorite={isFavorite}
            onClick={handleClickFavorite}
          >
            <FontAwesomeIcon icon={faHeart}>Favorite</FontAwesomeIcon>
          </Button>
          <Button
            variant='outline'
            toCompare={toCompare}
            onClick={handleClickToCompare}
          >
            <FontAwesomeIcon icon={faExchangeAlt}>Add to compare</FontAwesomeIcon>
          </Button>
        </div>
        <div className={styles.price}>
          <div className={styles.oldPrice}>{oldPrice}</div>
          <Button noHover variant='small'>
            $ {price}
          </Button>
        </div>
      </div>
    </div>
  );
};

ProductBox.propTypes = {
  children: PropTypes.node,
  name: PropTypes.string,
  price: PropTypes.number,
  oldPrice: PropTypes.string,
  promo: PropTypes.string,
  stars: PropTypes.number,
  isFavorite: PropTypes.bool,
  toCompare: PropTypes.bool,
  image: PropTypes.string,
  id: PropTypes.string,
  description: PropTypes.string,
  size: PropTypes.string,
  color: PropTypes.string,
};

export default ProductBox;
