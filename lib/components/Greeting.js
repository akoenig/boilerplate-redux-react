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

function Greeting(props) {
	const {message} = props;

	return (
        <div>
            <h1>{message}</h1>
        </div>
    );
}

Greeting.propTypes = {
	message: PropTypes.string.isRequired
};

export default Greeting;
