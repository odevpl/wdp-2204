/* selectors */
export const getAll = ({ products }) => products;
export const getCount = ({ products }) => products.length;
export const getToCompare = ({ products }) =>
  products.filter(product => {
    return product.toCompare === true;
  });

export const getNew = ({ products }) =>
  products.filter(item => item.newFurniture === true);

/* actions */
const createActionName = actionName => `app/products/${actionName}`;
const ADD_PRODUCT_TO_COMPARE = createActionName('ADD_PRODUCT_FAVORITE');
const REMOVE_PRODUCT_TO_COMPARE = createActionName('REMOVE_PRODUCT_FAVORITE');
const CLEAR_TO_COMPARE = createActionName('CLEAR_TO_COMPARE');

/* action creator */
export const addProductToCompare = payload => ({
  type: ADD_PRODUCT_TO_COMPARE,
  payload,
});
export const removeProductToCompare = payload => ({
  type: REMOVE_PRODUCT_TO_COMPARE,
  payload,
});
export const clearToCompare = payload => ({
  type: CLEAR_TO_COMPARE,
  payload,
});

/* reducer */
export default function reducer(statePart = [], action = {}) {
  switch (action.type) {
    case ADD_PRODUCT_TO_COMPARE: {
      const productsToCompare = statePart.filter(product => product.toCompare === true);
      if (productsToCompare.length < 4) {
        return statePart.map(product =>
          product.id === action.payload ? { ...product, toCompare: true } : product
        );
      } else {
        return statePart;
      }
    }
    case REMOVE_PRODUCT_TO_COMPARE:
      return statePart.map(product =>
        product.id === action.payload ? { ...product, toCompare: false } : product
      );
    case CLEAR_TO_COMPARE:
      return statePart.map(product => {
        return { ...product, toCompare: false };
      });
    default:
      return statePart;
  }
}
