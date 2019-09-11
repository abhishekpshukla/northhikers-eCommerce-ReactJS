import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import './header.styles.scss';

import { ReactComponent as Logo } from '../../assets/crown.svg'
import { auth } from '../../firebase/firebase.utils';

const Header = ({ currentUser }) => {
    return (
        <div className='header'>
            <Link to="/" className='logo-container'>
                <Logo className='logo' />
            </Link>
            <div className='options'>
                {currentUser ? <div className='option'>Welcome <strong>{currentUser.displayName}</strong></div> : null}
                <Link className='option' to="/shop">Shop</Link>
                <Link className='option' to="/shop">contact</Link>
                {
                    currentUser ? (
                        <div className='option' onClick={() => auth.signOut()}>
                            Sign out
                        </div>
                    ) : (
                            <Link to='/signin'>Sign in</Link>
                        )
                }
            </div>
        </div>
    )
};

const mapStateToProps = state => ({
    currentUser: state.user
});


export default connect(mapStateToProps)(Header);