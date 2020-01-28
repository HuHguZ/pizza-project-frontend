import React from 'react'
import cart from './cart.png'

export default class Cart extends React.PureComponent {
    render() {
        return (
            <div className="app-cart">
                <img src={cart}/>
                <div className="cart-info">
                    <div className="cart-cost">0 $</div>
                    <div className="cart-goods-count">0 шт.</div>
                </div>
            </div>
        );
    }
}