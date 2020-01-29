import React from 'react'
import cart from './cart.png'
import { connect } from 'react-redux'

class Cart extends React.PureComponent {
    render() {
        return (
            <div className="app-cart">
                <img src={cart}/>
                <div className="cart-info">
                    <div className="cart-cost">{this.props.totalPrice}<sup>$</sup></div>
                    <div className="cart-goods-count">{this.props.cart.length} шт.</div>
                </div>
            </div>
        );
    }
}

export default connect(
    state => ({
        cart: state.cart,
        totalPrice: state.cart.reduce((sum, product) => sum + product.price, 0).toFixed(2)
    })
)(Cart);