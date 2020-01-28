import React from "react";
import "./App.css";
import Header from "../Header";
import Footer from "../Footer";
import Main from "../Main";
import { createStore } from "redux";
import { Provider } from 'react-redux'
import reducer from '../../reducers'

const store = createStore(reducer);

store.subscribe(() => {
    //сохранение текущего стора в localStorage или еще куда-то
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
