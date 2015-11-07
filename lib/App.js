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

import {Greeting} from './components/';

class App extends Component {
    render () {
        return (
            <div>
                <Greeting message="redux-react-boilerplate" />

                <small>by <a href="http://andrekoenig.info">André König</a></small>
            </div>
        );
    }
}

export default App;
