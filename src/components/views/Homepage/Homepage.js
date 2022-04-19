import React from 'react';
// import PropTypes from 'prop-types';

import styles from './Homepage.module.scss';

import FeatureBoxes from '../../features/FeatureBoxes/FeatureBoxes';
import NewFurniture from '../../features/NewFurniture/NewFurnitureContainer';
import CompareBar from '../../features/CompareBar/CompareBar';
import { useSelector } from 'react-redux';
import { getToCompare } from '../../../redux/productsRedux';

const Homepage = () => {
  const productsToCompare = useSelector(state => getToCompare(state));
  return (
    <div className={styles.root}>
      <FeatureBoxes />
      <NewFurniture />
      {productsToCompare.length !== 0 ? (
        <CompareBar state='opened' />
      ) : (
        <CompareBar state='closed' />
      )}
    </div>
  );
};

// Homepage.propTypes = {};

export default Homepage;
