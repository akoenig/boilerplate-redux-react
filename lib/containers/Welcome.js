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

import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';

import {greeting as actions} from '../actions';

@connect(state => {
	return {
		greeting: state.greeting
	};
})
class Welcome extends Component {

	static propTypes = {
		dispatch: PropTypes.func.isRequired,
		greeting: PropTypes.string.isRequired
	}

	switchGreeting() {
		const {dispatch} = this.props;

		dispatch(actions.randomize());
	}

	render() {
		const {greeting} = this.props;

		return (
			<div>
				<h1>{greeting}</h1>
				<button onClick={() => this.switchGreeting()}>Generate random greeting</button>
				<p>
					<small>You will experience that nothing will change after clicking the button. Not true :) The randomize returned the same result then.</small>
				</p>
			</div>
		);
	}
}

export default Welcome;
