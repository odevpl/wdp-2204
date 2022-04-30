import React from 'react';
// import PropTypes from 'prop-types';
import styles from './Cart.module.scss';

const Cart = () => (
  <div className={styles.root}>
    <div className='container'>
      <div className='row'>
        <div className={`col ${styles.welcomeTitle}`}>
          <h1>
            Witaj, Patryk! <br />
            dziękujemy za złożenie zamówienia!
          </h1>
          <p className={styles.welcomeText}>
            Trwa przetwarzanie zamówienia. Wyślemy Ci e-mail po wysłaniu Twoich
            przedmiotów. Informacje o zamówieniu znajdują się poniżej.
          </p>
        </div>
        <div className={styles.orderWrapper}></div>
      </div>
    </div>
    <h1>stories</h1>
  </div>
);
// ProductPage.propTypes = {};

export default Cart;
