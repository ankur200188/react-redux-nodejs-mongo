/* eslint-disable no-unused-vars */
import { combineReducers } from 'redux';
import _map from 'lodash/map';
import _sortBy from 'lodash/sortBy';
import _uniq from 'lodash/uniq';
import _pick from 'lodash/pick';
import _cloneDeep from 'lodash/cloneDeep';
import axios from 'axios';
import { path, compose, merge, omitAll } from 'lodash/fp';
import Axios from 'axios';

const INITIAL_STATE = window.userExpenseData || {
    cardsList: [],
    expenseCategories: [],
    isLoaded: false,
    consumerList: []
};

const userExpenseData = (state = INITIAL_STATE, action) => {
    switch (action.type) {
    // case expenseTableActionTypes.ADD_CATEGORY_SUCCESS: {
    //     const categories = state.expenseCategories;
    //     categories.push(action.response);
    //     return Object.assign({}, state, {
    //         expenseCategories: categories
    //     });
    // }
    // case expenseTableActionTypes.FETCH_CATEGORIES_SUCCESS: {
    //     if (action.response) {
    //         return Object.assign({}, state, { expenseCategories: action.response });
    //     }
    //     return state;
    // }
    // case expenseTableActionTypes.FETCH_CARDS_SUCCESS: {
    //     // cash field
    //     // Move this to server
    //     let cards = [
    //         {
    //             id: null,
    //             user: null,
    //             name: 'Cash',
    //             provider_name: '',
    //             type: '',
    //             brand: '',
    //             currency: 'USD',
    //             account_number: '',
    //             icon_url:
    //           'https://spendstatichosting.blob.core.windows.net/icons/icon_card_default.png',
    //             home_url: '',
    //             site_name: '',
    //             refresh_mode: '',
    //             feed_provider: 'N',
    //             feed_provider_id: '',
    //             provider_last_updated: null,
    //             last_synced: null,
    //             is_deleted: false,
    //             enabled: true,
    //             needs_reauthorization: false,
    //             failed_reauthorization_at: null,
    //             plaid_public_token: '',
    //             color_hex: '56b36e'
    //         }
    //     ];
    //     if (Object.keys(action.response).length !== 0) {
    //         cards = cards.concat(action.response);
    //     }
    //     return Object.assign({}, state, { cardsList: cards });
    // }
    // case averyActions.FETCH_PURCHASE_METADATA_SUCCESS: {
    //     const { response } = action;
    //     if (response) {
    //         const { cards, categories } = response;
    //         return {
    //             ...state,
    //             cardsList: cards,
    //             expenseCategories: categories,
    //             isLoaded: true
    //         };
    //     }

    //     return state;
    // }
    default:
        return state;
    }
};

export const getConsumerData = (state = INITIAL_STATE) => {
    return () => {

    };
};

export const consumerList = (state = INITIAL_STATE) => {
    return state.consumerList;
};
