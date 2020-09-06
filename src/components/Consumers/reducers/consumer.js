/* eslint-disable no-unused-vars */
import { combineReducers } from 'redux';
import _values from 'lodash/values';
import _merge from 'lodash/merge';
import _omit from 'lodash/omit';
import _filter from 'lodash/filter';
import _map from 'lodash/map';
import _path from 'lodash/fp/path';

const INITIAL_STATE = {};

const getA = (state = INITIAL_STATE) => {
    return state;
};

const getB = (state = INITIAL_STATE) => {
    return state;
};

const ConsumerReducer = combineReducers({
    getA,
    getB
});

export default ConsumerReducer;