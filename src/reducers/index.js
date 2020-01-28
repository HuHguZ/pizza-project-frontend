const reducer = (state = [], action) => {
    const { type, payload } = action;
    if (type === 'ADD_PRODUCT_TO_CART') {
        return [...state, payload];
    }
    return state;
};

export default reducer;