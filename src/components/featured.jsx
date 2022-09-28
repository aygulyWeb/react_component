import React from 'react';
import featured_img_1 from './images/featured__img-1.png';
import featured_img_2 from './images/featured__img-2.png';
import featured_img_3 from './images/featured__img-3.png';
import featured_img_4 from './images/featured__img-4.png';
import featured_img_5 from './images/featured__img-5.png';

const Featured = () => {
    return (
        <section className="featured">
            <div className="container">
                <div className="featured__content">
                    <div className="featured__title">featured plants</div>
                    <div className="featured__select">
                        <select className="featured__selected" name="plants">
                            <option value="1">cheaper first</option>
                            <option value="2">plants</option>
                            <option value="3">plants</option>
                        </select>
                    </div>
                </div>
                <div className="featured__box">
                    <div className="featured__item"><img src={featured_img_1} alt="plants"/>
                        <div className="featured__name">kaktus plants</div>
                        <div className="featured__price">idr 85.000</div>
                    </div>
                    <div className="featured__item"><img src={featured_img_2} alt="plants"/>
                        <div className="featured__name">landak plants</div>
                        <div className="featured__price">idr 105.000</div>
                    </div>
                    <div className="featured__item"><img src={featured_img_3} alt="plants"/>
                        <div className="featured__name">kecubung plants</div>
                        <div className="featured__price">idr 85.000</div>
                    </div>
                    <div className="featured__item"><img src={featured_img_4} alt="plants"/>
                        <div className="featured__name">kecubung plants</div>
                        <div className="featured__price">idr 85.000</div>
                    </div>
                    <div className="featured__item"><img src={featured_img_5} alt="plants"/>
                        <div className="featured__name">kecubung plants</div>
                        <div className="featured__price">idr 85.000</div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Featured;