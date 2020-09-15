import React from 'react';
import Details from '../../dist/images/airpods.svg';
import Icon from '../../dist/images/icon.svg';

export default () => (
    <section className="details">
        <article className="product-details">
            <div className="product-details__draw">
                <img
                    src={Details}
                    alt="airpods"
                />
            </div>
            <div className="product-details__text-box">
                <h1>Product Details</h1>
                <p>
                    Increase your storage space anytime! Monument connects to your own external hard drive letting you upgrade to more space whenever you want.
                </p>
                <button type="button" className="btn__white">
                    <img src={Icon} alt="" />
                    <div className="btn__white__text">
                        <span>Maximum focus</span>
                        <p>Your own external hard</p>
                    </div>
                </button>
            </div>
        </article>
    </section>
);