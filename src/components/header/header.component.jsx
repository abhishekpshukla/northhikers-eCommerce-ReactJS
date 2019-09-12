import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { auth } from '../../firebase/firebase.utils';
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';
import { selectCurrentUser } from '../../redux/user/user.selectors';
import { selectCartHidden } from '../../redux/cart/cart.selectors';
import { ReactComponent as Logo } from '../../assets/crown.svg';

import './header.styles.scss';

const Header = ({ currentUser, hidden }) => {
    return (
        <div className='header'>
            <Link to="/" className='logo-container'>
                <Logo className='logo' /><strong>NorthHikers</strong>
            </Link>
            <div className='options'>
                {currentUser ? <div className='option'>Welcome <strong>{currentUser.displayName}</strong></div> : null}
                <Link className='option' to="/shop">Shop</Link>
                <Link className='option' to="/shop">contact</Link>
                {
                    currentUser ? (
                        <div className='option' onClick={auth.signOut()}>
                            Sign out
                        </div>
                    ) : (
                            <Link to='/signin'>Sign in</Link>
                        )
                }
                <CartIcon />
            </div>
            {
                hidden ? null :
                    <CartDropdown />
            }
        </div>
    )
};

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    hidden: selectCartHidden
});


export default connect(mapStateToProps)(Header);