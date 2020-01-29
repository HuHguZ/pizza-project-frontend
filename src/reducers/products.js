export default (state = [], action) => {
    const { type, payload } = action;
    if (type === 'LOAD_PRODUCT') {
        return [...state, payload];
    }
    return state;
};