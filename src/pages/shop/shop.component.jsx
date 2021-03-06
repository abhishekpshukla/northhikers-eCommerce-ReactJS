import React from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect'


import { fetchCollectionsStartAsync } from '../../redux/shop/shop.actions';
import { selectIsCollectionFetching, selectIsCollectionsLoaded } from '../../redux/shop/shop.selectors';

import WithSpinner from '../../components/with-spinner/with-spinner.component';
import CollectionOverview from '../../components/collections-overview/collections-overview.component';
import CollectionPage from '../collection/Collection.component';


const CollectionOverviewWithSpinner = WithSpinner(CollectionOverview);
const CollectionPageWithSpinner = WithSpinner(CollectionPage);

class ShopPage extends React.Component {
    componentDidMount() {
        const { fetchCollectionsStartAsync } = this.props;
        fetchCollectionsStartAsync();
    }

    render() {
        const { match, isCollectionLoaded  } = this.props;

        return (
            <div className='shop-page'>
                <Route
                    exact
                    path={`${match.path}`}
                    render={props => (
                        <CollectionOverviewWithSpinner isLoading={!isCollectionLoaded} {...this.props} />
                    )}
                />
                <Route
                    path={`${match.path}/:collectionId`}
                    render={props => (
                        <CollectionPageWithSpinner isLoading={!isCollectionLoaded} {...props} />
                    )}
                />
            </div>
        )

    }
};

const mapStateToProp = createStructuredSelector({
    isCollectionFetching: selectIsCollectionFetching,
    isCollectionLoaded: selectIsCollectionsLoaded
});

const mapDispatchToMap = dispatch => ({
    fetchCollectionsStartAsync: () => dispatch(fetchCollectionsStartAsync())
})


export default connect(mapStateToProp, mapDispatchToMap)(ShopPage);