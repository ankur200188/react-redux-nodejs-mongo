import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import ConsumerList from './presentation/ConsumerList.jsx';
import ConsumerAddresses from './presentation/ConsumerAddresses.jsx';
import './styles.scss';

function Consumers(props){
    const [list, setList] = useState([]);
    const [addresses, setAddresses] = useState([]);

    const onClick = (id) => {
        props.getAddress(id).then((res)=>{
            setAddresses(res.data);
        }).catch((err)=>{
            console.log(err);
        });
    };

    useEffect(() => {
        props.getConsumers().then((res)=>{
            setList(res.data);
        }).catch((err)=>{
            console.log(err);
        });
    }, []);

    return (
        <div>
            <ConsumerList getConsumerData={onClick} list={list} />
            <ConsumerAddresses addresses={addresses}/>
        </div>
    );
}

Consumers.propTypes = {
    getAddress: PropTypes.func.isRequired,
    getConsumers: PropTypes.func.isRequired,
    title: PropTypes.string
};

export default Consumers;
