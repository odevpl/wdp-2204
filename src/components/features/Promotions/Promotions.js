import React from 'react';
import styles from './Promotions.module.scss';

import { useSelector } from 'react-redux';

import { getAllPromotions } from '../../../redux/promotionsRedux';

const Promotions = () => {
  const promotions = useSelector(getAllPromotions);
  const [leftPromotion, upPromotion, downPromotion] = [...promotions];

  return (
    <div className={styles.root}>
      <div className='container'>
        <div className='row'>
          <div className='col-md-6 col-sm-12'>
            <div
              className={styles.promotionLeft}
              style={{ backgroundImage: `url('${leftPromotion.image}')` }}
            >
              <div className={styles.promotionLeftContent}>
                <h3 className={styles.subtitle}> {leftPromotion.subtitle} </h3>
                <h2 className={styles.title}> {leftPromotion.title} </h2>
                <p className={styles.price}> {leftPromotion.promoPrice} </p>
              </div>
            </div>
          </div>
          <div className='col-md-6 col-sm-12'>
            <div className='row'>
              <div className='col'>
                <div className={styles.promotionUp}>
                  <div className='row'>
                    <div className='col-3'>
                      <div
                        className={styles.photo}
                        style={{ backgroundImage: `url('${upPromotion.imageOne}')` }}
                      />
                    </div>
                    <div className='col-6'>
                      <div className={styles.promotionUpContent}>
                        <h2 className={styles.title}>
                          {' '}
                          <b>{upPromotion.boldTitle}</b> {upPromotion.title}{' '}
                        </h2>
                        <p className={styles.subtitle}> {upPromotion.subtitle} </p>
                        <p className={styles.price}> {upPromotion.promoPrice} </p>
                      </div>
                    </div>
                    <div className='col-3'>
                      <div
                        className={styles.photo}
                        style={{ backgroundImage: `url('${upPromotion.imageTwo}')` }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='row'>
              <div className='col'>
                <div className={styles.promotionDown}>
                  <div className='row'>
                    <div className='col-5'>
                      <div
                        className={styles.photo}
                        style={{ backgroundImage: `url('${downPromotion.image}')` }}
                      />
                    </div>
                    <div className='col-7'>
                      <div className={styles.promotionDownContent}>
                        <h2 className={styles.title}>
                          {' '}
                          <b>{downPromotion.boldTitle}</b> {downPromotion.title}{' '}
                        </h2>
                        <p className={styles.price}>
                          {downPromotion.subtitleOne}
                          <span> {downPromotion.promoPrice} </span>
                          {downPromotion.subtitleTwo}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Promotions;
