import React from 'react';
import PropTypes from 'prop-types';

import styles from './ProductBox.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExchangeAlt, faShoppingBasket } from '@fortawesome/free-solid-svg-icons';
import { faStar as faHeart } from '@fortawesome/free-regular-svg-icons';
import Button from '../Button/Button';
import Stars from '../Stars/Stars';

const ProductBox = ({
  name,
  price,
  oldPrice,
  promo,
  stars,
  myStars,
  isFavorite,
  toCompare,
  image,
  id,
}) => (
  <div className={styles.root}>
    <div className={styles.photo} style={{ backgroundImage: `url(${image})` }}>
      {promo && <div className={styles.sale}>{promo}</div>}
      <div className={styles.buttons}>
        <Button variant='small'>Quick View</Button>
        <Button variant='small'>
          <FontAwesomeIcon icon={faShoppingBasket}></FontAwesomeIcon> ADD TO CART
        </Button>
      </div>
    </div>
    <Stars name={name} stars={stars} myStars={myStars} id={id}></Stars>
    <div className={styles.line}></div>
    <div className={styles.actions}>
      <div className={styles.outlines}>
        <Button variant='outline' isFavorite={isFavorite}>
          <FontAwesomeIcon icon={faHeart}>Favorite</FontAwesomeIcon>
        </Button>
        <Button variant='outline' toCompare={toCompare}>
          <FontAwesomeIcon icon={faExchangeAlt}>Add to compare</FontAwesomeIcon>
        </Button>
      </div>
      <div className={styles.price}>
        <div className={styles.oldPrice}>{oldPrice}</div>
        <Button variant='small'>$ {price}</Button>
      </div>
    </div>
  </div>
);

ProductBox.propTypes = {
  children: PropTypes.node,
  name: PropTypes.string,
  price: PropTypes.number,
  oldPrice: PropTypes.string,
  promo: PropTypes.string,
  stars: PropTypes.number,
  myStars: PropTypes.number,
  isFavorite: PropTypes.bool,
  toCompare: PropTypes.bool,
  image: PropTypes.string,
  id: PropTypes.number,
};

export default ProductBox;
