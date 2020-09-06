import React from 'react';
import PropTypes from 'prop-types';

function ConsumerAddress (props){
    return (
        <li className="consumer-address-item">
            <div className="consumer-address-value">Added: {props.address.date_created}</div>
            <div className="consumer-address-value">{`${props.address.address.street_address}`}</div>
            <div className="consumer-address-value">{props.address.address.city}</div>
            <div className="consumer-address-value">{props.address.address.state}</div>
            <div className="consumer-address-value">Zip: {props.address.address.zip}</div>
        </li>
    );
}

ConsumerAddress.propTypes = {
    address: PropTypes.object.isRequired
};

export default ConsumerAddress;