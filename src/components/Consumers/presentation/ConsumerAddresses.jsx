import React from 'react';
import PropTypes from 'prop-types';
import ConsumerAddress from './ConsumerAddress.jsx';

function ConsumerAddresses (props){

    if(!props.addresses.length) {
        return <div/>;
    }

    return (
        <div className="consumer-address-container">
            <h3 className="consumer-address-header">Addresses</h3>
            <ul className="consumer-address-list">
                {props.addresses.map((address, index) => {
                    return <ConsumerAddress key={index} address={address}/>;
                })}

            </ul>
        </div>

    );
}

ConsumerAddresses.propTypes = {
    addresses: PropTypes.array.isRequired
};

export default ConsumerAddresses;
