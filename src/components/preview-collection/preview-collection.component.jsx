import React from 'react';
import './preview-collection.styles.scss';


const PreviewCollection = ({ title, routeName, items }) => {
    return (
        <div className="collection-preview">
            <div className="title">{title}</div>
        </div>
    )
};

export default PreviewCollection;