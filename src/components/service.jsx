import React from 'react';
import service_img_1 from './images/service-img-1.svg';
import service_img_2 from './images/service-img-2.svg';
import service_img_3 from './images/service-img-3.svg';
import service_img_4 from './images/service-img-4.svg';

const Service = () => {
    return (
        <section className="service">
            <div className="container">
                <div className="service__box">
                    <div className="service__item">
                        <div className="service__cart"><img className="service__image" src={service_img_1}
                                                            alt="delivery"/><span className="service__title">fast delivery </span>
                        </div>
                        <p className="service__text">
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
                            been the industry's standard</p>
                    </div>
                    <div className="service__item">
                        <div className="service__cart"><img className="service__image" src={service_img_2}
                                                            alt="customer"/><span className="service__title">great customer service </span>
                        </div>
                        <p className="service__text">
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
                            been the industry's standard</p>
                    </div>
                    <div className="service__item">
                        <div className="service__cart"><img className="service__image" src={service_img_3}
                                                            alt="plant"/><span
                            className="service__title">original plants </span></div>
                        <p className="service__text">
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
                            been the industry's standard</p>
                    </div>
                    <div className="service__item">
                        <div className="service__cart"><img className="service__image" src={service_img_4}
                                                            alt="price"/><span className="service__title">affordable price </span>
                        </div>
                        <p className="service__text">
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
                            been the industry's standard</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Service;