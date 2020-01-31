export default (state = false, action) => {
  const { type } = action;
  if (type === 'LOAD_ALL_PRODUCTS') {
      return true;
  }
  return state;
};