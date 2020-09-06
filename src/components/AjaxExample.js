import React, { Component } from 'react';
import axios from 'axios';

class AjaxExample extends Component {

    constructor(props) {
        super(props);
        this.state = {
            greeting: ''
        };
    }

    componentDidMount() {
        axios.get('/api/greeting')
            .then(response => {
                if(response.status === 200) {
                    this.setState({
                        greeting: response.data
                    });
                } else {
                    throw new Error('Request failed');
                }
            })
            .catch((err) => {
                console.log(err);
            });
    }

    render() {
        return (
            <div className="text-center">
                <p>{this.state.greeting}</p>
            </div>
        );
    }

}

export default AjaxExample;
