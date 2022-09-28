import React from 'react';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer__content">
                    <div className="footer__item"><a className="footer__logo" href="#">plantku</a>
                        <div className="footer__name">plankyu house</div>
                        <div className="footer__address">Jl. Laksda Adisucipto No.51, Demangan, Kec. Depok, Kota
                            Yogyakarta, Daerah Istimewa Yogyakarta 55282
                        </div>
                    </div>
                    <div className="footer__item">
                        <div className="footer__title">perusahaan</div>
                        <a className="footer__link" href="#">tentang kami </a><a className="footer__link" href="#">hubungi
                        kami</a>
                    </div>
                    <div className="footer__item">
                        <div className="footer__title">produk</div>
                        <a className="footer__link" href="#">tanaman </a><a className="footer__link" href="#">tanaman
                        lain</a>
                    </div>
                    <div className="footer__item">
                        <div className="footer__title">berlangganan email kami</div>
                        <input className="footer__mail" type="email" placeholder="masukan alamat email"/>
                            <button className="footer__btn">submit</button>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;