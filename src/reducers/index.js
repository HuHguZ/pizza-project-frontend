import { combineReducers } from 'redux'
import cart from './cart'
import products from './products'
import loadAllProducts from './loadAllProducts'

export default combineReducers({
    cart,
    products,
    loadAllProducts
});