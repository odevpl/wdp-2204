import React from 'react';
import styles from './CompareProduct.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBan } from '@fortawesome/free-solid-svg-icons';
import { useDispatch } from 'react-redux';
import { removeProductToCompare } from '../../../redux/productsRedux';
import PropTypes from 'prop-types';

const CompareProduct = ({ product }) => {
  const dispatch = useDispatch();
  const handleClickRemove = id => {
    dispatch(removeProductToCompare(id));
  };

  return (
    <div className={styles.Product}>
      <img src={product.image} alt={product.name} className={styles.productPhoto} />
      <div
        className={styles.closeIcon}
        onClick={() => handleClickRemove(product.id)}
      ></div>
      <h6>{product.name}</h6>
      <p className={styles.price}>Price: ${product.price}</p>
    </div>
  );
};

CompareProduct.propTypes = {
  product: PropTypes.node,
};

export default CompareProduct;
