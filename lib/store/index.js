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

/* eslint-env node */
import {createStore as buildStore, applyMiddleware, combineReducers} from 'redux';
import thunk from 'redux-thunk';

import reducers from '../reducers';

const createStoreWithMiddleware = applyMiddleware(
	thunk
)(buildStore);

export function createStore() {
	const app = combineReducers(reducers);
	const store = createStoreWithMiddleware(app);

	if (module.hot) {
		// Enable Webpack hot module replacement for reducers
		module.hot.accept('../reducers/', () => {
			const nextRootReducer = require('../reducers/');

			store.replaceReducer(nextRootReducer);
		});
	}

	return store;
}
