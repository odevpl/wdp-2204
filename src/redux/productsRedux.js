/* selectors */
export const getAll = ({ products }) => products;
export const getCount = ({ products }) => products.length;

export const getNew = ({ products }) =>
  products.filter(item => item.newFurniture === true);

/* action name creator */
const createActionName = actionName => `app/products/${actionName}`;

/* action types */
const CHANGE_AMOUNT_OF_STARS = createActionName('CHANGE_AMOUNT_OF_STARS');
const TOGGLE_PRODUCT_FAVORITE = createActionName('TOGGLE_PRODUCT_FAVORITE');

/* action creators */
export const changeAmountOfStars = payload => ({
  payload,
  type: CHANGE_AMOUNT_OF_STARS,
});
export const toggleProductFavorite = payload => ({
  type: TOGGLE_PRODUCT_FAVORITE,
  payload,
});

/* reducer */
export default function reducer(statePart = [], action = {}) {
  switch (action.type) {
    case CHANGE_AMOUNT_OF_STARS:
      return statePart.map(product => {
        if (product.id == action.payload.id) {
          product.myStars = action.payload.amountOfStar;
        }
        return product;
      });
    case TOGGLE_PRODUCT_FAVORITE:
      return statePart.map(product =>
        product.id === action.payload
          ? { ...product, isFavorite: !product.isFavorite }
          : product
      );
    default:
      return statePart;
  }
}
