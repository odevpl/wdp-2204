import React from 'react';
import PropTypes from 'prop-types';

import styles from './Homepage.module.scss';

import FeatureBoxes from '../../features/FeatureBoxes/FeatureBoxes';
import NewFurniture from '../../features/NewFurniture/NewFurnitureContainer';
import Promotion from '../../features/Promotion/Promotion';
import Promotions from '../../features/Promotions/Promotions';

const Homepage = ({ appMode }) => (
  <div className={styles.root}>
    <Promotion />
    <FeatureBoxes />
    <Promotions />
    <NewFurniture />
    <NewFurniture appMode={appMode} />
  </div>
);

Homepage.propTypes = {
  appMode: PropTypes.string,
};

export default Homepage;
