import { createSelector } from 'reselect';
import { create } from 'domain';

const selectCart = state => state.cart;

export const selectCartsItems = createSelector(
    [selectCart],
    cart => cart.cartItems
);

export const selectCartHidden = createSelector(
    [selectCart],
    cart => cart.hidden
);

export const selectCartItemCount = createSelector(
    [selectCartsItems],
    cartItems =>
        cartItems.reduce(
            (InitialCount, cartItem) => InitialCount + cartItem.quantity,
            0
        )
);

export const selectCartTotal = createSelector(
    [selectCartsItems],
    cartItems =>
        cartItems.reduce(
            (InitialCount, cartItem) => InitialCount + cartItem.quantity * cartItem.price,
            0
        )
);