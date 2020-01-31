export default (state = [], action) => {
    const { type, payload } = action;
    if (type === 'ADD_PRODUCT_TO_CART') {
        return [...state, payload];
    } else if (type === 'DELETE_PRODUCT_FROM_CART') {
        return state.filter(product => product.id !== payload.id);
    } else if (type === 'REDUCE_PRODUCT') {
        const pos = state.findIndex(product => product.id === payload.id);
        state.splice(pos, 1);
        return state.slice();
    } else if (type === 'CLEAR_CART') {
        return [];
    } else if (type === 'LOAD_SAVED_CART') {
        return [...state, ...payload];
    }
    return state;
};