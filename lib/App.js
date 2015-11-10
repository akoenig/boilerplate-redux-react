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

import React, {Component} from 'react';
import {Provider} from 'react-redux';

import {createStore} from './store';

import {Welcome} from './containers';

const store = createStore();

class App extends Component {

	render() {
		return (
			<Provider store={store}>
				<Welcome />
			</Provider>
		);
	}

}

export default App;
