import React from 'react';
import SHOP_DATA from './shop.data';

import PreviewCollection from '../../components/preview-collection/preview-collection.component';

class ShopPage extends React.Component {
    constructor() {
        super();

        this.state = {
            collections: SHOP_DATA
        }
    }

    render() {
        console.log(this.state.collections);
        return (
            <div>
                {this.state.collections.map(({ id, title, routeName, items }) =>
                    <PreviewCollection key={id} title={title} routeName={routeName} items={items} />
                )}
            </div>
        )
    }
};

export default ShopPage;