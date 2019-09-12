import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect'
import './directory.styles.scss';

import MenuItem from '../menu-item/menu-item.component';
import { selectDirectroySections } from '../../redux/directory/directory.selector';

const Directory = ({ sections }) => {
    return (
        <div className='directory-menu'>
            {
                sections.map(({ id, ...otherSelectionProps }) => (
                    <MenuItem
                        key={id}
                        {...otherSelectionProps}
                    />
                ))
            }
        </div>
    )

};

const mapStateToProps = createStructuredSelector({
    sections: selectDirectroySections
})

export default connect(mapStateToProps)(Directory);