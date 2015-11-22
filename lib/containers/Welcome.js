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

import React, {PropTypes} from 'react';
import {connect} from 'react-redux';

import actions from '../actions';

const Welcome = props => {
	const {dispatch, greeting} = props;
	const {randomize} = actions.greeting;

	return (
		<div>
			<h1>{greeting}</h1>

			<button onClick={() => dispatch(randomize())}>Generate random greeting</button>
			<p>
				<small>You will experience that nothing will change after clicking the button. Not true :) The randomize returned the same result then.</small>
			</p>
		</div>
	);
};

Welcome.propTypes = {
	greeting: PropTypes.string.isRequired
};

const mapStateToProps = state => ({
	greeting: state.greeting
});

export default connect(mapStateToProps)(Welcome);
