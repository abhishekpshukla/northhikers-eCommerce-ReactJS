import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect'
import { withRouter } from 'react-router-dom';


import './cart-dropdown.styles.scss';

import CustomButton from '../custom-button/custom-button.component';
import CartItem from '../cart-item/cart-item.component';
import { selectCartsItems } from '../../redux/cart/cart.selectors';
import { toggleCartHidden } from '../../redux/cart/cart.action';

const CartDropdown = ({ cartItems, history, dispatch }) => (
    <div className='cart-dropdown'>
        <div className='cart-items'>
            {
                cartItems.length ?
                    cartItems.map(item => (
                        <CartItem key={item.id} item={item} quantity={item.quantity} />
                    ))
                    : (<span className='empty-message'>Your cart is empty.</span>)
            }

        </div>
        <CustomButton onClick={
            () => {
                history.push('/checkout');
                dispatch(toggleCartHidden());
            }
        }>Go to Checkout</CustomButton>
    </div>
);

const mapStateToProps = createStructuredSelector({ cartItems: selectCartsItems });

export default withRouter(connect(mapStateToProps)(CartDropdown));