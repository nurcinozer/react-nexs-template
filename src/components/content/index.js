import React from 'react';
import Content from '../../dist/images/content.svg';

export default () => (
    <section className="content">
        <article className="content-details">
            <div className="content-details__text-box">
                <h1>AirPods</h1>
                <ul>
                    <li>Automatic back up of all of your photos.</li>
                    <li>Automatic organization of your photos</li>
                    <li>Setup storage using USB Drives</li>
                    <li>Multi-user support (5 users)</li>
                    <li>Your terms, your rules, forget monthly fees!</li>
                </ul>
                <div className="border"/>
                <h4>$169.99</h4>
                <button type="button" className="btn btn__medium">
                BUY NOW
            </button>
            </div>
            <div className="product-details__draw">
                <img
                    src={Content}
                    alt="airpods"
                />
            </div>
        </article>
    </section>
);