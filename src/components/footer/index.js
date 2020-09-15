import React from 'react';
import Logo from './logo';
import AppStore from '../../dist/images/app-store-badge.svg';
import GooglePlay from '../../dist/images/google-play-badge.svg';

export default () => (
    <footer className="footer">
        <div className="logo-container">
            <Logo />
        </div>
        <div className="footer__links">
            <ul>
                <p>Support</p>
                <li>
                    <a href="/">Help Center</a>
                </li>
                <li>
                    <a href="/">Terms Of Service</a>
                </li>
                <li>
                    <a href="/">Privacy</a>
                </li>
                <li>
                    <a href="/">Security</a>
                </li>
            </ul>
            <ul>
                <p>Company</p>
                <li>
                    <a href="/">Blog</a>
                </li>
                <li>
                    <a href="/">About Us</a>
                </li>
                <li>
                    <a href="/">Contact Us</a>
                </li>
                <li>
                    <a href="/">Customer Stories</a>
                </li>
                <li>
                    <a href="/">Style Guide</a>
                </li>
            </ul>
            <ul>
                <p>Follow</p>
                <li>
                    <a href="/">Twitter</a>
                </li>
                <li>
                    <a href="/">Dribbble</a>
                </li>
                <li>
                    <a href="/">Facebook</a>
                </li>
                <li>
                    <a href="/">Github</a>
                </li>
                <li>
                    <a href="/">Linkedin</a>
                </li>
            </ul>
            <ul>
                <p>Apps</p>
                <li>
                    <a href="/">
                        <img src={AppStore} alt="app store" />
                    </a>
                </li>
                <li>
                    <a href="/">
                        <img src={GooglePlay} alt="google play" />
                    </a>
                </li>
            </ul>
        </div>
    </footer>

);