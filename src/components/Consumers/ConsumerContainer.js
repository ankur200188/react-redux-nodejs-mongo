/* istanbul ignore-next */
import { connect } from 'react-redux';
import Consumers from './Consumers.jsx';
import * as consumerActions from './actions/ConsumerActions';

function mapStateToProps() {
    return {};
}

export default connect(mapStateToProps, consumerActions)(Consumers);
