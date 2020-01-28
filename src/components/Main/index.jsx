import React from 'react'
import pizza1 from './pizza1.jpg'

class Main extends React.PureComponent {
    render() {
        return (
            <main className="content">
                <div className="product-type">Пиццы</div>
                <div className="product-list">
                    {
                        Array(100).fill(
                            <div className="product-block">
                                <div className="product-image">
                                    <img src={pizza1} />
                                </div>
                                <div className="product-name">Пицца 4 Синьора</div>
                                <div className="product-description">
                                Тесто, соус Наполи (томаты консервированные, лук репчатый, специи, масло оливковое, масло растительное, базилик свежий), колбаса Пепперони, ветчина, бекон, охотничьи колбаски, сыр Моцарелла, орегано
                                </div>
                                <div className="product-order">
                                    <div className="product-price">5 $</div>
                                    <button className="product-add-cart">Добавить в корзину</button>
                                </div>
                            </div>
                        )
                    }
                </div>
            </main>
        );
    }
}

export default Main