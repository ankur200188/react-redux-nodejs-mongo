import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Consumer from './Consumer.jsx';

function ConsumerList(props){
    // eslint-disable-next-line no-unused-vars
    const [list, setList] = useState(props.list);

    useEffect(() => {
        let updatedList;
        if (props.list.length) {
            updatedList = props.list.sort((a,b) => (a.id-b.id));
            setList(updatedList);
        }
    }, [props.list]);

    return (
        <div className="consumer-list-container">
            <h3 className="consumer-list-header">Consumer List</h3>
            <ul className="consumer-list">
                <li className="consumer-list-item">
                    <div className="consumer-list-value">ID</div>
                    <div className="consumer-list-value">Name</div>
                    <div className="consumer-list-value">Email</div>
                    <div className="consumer-list-value">Age</div>
                    <div className="consumer-list-value">Addresses</div>
                </li>
                {
                    list && list.map(element => {
                        return (<Consumer key={element.id} data={element} clickHandler={props.getConsumerData} />);
                    })
                }
            </ul>
        </div>
    );
}

ConsumerList.propTypes = {
    getConsumerData: PropTypes.func.isRequired,
    list: PropTypes.array.isRequired
};

export default ConsumerList;
