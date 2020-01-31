import React from 'react'
import { connect } from 'react-redux'
import './style.css'

class Product extends React.PureComponent {
    render() {
        return (
            <div>
                <div className="product-type">{this.props.type}</div>
                <div className="product-list">
                {
                    this.props.products.map(product =>
                        <div key={product.id}>
                            <div className="product-block">
                                <div className="product-image">
                                    <img src={`${process.env.REACT_APP_SERVER_URL}/img/${product.img_name}`} alt={product.img_alt}/>
                                </div>
                                <div className="product-name">{product.name}</div>
                                <div className="product-description">{product.description.length > 250 ? `${product.description.slice(0, 250)}...` : product.description}</div>
                                <div className="product-order">
                                    <div className="product-price">{product.price.toFixed(2)}<sup>$</sup></div>
                                    <button className="product-add-cart" onClick={this.props.addGoodToCart.bind(this, product)}>Добавить в корзину</button>
                                </div>
                            </div>
                        </div>
                    )
                }
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    products: state.products
});

export default connect(
    mapStateToProps,
    dispatch => ({
        addGoodToCart(payload) {
            alert(`${payload.name} успешно добавлена в корзину!`);
            dispatch({
                type: 'ADD_PRODUCT_TO_CART',
                payload
            });
        }
    })
)(Product)