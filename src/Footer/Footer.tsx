import React from 'react';
import s from './Footer.module.css';

import vk from '../icons/icons8-vk-com-48.png';
import lin from '../icons/icons8-linkedin-48.png';
import inst from '../icons/icons8-instagram-48.png';
import fb from '../icons/icons8-facebook-48.png';

const Footer = () => {
    return (
        <footer className={s.footer}>
            <div className={s.container}>
                <div className={s.footer__body}>
                    <h2 className={s.footer__title}>From siberia with love</h2>
                    <div className={s.footer__items}>
                        <div className={s.footer__item}>
                            <div className={s.footer__itemBody}>
                                <a href={'#'}><img src={fb} alt={'facebook'}/></a>
                            </div>
                        </div>
                        <div className={s.footer__item}>
                            <div className={s.footer__itemBody}>
                                <a href={'#'}><img src={inst} alt={"inst"}/></a>
                            </div>
                        </div>
                        <div className={s.footer__item}>
                            <div className={s.footer__itemBody}>
                                <a href={'#'}><img src={vk} alt={'vk'}/></a>
                            </div>
                        </div>
                        <div className={s.footer__item}>
                            <div className={s.footer__itemBody}>
                                <a href={'#'}><img src={lin} alt={'linkedin'}/></a>
                            </div>
                        </div>
                    </div>
                    <span className={s.footer__copyright}>© All rights received</span>
                </div>
            </div>
        </footer>
    );
};

export default Footer;