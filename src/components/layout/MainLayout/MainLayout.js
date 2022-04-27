import React, { useEffect, useCallback } from 'react';
import PropTypes from 'prop-types';
import { clearToCompare } from '../../../redux/productsRedux';
import { useDispatch } from 'react-redux';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

const MainLayout = ({ children, setAppMode }) => {
  const dispatch = useDispatch();
  useEffect(() => dispatch(clearToCompare()), [dispatch]);
  const handleResize = useCallback(() => {
    let width = window.innerWidth;
    if (width < 576) {
      setAppMode('mobile');
    } else if (width >= 576 && width < 768) {
      setAppMode('tablet2');
    } else if (width >= 768 && width < 992) {
      setAppMode('tablet3');
    } else if (width >= 992) {
      setAppMode('desktop');
    }
  });
  handleResize();

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [handleResize]);

  return (
    <div>
      <Header />
      {children}
      <Footer />
    </div>
  );
};

MainLayout.propTypes = {
  setAppMode: PropTypes.string,
  children: PropTypes.node,
};

export default MainLayout;
