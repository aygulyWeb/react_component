import React from 'react';
import visit_img from './images/visit-img.png';

const Visit = () => {
    return (
        <section className="visit">
            <div className="container">
                <div className="visit__content">
                    <div className="visit__box">
                        <div className="visit__title">Get your favourites plant on our shop now</div>
                        <a className="visit__btn" href="#">visit shop</a>
                    </div>
                    <img src={visit_img} alt="visit"/>
                </div>
            </div>
        </section>
    );
};

export default Visit;