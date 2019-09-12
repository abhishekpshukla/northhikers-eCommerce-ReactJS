import { createSelector } from 'reselect';
import { stat } from 'fs';

const selectCart = state => state.cart;

export const selectCartsItems = createSelector(
    [selectCart],
    cart => cart.cartItems
);

export const selectCartItemCount = createSelector(
    [selectCartsItems],
    cartItems =>
        cartItems.reduce(
            (InitialCount, cartItem) => InitialCount + cartItem.quantity,
            0
        )
)