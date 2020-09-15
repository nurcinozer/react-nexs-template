import React from 'react';
import Product from '../../dist/images/product.svg';

export default () => (
    <div className="product">
        <div className="product__cards">
            <div className="product__card">
                <div className="product__title">
                    <h4>Cameras</h4>
                    <div className="line"/>
                    <div className="circle"/>
                </div>
                <p>
                    Use all the devices! Smartphones, DSLRs, Drones, Action Cams, and everything else you can take a photo with is.
                </p>
            </div>
            <div className="product__card">
                <img src={Product} alt="product" />
            </div>
            <div className="product__card">
                <div className="product__title">
                    <div className="line"/>
                    <div className="circle"/>
                    <h4>Automatic</h4>
                </div>
                <p>
                    End your photo mess! Monument automatic backs up all your photos from smartphones
                    cameras, computers, and SD cards.
                </p>
            </div>
        </div>
    </div>
);