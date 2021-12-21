import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button';

const Header = ({ title, toggleShow, isTaskBarShowed }) => {
    return (
        <header className='header'>
            <h1>{title}</h1>
            <Button color={isTaskBarShowed ? 'steelblue' : 'purple'}  text = {isTaskBarShowed ? 'Hide Create a Taskbar' : 'Show Create a Task Bar'} toggleShow={toggleShow}/>
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