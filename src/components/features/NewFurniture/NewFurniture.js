import React from 'react';
import PropTypes from 'prop-types';

import styles from './NewFurniture.module.scss';
import ProductBox from '../../common/ProductBox/ProductBox';
import Swipable from '../../common/Swipable/Swipable';

class NewFurniture extends React.Component {
  state = {
    activePage: 0,
    activeCategory: 'bed',
    fade: 'fadeIn',
  };

  handlePageChange(newPage) {
    this.setState({ fade: 'fadeOut' });
    setTimeout(() => {
      this.setState({ activePage: newPage });
      this.setState({ fade: 'fadeIn' });
    }, 1000);
  }

  handleCategoryChange(newCategory) {
    this.setState({ fade: 'fadeOut' });
    setTimeout(() => {
      this.setState({ activeCategory: newCategory });
      this.setState({ fade: 'fadeIn' });
    }, 1000);
  }

  render() {
    let rowLength = 4;
    const { categories, products, appMode } = this.props;
    const { activeCategory, activePage, fade } = this.state;

    switch (appMode) {
      case 'mobile':
        rowLength = 1;
        break;
      case 'tablet2':
        rowLength = 2;
        break;
      case 'tablet3':
        rowLength = 3;
        break;
      case 'desktop':
        rowLength = 4;
        break;
      default:
        break;
    }

    const categoryProducts = products.filter(item => item.category === activeCategory);
    const pagesCount = Math.ceil(categoryProducts.length / rowLength);

    const dots = [];
    for (let i = 0; i < pagesCount; i++) {
      dots.push(
        <li key={'NewFurniture dot' + i}>
          <a
            onClick={() => this.handlePageChange(i)}
            className={i === activePage && styles.active}
          >
            page {i}
          </a>
        </li>
      );
    }

    return (
      <Swipable
        itemsCount={pagesCount}
        activeItem={activePage}
        action={this.handlePageChange.bind(this)}
      >
        <div className={styles.root}>
          <div className='container'>
            <div className={styles.panelBar}>
              <div className='row no-gutters align-items-end'>
                <div className={'col-auto ' + styles.heading}>
                  <h3>New furniture</h3>
                </div>
                <div className={'col ' + styles.menu}>
                  <ul>
                    {categories.map(item => (
                      <li key={item.id}>
                        <a
                          className={item.id === activeCategory && styles.active}
                          onClick={() => this.handleCategoryChange(item.id)}
                        >
                          {item.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className={'col-auto ' + styles.dots}>
                  <ul>{dots}</ul>
                </div>
              </div>
            </div>
          </div>
          <div className={'row ' + fade}>
            {categoryProducts
              .slice(activePage * rowLength, (activePage + 1) * rowLength)
              .map(item => (
                <div key={item.id} className='col-lg-3 col-md-4 col-sm-6 col-12'>
                  <ProductBox {...item} />
                </div>
              ))}
          </div>
        </div>
      </Swipable>
    );
  }
}

NewFurniture.propTypes = {
  appMode: PropTypes.string,
  children: PropTypes.node,
  categories: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
    })
  ),
  products: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
      category: PropTypes.string,
      price: PropTypes.number,
      stars: PropTypes.number,
      promo: PropTypes.string,
      newFurniture: PropTypes.bool,
    })
  ),
};

NewFurniture.defaultProps = {
  categories: [],
  products: [],
};

export default NewFurniture;
