import React from 'react';
import PropTypes from 'prop-types';


const Header = (props) => {
    return (
        <div className="text-center">
            <h1>{props.title}</h1>
        </div>
    );
};

Header.propTypes = {
    title: PropTypes.string
};

export default Header;
