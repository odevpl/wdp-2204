import React from 'react';
import PropTypes from 'prop-types';
import styles from './Homepage.module.scss';

import FeatureBoxes from '../../features/FeatureBoxes/FeatureBoxes';
import NewFurniture from '../../features/NewFurniture/NewFurnitureContainer';
import CompareBar from '../../features/CompareBar/CompareBar';
import { useSelector } from 'react-redux';
import { getToCompare } from '../../../redux/productsRedux';
import Promotion from '../../features/Promotion/Promotion';
import Promotions from '../../features/Promotions/Promotions';
import BrandsCarousel from '../../features/BrandsCarousel/BrandsCarousel';
import Feedback from '../../features/Feedback/Feedback';
import Gallery from '../../features/Gallery/Gallery';
import ChatBox from '../../features/ChatBox/ChatBox';

const Homepage = ({ appMode }) => {
  const productsToCompare = useSelector(state => getToCompare(state));
  return (
    <div className={styles.root}>
      <Promotion />
      <FeatureBoxes />
      <Promotions />
      <NewFurniture appMode={appMode} />
      {productsToCompare.length !== 0 ? (
        <CompareBar state='opened' />
      ) : (
        <CompareBar state='closed' />
      )}
      <Gallery />
      <BrandsCarousel />
      <Feedback />
      <ChatBox />
    </div>
  );
};

Homepage.propTypes = {
  appMode: PropTypes.string,
};

export default Homepage;
