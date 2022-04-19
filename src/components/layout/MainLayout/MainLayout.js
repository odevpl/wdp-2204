import React from 'react';
import PropTypes from 'prop-types';
import { clearToCompare } from '../../../redux/productsRedux';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

const MainLayout = ({ children }) => {
  const dispatch = useDispatch();
  useEffect(() => dispatch(clearToCompare()), [dispatch]);

  return (
    <div>
      <Header />
      {children}
      <Footer />
    </div>
  );
};

MainLayout.propTypes = {
  children: PropTypes.node,
};

export default MainLayout;
