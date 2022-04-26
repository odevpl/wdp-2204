/* selectors */
export const getAllPromotions = state => state.promotions;

/* actions creators */
const promotionsReducer = (statePart = [], action) => {
  switch (action.type) {
    default:
      return statePart;
  }
};

export default promotionsReducer;
