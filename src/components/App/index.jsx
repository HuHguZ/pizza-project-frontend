import React from "react";
import "./App.css";
import Header from "../Header";
import Footer from "../Footer";
import Main from "../Main";
import { createStore } from "redux";
import { Provider } from 'react-redux'
import reducer from '../../reducers'

const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__());

let loadAllCall = false;

store.subscribe(() => {
    const { cart, loadAllProducts } = store.getState();
    if (!loadAllProducts) {
        return;
    } else if (!loadAllCall) {
        loadAllCall = true;
        return;
    }
    const savedCart = {};
    for (let i = 0; i < cart.length; i++) {
        if (savedCart[cart[i].id]) {
            savedCart[cart[i].id] += 1;
        } else {
            savedCart[cart[i].id] = 1;
        }
    }
    localStorage.cart = JSON.stringify(savedCart);
});

function App() {
    return (
        <Provider store={store}>
            <div className="app">
                <Header />
                <Main />
                <Footer />
            </div>
        </Provider>
    );
}

export default App;
