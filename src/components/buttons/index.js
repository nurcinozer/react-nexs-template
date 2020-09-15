import React from 'react';
import Graduation from '../../dist/images/graduation-hat.svg';
import Settings from '../../dist/images/settings.svg';

export default () => (
    <div className="button">
        <div className="button__cards">
            <div className="button__card">
                <img src={Graduation} alt="graduation hat" />
                <div className="button__text">
                    <h4>Learn More</h4>
                    <p>
                        Your terms, your rules, forget monthly fees!
                    </p>
                </div>
            </div>
            <div className="button__card">
                <img src={Settings} alt="settings" />
                <div className="button__text">
                    <h4>Setup</h4>
                    <p>
                        Your terms, your rules, forget monthly fees!
                    </p>
                </div>
            </div>
        </div>
    </div>
);