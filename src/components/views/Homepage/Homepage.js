import React from 'react';
import PropTypes from 'prop-types';

import styles from './Homepage.module.scss';

import FeatureBoxes from '../../features/FeatureBoxes/FeatureBoxes';
import NewFurniture from '../../features/NewFurniture/NewFurnitureContainer';
import BrandsCarousel from '../../features/BrandsCarousel/BrandsCarousel';

const Homepage = ({ appMode }) => (
  <div className={styles.root}>
    <FeatureBoxes />
    <NewFurniture />
    <NewFurniture appMode={appMode} />
    <BrandsCarousel />
  </div>
);

Homepage.propTypes = {
  appMode: PropTypes.string,
};

export default Homepage;
