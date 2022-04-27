import React from 'react';
import PropTypes from 'prop-types';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

import ProductSearch from '../../features/ProductSearch/ProductSearch';

import styles from './MenuBar.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const MenuBar = ({ children }) => {
  const [isNavExpanded, setIsNavExpanded] = useState(true);

  return (
    <div className={styles.root}>
      <div className='container'>
        <div className='row align-items-center'>
          <div className={'col ' + styles.search}>
            <ProductSearch />
          </div>
          <button
            className={'col ' + styles.hamburger}
            onClick={() => {
              setIsNavExpanded(!isNavExpanded);
            }}
          >
            <FontAwesomeIcon icon={faBars} />
          </button>
          <div className={isNavExpanded ? 'col ' + styles.menu : styles.menuExpanded}>
            <ul>
              <li>
                <a href='#test' className={styles.active}>
                  Home
                </a>
              </li>
              <li>
                <a href='#test'>Furniture</a>
              </li>
              <li>
                <a href='#test'>Chair</a>
              </li>
              <li>
                <a href='#test'>Table</a>
              </li>
              <li>
                <a href='#test'>Sofa</a>
              </li>
              <li>
                <a href='#test'>Bedroom</a>
              </li>
              <li>
                <a href='#test'>Blog</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

MenuBar.propTypes = {
  children: PropTypes.node,
};

export default MenuBar;
