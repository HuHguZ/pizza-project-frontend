import React from 'react'
import { connect } from 'react-redux'
import Product from '../Product'
import './style.css'

class Main extends React.PureComponent {
    async componentDidMount() {
        let id = 1;
        while (true) {
            const respone = await fetch(`${process.env.REACT_APP_SERVER_URL}/api/getProduct/${id}`);
            const data = await respone.json();
            if (!data.length) {
                break;
            }
            this.props.loadProduct(data[0]);
            id++;
        }
        this.props.loadAllProducts();
        if (localStorage.cart) {
            const localStorageCart = JSON.parse(localStorage.cart);
            const loadedCart = []; //копируем ссылки из products
            for (const product of this.props.products) {
                if (localStorageCart[product.id]) {
                    for (let i = 0; i < localStorageCart[product.id]; i++) {
                        loadedCart.push(product);
                    }
                }
            }
            this.props.loadSavedCart(loadedCart);
        }
    }
    render() {
        return (
            <main className="content">
                <Product type="Пиццы"/>
            </main>
        );
    }
}

export default connect(state => ({
    products: state.products
}), dispatch => ({
    loadProduct(payload) {
        dispatch({
            type: 'LOAD_PRODUCT',
            payload
        });
    },
    loadSavedCart(payload) {
        dispatch({
            type: 'LOAD_SAVED_CART',
            payload
        });
    },
    loadAllProducts() {
        dispatch({
            type: 'LOAD_ALL_PRODUCTS'
        });
    }
}))(Main)