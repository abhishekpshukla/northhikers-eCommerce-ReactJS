import React from 'react';
import { ReactComponent as ShippingIcon } from '../../assets/shopping-bag.svg';
import './cart-icon.styles.scss'

const CartIcon = () => (
    <div className='cart-icon'>
        <ShippingIcon />
        <span className='item-count'></span>
    </div>
);

export default CartIcon;