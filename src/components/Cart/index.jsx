import React from 'react'
import cart from './cart.png'
import { connect } from 'react-redux'
import './style.css'

class Cart extends React.PureComponent {
    state = {
        showOwerlay: false,
        showEmptyCartAlert: false
    }

    changeOverlayState() {
        this.setState({
            showOwerlay: !this.state.showOwerlay && this.props.cart.length
        });
    }

    async orderAccept() {
        const deliveryAdress = this.orderDeliveryAdress.value;
        const phone = this.clientPhone.value;
        if (/^\+?7-?\d{3}-?\d{3}-?\d{2}-?\d{2}$/.test(phone)) {
            this.changeOverlayState();
            const saveOrderRequest = await fetch(`${process.env.REACT_APP_SERVER_URL}/api/sendOrder`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    phone,
                    deliveryAdress,
                    products: JSON.parse(localStorage.cart)
                })
            });
            const { success } = await saveOrderRequest.json();
            if (success) {
                this.props.cleartCart();
                alert('Спасибо за заказ! В течение 5 минут на указанный вами номер позвонит наш менеджер и уточнит детали доставки.');
            } else {
                alert('Что-то пошло не так! Повторите попытку позже.');
            }
        } else {
            alert('Некорректный номер телефона!');
        }
    }

    render() {
        let overlayBlock;
        if (this.state.showOwerlay && this.props.cart.length) {
            const groups = new Map();
            for (const product of this.props.cart) {
                if (!groups.has(product)) {
                    groups.set(product, 1);
                } else {
                    groups.set(product, groups.get(product) + 1);
                }
            }
            overlayBlock = 
            <div>
                <div className="cart-overlay" onClick={this.changeOverlayState.bind(this)}></div>
                <div className="order">
                    <div className="order-checkout">
                        <div>Оформление заказа</div>
                        <button className="order-delete-button"
                        onClick={this.changeOverlayState.bind(this)}>
                            <span className="order-close-element"></span>
                        </button>
                    </div>
                    <div className="order-products-wrapper">
                        {[...groups].map(([product, count], index) => 
                            <div key={index} className="order-block">
                                <img src={`${process.env.REACT_APP_SERVER_URL}/img/${product.img_name}`} alt={product.img_alt} className="order-product-img"/>
                                <div className="order-product-description">
                                    <div className="order-header">
                                        <div>{product.img_alt}</div>
                                        <button className="order-delete-button"
                                        onClick={this.props.deleteProductFromCart.bind(this, product)}>
                                            <span className="order-close-element"></span>
                                        </button>
                                    </div>
                                    <div className="order-footer">
                                        <div className="product-quantity">
                                            <div className="change-quantity"
                                            onClick={this.props.reduceProduct.bind(this, product)}>-</div>
                                            <div>{count}</div>
                                            <div className="change-quantity"
                                            onClick={this.props.addGoodToCart.bind(this, product)}>+</div>
                                        </div>
                                        <div className="product-price">{(product.price * count).toFixed(2)}<sup>$</sup></div>
                                    </div>
                                </div>
                            </div>    
                        )}
                    </div>
                    <div style={{
                        display: 'flex',
                        justifyContent: 'center'
                    }}>
                        <button className="cart-clear"
                        onClick={this.props.cleartCart.bind(this)}>Очистить корзину</button>
                    </div>
                    <div className="order-contacts" style={{
                        marginBottom: '10px'
                    }}>
                        <div>Адрес доставки:</div> <input maxLength="255" type="text" className="order-input" ref={
                            input => this.orderDeliveryAdress = input
                        }/>
                    </div>
                    <div className="order-contacts">
                        Номер телефона: <input type="text" placeholder="+7xxx-xxx-xx-xx" className="order-input" ref={
                            input => this.clientPhone = input
                        }/>
                    </div>
                    <div className="order-confrim">
                        Итого: <div className="product-price">{this.props.totalPrice}<sup>$</sup></div>
                    </div>
                    <div style={{
                        display: 'flex',
                        justifyContent: 'center'
                    }}>
                        <button className="order-accept" onClick={this.orderAccept.bind(this)}>Подвердить заказ</button>
                    </div>
                </div>
            </div>
        }
        return (
            <div>
                {overlayBlock}
                <div className="cart" onClick={this.changeOverlayState.bind(this)}>
                <img src={cart} alt=""/>
                <div className="cart-info">
                    <div className="cart-cost">{this.props.totalPrice}<sup>$</sup></div>
                    <div className="cart-goods-count">{this.props.cart.length} шт.</div>
                </div>
                </div>
            </div>
        );
    }
}

export default connect(
    state => ({
        cart: state.cart.sort((pa, pb) => pa.id - pb.id), //сортировка для исправления бага с хаотичным перемещением пицц в корзине при изменении их количества
        totalPrice: state.cart.reduce((sum, product) => sum + product.price, 0).toFixed(2)
    }),
    dispatch => ({
        addGoodToCart(payload) {
            dispatch({
                type: 'ADD_PRODUCT_TO_CART',
                payload
            });
        },
        reduceProduct(payload) {
            dispatch({
                type: 'REDUCE_PRODUCT',
                payload
            });
        },
        deleteProductFromCart(payload) {
            dispatch({
                type: 'DELETE_PRODUCT_FROM_CART',
                payload
            });
        },
        cleartCart() {
            dispatch({
                type: 'CLEAR_CART'
            });
        }
    })
)(Cart);