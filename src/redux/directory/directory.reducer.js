import { DirectoryActionTypes } from './directory.types';

const INITIAL_VALUE = {
    sections: [
        {
            title: 'hats',
            imageUrl: 'https://i.ibb.co/TmC9Yvj/joshua-coleman-y-VRLC75-Ma8-unsplash.jpg',
            id: 1,
            linkUrl: 'shop/hats'
        },
        {
            title: 'jackets',
            imageUrl: 'https://i.ibb.co/Z2NKXjb/tessa-simpson-e-TCog-Yz7k-QE-unsplash.jpg',
            id: 2,
            linkUrl: 'shop/jackets'
        },
        {
            title: 'sneakers',
            imageUrl: 'https://i.ibb.co/hmTxJ45/edgar-chaparro-Lh-CTP558tc-unsplash.jpg',
            id: 3,
            linkUrl: 'shop/sneakers'
        },
        {
            title: 'womens',
            imageUrl: 'https://i.ibb.co/6ggnn6P/apparel-boutique-clothes-1233648.jpg',
            size: 'large',
            id: 4,
            linkUrl: 'shop/womens'
        },
        {
            title: 'mens',
            imageUrl: 'https://i.ibb.co/xjCrnDX/myself.jpg',
            size: 'large',
            id: 5,
            linkUrl: 'shop/mens'
        }
    ]
}

export const directoryReducer = (state = INITIAL_VALUE, action) => {
    switch (action.types) {
        default:
            return state;
    }
};