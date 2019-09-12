import React from 'react';
import { connect } from 'react-redux';
import './cart-dropdown.styles.scss';

import CustomButton from '../custom-button/custom-button.component';
import CartItem from '../cart-item/cart-item.component';
import { selectCartsItems } from '../../redux/cart/cart.selectors';

const CartDropdown = ({ cartItems }) => (
    <div className='cart-dropdown'>
        <div className='cart-items'>
            {
                cartItems.map(item => (
                    <CartItem key={item.id} item={item} quantity={item.quantity} />
                ))
            }

        </div>
        <CustomButton>Go to Checkout</CustomButton>
    </div>
);

const mapStateToProps = state => ({ cartItems: selectCartsItems(state) });

export default connect(mapStateToProps)(CartDropdown);