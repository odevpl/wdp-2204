import React from 'react';
import PropTypes from 'prop-types';
import styles from './Promotion.module.scss';
import Button from '../../common/Button/Button';
import { useSelector } from 'react-redux';
import { getAllPromotion } from '../../../redux/promotionRedux';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faEye,
  faStar,
  faExchangeAlt,
  faShoppingBasket,
  faAngleLeft,
  faAngleRight,
} from '@fortawesome/free-solid-svg-icons';
import { faStar as farStar, faHeart } from '@fortawesome/free-regular-svg-icons';

const Promotion = ({ isFavorite, toCompare }) => {
  const promotion = useSelector(state => getAllPromotion(state));
  const [leftSite, rightSite] = [...promotion];

  return (
    <div className={styles.root}>
      <div className='container'>
        <div className='row'>
          <div className='col-4'>
            <div
              className={styles.leftSite}
              style={{
                backgroundImage: `url('${leftSite.image}')`,
              }}
            >
              <div className={styles.slider}>
                <h5>HOT DEALS</h5>
                <div className={'col-auto ' + styles.dots}>
                  <ul className={styles.slick_dots}>
                    <li></li>
                    <li></li>
                    <li></li>
                  </ul>
                </div>
              </div>
              <div className={styles.buttons}>
                <Button variant='main'>
                  <FontAwesomeIcon icon={faShoppingBasket}></FontAwesomeIcon> ADD TO
                  CART
                </Button>
              </div>
            </div>
            <div className={styles.content}>
              <div className={'col-auto ' + styles.dots}>
                <ul className={styles.slick_dots}>
                  <li>
                    <p>25 DAYS</p>
                  </li>
                  <li>
                    <p>10 &nbsp;HRS</p>
                  </li>
                  <li>
                    <p>45 MINS</p>
                  </li>
                  <li>
                    <p>30 SECS</p>
                  </li>
                </ul>
              </div>
              <h5>{leftSite.name}</h5>
              <div className={styles.stars}>
                <FontAwesomeIcon icon={faStar}>stars</FontAwesomeIcon>
                <FontAwesomeIcon icon={faStar}>stars</FontAwesomeIcon>
                <FontAwesomeIcon icon={farStar}>stars</FontAwesomeIcon>
                <FontAwesomeIcon icon={farStar}>stars</FontAwesomeIcon>
                <FontAwesomeIcon icon={farStar}>stars</FontAwesomeIcon>
              </div>
            </div>
            <div className={styles.line}></div>
            <div className={styles.actions}>
              <div className={styles.outlines}>
                <Button variant='outline' isFavorite={isFavorite}>
                  <FontAwesomeIcon icon={faEye}>See more</FontAwesomeIcon>
                </Button>
                <Button variant='outline' isFavorite={isFavorite}>
                  <FontAwesomeIcon icon={faHeart}>Favorite</FontAwesomeIcon>
                </Button>
                <Button variant='outline' toCompare={toCompare}>
                  <FontAwesomeIcon icon={faExchangeAlt}>Add to compare</FontAwesomeIcon>
                </Button>
              </div>
              <div className={styles.price}>
                <div className={styles.oldPrice}>{leftSite.oldPrice}</div>
                <Button variant='small'> $ {leftSite.price}</Button>
              </div>
            </div>
          </div>
          <div className='col-8'>
            <div
              className={styles.rightSite}
              style={{
                backgroundImage: `url('${rightSite.image}')`,
              }}
            >
              <div className={styles.rightContent}>
                <h2 className={styles.name}> {rightSite.name}</h2>
                <h2 className={styles.name2}>{rightSite.name2}</h2>
                <h4 className={styles.description}> {rightSite.description} </h4>
                <Button variant='main' className={styles.button_shopNow}>
                  shop now
                </Button>
              </div>
              <div className={styles.button_right_left}>
                <button className='col-6'>
                  <FontAwesomeIcon icon={faAngleLeft} />
                </button>
                <button className='col-6'>
                  <FontAwesomeIcon icon={faAngleRight} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

Promotion.propTypes = {
  children: PropTypes.node,
  name: PropTypes.string,
  name2: PropTypes.string,
  price: PropTypes.number,
  oldPrice: PropTypes.string,
  description: PropTypes.string,
  promo: PropTypes.string,
  stars: PropTypes.number,
  isFavorite: PropTypes.bool,
  toCompare: PropTypes.bool,
  image: PropTypes.string,
};

export default Promotion;
