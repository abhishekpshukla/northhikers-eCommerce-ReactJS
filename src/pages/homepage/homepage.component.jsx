import React from 'react';
import './homepage.styles.scss';

// import components
// import MenuItem from '../../components/menu-item/menu-item.component';

import Directory from '../../components/directory/directory.component';

const HomePage = () => {
    return (
        <div className='homepage'>
            <div className='directory-menu'>
                <Directory />
            </div>
        </div>
    )
};

export default HomePage;