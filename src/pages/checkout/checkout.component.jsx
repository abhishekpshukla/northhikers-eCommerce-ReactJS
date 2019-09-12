import React from 'react';
import './checkout.styles.scss';

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect'
import { selectCartsItems, selectCartTotal } from '../../redux/cart/cart.selectors';
import CheckoutItem from '../../components/checkout-Item/checkout-item.component';

const CheckoutPage = ({ cartItems, total }) => {
    console.log("333", cartItems)
    return (
        <div className="checkout-page">
            <div className='checkout-header'>
                <div className='header-blocks'>
                    <span>Product</span>
                </div>
                <div className='header-blocks'>
                    <span>Description</span>
                </div>
                <div className='header-blocks'>
                    <span>Quantity</span>
                </div>
                <div className='header-blocks'>
                    <span>Price</span>
                </div>
                <div className='header-blocks'>
                    <span>Remove</span>
                </div>
            </div>
            {
                cartItems.map(cartItem =>
                    <CheckoutItem key={cartItem.id} cartItem={cartItem} />
                )
            }

            <div className='total'>
                <span>Total: ${total}</span>
            </div>
        </div>
    )
};

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartsItems,
    total: selectCartTotal
})

export default connect(mapStateToProps)(CheckoutPage);