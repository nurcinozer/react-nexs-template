import React from 'react';
import Hero from '../../dist/images/hero.svg'

export default () => (
    <section className="header">
        <div className="header__text-box">
            <h1>Optimize your lifestyle.</h1>
            <p>
            End your photo mess! Monument automatic backs up all your photos from smartphones.
            </p>
            <button type="button" className="btn btn__medium">
                BUY NOW
            </button>
        </div>
        <div className="header__draw">
            <img
                src={Hero}
                alt="banner"/>
        </div>
    </section>
);