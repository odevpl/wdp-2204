import Button from '../../common/Button/Button';
import React from 'react';
import { Link } from 'react-router-dom';
// import PropTypes from 'prop-types';
import styles from './Cart.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import {
  faFacebook,
  faInstagram,
  faTwitter,
  faYoutube,
} from '@fortawesome/free-brands-svg-icons';

const Cart = () => (
  <div className={styles.root}>
    <div className={`container ${styles.orderWrapper}`}>
      <div className='row'>
        <div className={`col ${styles.welcomeTitle}`}>
          <h1>
            Witaj, Patryk! <br />
            dziękujemy za złożenie zamówienia!
          </h1>
          <p>
            Trwa przetwarzanie zamówienia. Wyślemy Ci e-mail po wysłaniu Twoich
            przedmiotów. Informacje o zamówieniu znajdują się poniżej.
          </p>
        </div>
      </div>
      <div className={`row ${styles.orderNumber}`}>
        <div className='col-6'>
          <h2>Twoje zamówienie</h2>
        </div>
        <div className='col-6 text-right'>
          <p>
            Numer zamówienia: <span>1081693169259286</span>
          </p>
        </div>
      </div>
      <div className={`row ${styles.statusWrapper}`}>
        <div className={'col-6 text-left'}>
          <p>
            <b>
              Status zamówienia: <span>Przetwarzanie</span>
            </b>
          </p>
          <p>
            <b>Szacunkowy termin dostawy:</b> 20 gru 2021
          </p>
        </div>
        <div className='col-6 text-left'>
          <p>
            <b>Informacje dotyczące wysyłki</b> <br />
            Patryk Tokarza <br />
            Skłodowskiej 94 m.23 <br />
            Piekary Śląskie, ŚLĄSKIE 41-949 <br />
            POL <br />
            Tel: +4850943258
          </p>
        </div>
        <div className='col text-center mt-2'>
          <p>
            <b>
              Twoja metoda płatności nie zostanie obciążona, dopóki przedmioty nie będą
              gotowe do wysłania.
            </b>
          </p>
        </div>
      </div>
      <div className={`row ${styles.itemsOrderTab}`}>
        <div className='col-6 text-left'>
          <p>
            <b>Przedmiot</b>
          </p>
        </div>
        <div className='col-1'>
          <p>
            <b>SZT.</b>
          </p>
        </div>
        <div className='col-5 text-right'>
          <p>
            <b>CENA</b>
          </p>
        </div>
      </div>
      <div className={`row ${styles.itemsOrderDetailsTab}`}>
        <div className={`col-2 ${styles.itemPhoto}`}>
          <img
            src='https://images.pexels.com/photos/279746/pexels-photo-279746.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
            alt='Bed'
          />
        </div>
        <div className={`col-4 text-center ${styles.itemName}`}>
          <p>
            <b>Aenean Ru Bristique 1</b>
          </p>
        </div>
        <div className='col-1 text-center'>
          <p>1</p>
        </div>
        <div className='col-5 text-right'>
          <p>369,00$</p>
        </div>
      </div>
      <div className={`row ${styles.priceDetails}`}>
        <div className='col-6 text-left'>
          <p>Podsumowanie:</p>
          <p>Wysyłka:</p>
          <p>Z uwzględnieniem podatku VAT 23%:</p>
          <p>
            <b>Łącznie:</b>
          </p>
        </div>
        <div className='col-6 text-right'>
          <p>369,00$</p>
          <p>Free</p>
          <p>84,87$</p>
          <p>
            <b>369,00$</b>
          </p>
        </div>
      </div>
      <div className={`row ${styles.paymentInf}`}>
        <div className='col-6 text-left'>
          <p>
            <b>Informacje dotyczące płatności</b>
          </p>
          <p>visa......0423</p>
        </div>
        <div className='col-6 text-left'>
          <p>
            <b>Informacje rozliczeniowe</b>
          </p>
          <p>
            Patryk Tokarz <br />
            Skłodowskiej 94 m.23 <br />
            Piekary Śląskie, ŚLĄSKIE 41-949 <br />
            POL
          </p>
        </div>
      </div>
      <div className={styles.buttons}>
        <Button className={styles.btn} variant='small'>
          <Link className={styles.link} to='/'>
            POTWIERDŹ ZAMÓWIENIE
          </Link>
        </Button>
        <Button className={styles.btn} variant='small'>
          SKONTAKTUJ SIĘ Z NAMI
        </Button>
      </div>
      <div className={`row ${styles.socialMedia}`}>
        <div className='col text-center'>
          <ul>
            <li>
              <a href='#test'>
                <FontAwesomeIcon className={styles.icon} icon={faFacebook} />
              </a>
            </li>
            <li>
              <a href='#test'>
                <FontAwesomeIcon className={styles.icon} icon={faInstagram} />
              </a>
            </li>
            <li>
              <a href='#test'>
                <FontAwesomeIcon className={styles.icon} icon={faTwitter} />
              </a>
            </li>
            <li>
              <a href='#test'>
                <FontAwesomeIcon className={styles.icon} icon={faYoutube} />
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className={`row ${styles.companyDetails}`}>
        <div className={`col-3 ${styles.logo}`}>
          <img src='images\logo.png' alt='Bazar' />
        </div>
        <div className={`col-9 ${styles.companyInf}`}>
          <ul>
            <li>Contact Us</li>
            <li>Zasady ochrony prywatności</li>
            <li>Regulamin</li>
          </ul>
        </div>
      </div>
      <div className='row'>
        <div className='col-5 text-left'>
          <p>© 2021 Facebook Technologies, LLC</p>
        </div>
        <div className={`col-7 ${styles.companyAddress}`}>
          <ul>
            <li>
              <span>1 Hacker Way</span>
            </li>
            <li>
              <span>Menio Park, CA 94025</span>
            </li>
            <li>
              <span>Stany Zjednoczone</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
);
// ProductPage.propTypes = {};

export default Cart;
