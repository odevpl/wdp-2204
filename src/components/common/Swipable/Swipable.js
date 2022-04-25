import React from 'react';
import { Swipe } from 'react-swipe-component';
import PropTypes from 'prop-types';

const Swipable = ({ action, activeItem, itemsCount, children }) => {
  const swipeLeft = () => {
    if (activeItem < itemsCount) {
      action(activeItem + 1);
    }
  };

  const swipeRight = () => {
    if (activeItem - 1 >= 0) {
      action(activeItem - 1);
    }
  };

  return (
    <Swipe
      nodeName='div'
      detectTouch='true'
      detectMouse='true'
      onSwipedLeft={swipeLeft}
      onSwipedRight={swipeRight}
    >
      {children}
    </Swipe>
  );
};

Swipable.propTypes = {
  action: PropTypes.func,
  activeItem: PropTypes.number,
  itemsCount: PropTypes.number,
  children: PropTypes.node,
  detectTouch: PropTypes.bool,
};

export default Swipable;
