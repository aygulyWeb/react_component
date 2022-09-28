import React from 'react';
import buy_img_1 from './images/buy-img-1.png';
import buy_img_2 from './images/buy-img-2.png';

const Buy = () => {
    return (
        <section className="buy">
            <div className="container">
                <div className="buy__content">
                    <div className="buy__column">
                        <div className="buy__text">
                            <div className="buy__title">Buy more plants, it helps you to be relaxed</div>
                            <div className="buy__article">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi gravida gravida aliquam.
                                Pellentesque et lobortis nisl. Sed et mauris justo.
                                Nulla eu enim non mauris maximus dignissim. Maecenas vitae eros sapien. Quisque
                                pellentesque tempus dignissim.
                            </div>
                        </div>
                        <div className="buy__image"><img src={buy_img_1} alt="buying"/></div>
                    </div>
                    <img src={buy_img_2} alt="#"/>
                </div>
            </div>
        </section>
    );
};

export default Buy;