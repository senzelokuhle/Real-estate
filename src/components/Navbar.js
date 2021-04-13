import React, { Fragment } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { logout } from '../actions/auth';
import Alert from './Alert';
import PropTypes from 'prop-types';

const navbar = ({ auth: { isAuthenticated, loading }, logout }) => {
    const authLinks = (
        <a className='navbar__top__auth__link' onClick={logout} href='#!'>Logout</a>
    );

    const guestLinks = (
        <Fragment>
           
        </Fragment>
    );

    return (
        <Fragment>
            <nav className='navbar'>
                <div className='navbar__top'>
                    
                    <div className='navbar__top__auth'>
                        { !loading && (<Fragment>{ isAuthenticated ? authLinks : guestLinks }</Fragment>) }
                    </div>
                </div>
                <div className='navbar__bottom'>
                    <li className='navbar__bottom__item'>
                        <NavLink className='navbar__bottom__item__link' exact to='/'>Home</NavLink>
                    </li>
                    <li className='navbar__bottom__item'>
                        <NavLink className='navbar__bottom__item__link' exact to='/listings'>Listings</NavLink>
                    </li>
                    <li className='navbar__bottom__item'>
                        <NavLink className='navbar__bottom__item__link' exact to='/about'>About</NavLink>
                    </li>
                    <li className='navbar__bottom__item'>
                        <NavLink className='navbar__bottom__item__link' exact to='/contact'>Contact</NavLink>
                    </li>
                </div>
                <div class="hero-images">
                <img src="https://a0.muscache.com/im/pictures/de26f95b-fc03-4918-9df9-e3be5593adc8.jpg?im_w=1680"width="100%" height="550" alt="alternatetext">
                    </img>
                        
                    <div className="navbar__tittle">
                        <h1>Smart Coastal Living</h1>
                    </div>
                    <div class="navbar__text">
                    
                    <Link className='navbar__button' to='/login'>Login</Link>
                </div>
                
                <div class="navbar__texts">
                <Link className='navbar__button' to='/signup'>Sign Up</Link>
                </div>
                 
                </div>
            </nav>
            <Alert />
        </Fragment>
    );
};

navbar.propTypes = {
    logout: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
    auth: state.auth
});

export default connect(mapStateToProps, { logout })(navbar);