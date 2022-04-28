import React from 'react';
import PropTypes from 'prop-types';
import styles from './CompareBar.module.scss';
import { useSelector } from 'react-redux';
import { getToCompare } from '../../../redux/productsRedux';
import CompareProduct from '../CompareProduct/CompareProduct';
import Button from '../../common/Button/Button';

const CompareBar = ({ state }) => {
  const productsToCompare = useSelector(state => getToCompare(state));
  return (
    <div className={`${styles.CompareBar} ${styles[state]}`}>
      <div className='container'>
        <div className={styles.wrapper}>
          {productsToCompare.map(product => {
            return <CompareProduct product={product} key={product.id} />;
          })}
          <Button variant='outline'>Compare</Button>
        </div>
      </div>
    </div>
  );
};

CompareBar.propTypes = {
  state: PropTypes.string,
};

export default CompareBar;
