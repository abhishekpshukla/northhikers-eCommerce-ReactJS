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

import { HeaderContainer, LogoContainer, OptionContainer, OptionLink, OptionDiv } from './header.styles';

const Header = ({ currentUser, hidden }) => {
    return (
        <HeaderContainer>
            <LogoContainer to="/">
                <Logo className='logo' /><strong>NorthHikers</strong>
            </LogoContainer>
            <OptionContainer>
                {currentUser ? <div className='option'>Welcome <strong>{currentUser.displayName}</strong></div> : null}
                <OptionLink to="/shop">Shop</OptionLink>
                <OptionLink to="/shop">contact</OptionLink>
                {
                    currentUser ? (
                        <OptionDiv onClick={() => auth.signOut()}>
                            Sign out
                        </OptionDiv>
                    ) : (
                            <Link to='/signin'>Sign in</Link>
                        )
                }
                <CartIcon />
            </OptionContainer>
            {
                hidden ? null :
                    <CartDropdown />
            }
        </HeaderContainer>
    )
};

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    hidden: selectCartHidden
});


export default connect(mapStateToProps)(Header);