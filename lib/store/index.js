/*
 * boilerplate-redux-react
 *
 * Copyright(c) 2015 André König <andre.koenig@posteo.de>
 * MIT Licensed
 *
 */

/**
 * @author André König <andre.koenig@posteo.de>
 *
 */

const REDUCERS_PATH = '../reducers/';

import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';

import reducers from REDUCERS_PATH;

const createStoreWithMiddleware = applyMiddleware(
    thunk
)(createStore);

export default () => {
    const store = createStoreWithMiddleware(reducers);

    if (module.hot) {
        // Enable Webpack hot module replacement for reducers
        module.hot.accept(REDUCERS_PATH, () => {
            const nextRootReducer = require(REDUCERS_PATH);

            store.replaceReducer(nextRootReducer);
        });
    }

    return store;
};
