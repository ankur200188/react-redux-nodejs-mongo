import React from 'react';
import PropTypes from 'prop-types';

function Consumer (props){

    return (
        <li className="consumer-list-item" onClick={props.clickHandler.bind(this, props.data.id)}>
            <div className="consumer-list-value">{props.data.id}</div>
            <div className="consumer-list-value">{`${props.data.first_name} ${props.data.last_name}`}</div>
            <div className="consumer-list-value">{props.data.email}</div>
            <div className="consumer-list-value">{props.data.age}</div>
            <div className="consumer-list-value">{props.data.addresses}</div>
        </li>
    );
}

Consumer.propTypes = {
    clickHandler: PropTypes.func,
    data: PropTypes.object
};

export default Consumer;