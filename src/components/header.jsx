import React from 'react';
import header_bg from './images/header-bg.png';
import header_logo from './images/header-logo.svg';
import header_search from './icons/header-search.svg';
import header_shop from './icons/header-shop.svg';


const Header = () => {
    return (
        <header className="header">
            <div className="header__image"><img src={header_bg} alt="plants"/>
                <a className="header__logo" href="#"><img src={header_logo} alt="logotip"/></a>
            </div>
            <div className="header__content">
                <div className="header__nav">
                    <form action="#">
                        <input className="header__input" type="checkbox" id="search"/>
                        <input className="header__searching" type="search"/>
                        <label className="header__toggle" htmlFor="search"><img className="header__search"
                                                                                src={header_search}
                                                                                alt="search"/></label>
                    </form>
                    <img className="header__shop" src={header_shop} alt="shop"/><a
                    className="header__sign-up" href="#">sign up </a><a className="header__sign-in" href="#">sign in</a>
                </div>
                <div className="header__texts">
                    <div className="header__title">kembang flower mantap</div>
                    <div className="header__text">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been
                        the industry's standard dummy text ever since the 1500s,
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;