/* selectors */
export const getAll = ({ products }) => products;
export const getCount = ({ products }) => products.length;

export const getNew = ({ products }) =>
  products.filter(item => item.newFurniture === true);

/* action name creator */
const reducerName = 'products';
const createActionName = name => `app/${reducerName}/${name}`;

/* action types */
const CHANGE_AMOUNT_OF_STARS = createActionName('CHANGE_AMOUNT_OF_STARS');

/* action creators */
export const changeAmountOfStars = payload => ({
  payload,
  type: CHANGE_AMOUNT_OF_STARS,
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
    default:
      return statePart;
  }
}
