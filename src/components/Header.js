import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button';

const Header = ({ title }) => {
    return (
        <header className='header'>
            <h1>{title}</h1>
            <Button color='turquoise'  text = 'Show Create a Task Bar'/>
        </header>
    )
}

// Header.defaultProps = {
//     title: 'Tast Tracker as default'
// };

Header.propTypes = {
    title: PropTypes.string.isRequired,
};

export default Header;