import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import Header from './Header';
import { Switch,
    Route } from 'react-router-dom';
import Consumers from './Consumers/ConsumerContainer';

class App extends PureComponent {

    constructor(props) {
        super(props);
        this.state = {
            pageHeader: 'Conviva'
        };
    }

    render() {
        const { store, history } = this.props;
        return (
            <Provider store={store}>
                <ConnectedRouter history={history}>
                    <Header title={this.state.pageHeader} />
                    <div className="container-fluid">
                        <Switch>
                            <Route exact={true} path="/" component={Consumers}/>
                        </Switch>
                    </div>
                </ConnectedRouter>
            </Provider>

        );
    }
}

App.propTypes = {
    history: PropTypes.object.isRequired,
    store: PropTypes.object.isRequired
};

export default App;
