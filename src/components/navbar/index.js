import React, {  useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import Logo from '../../dist/images/logo.svg'

export default () => {
    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    return (
        <nav className="navbar">
            <div className="navbar__container container">
                <Link href="/" onClick={closeMobileMenu}>
                    <img src={Logo} className="navbar__logo" alt="nexs logo" />
                </Link>
                <button type="button" className="menu-icon" onClick={handleClick}>
                    {click ? <FaTimes className="fa-times" /> : <FaBars className="fa-bars" />}
                </button>
                <ul className={click ? 'navbar__menu active' : 'navbar__menu'}>
                    <li className='navbar__item'>
                        <Link to='/' className='navbar__links' onClick={closeMobileMenu}>
                            Product
                        </Link>
                    </li>
                    <li className='navbar__item'>
                        <Link
                            to='/'
                            className='navbar__links'
                            onClick={closeMobileMenu}>
                            Feature
                        </Link>
                    </li>
                    <li className='navbar__item'>
                        <Link
                            to='/'
                            className='navbar__links'
                            onClick={closeMobileMenu}>
                            FAQ
                        </Link>
                    </li>
                    <li className='navbar__item'>
                        <Link
                            to='/'
                            className='navbar__links'
                            onClick={closeMobileMenu}>
                            SUPPORT
                        </Link>
                    </li>
                    <li className='navbar__btn'>
                            <Link to='/' className='btn-link'>
                                <button className='btn btn__small'>BUY NOW</button>
                            </Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
};