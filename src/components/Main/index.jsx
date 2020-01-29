import React from 'react'
import { connect } from 'react-redux'
import Product from '../Product'

class Main extends React.PureComponent {
    async componentDidMount() {
        let id = 1;
        while (true) {
            const respone = await fetch(`/api/getProduct/${id}`);
            const data = await respone.json();
            if (!data.length) {
                return;
            }
            this.props.loadProduct(data[0]);
            id++;
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

export default connect(null, dispatch => ({
    loadProduct(payload) {
        dispatch({
            type: 'LOAD_PRODUCT',
            payload
        });
    }
}))(Main)