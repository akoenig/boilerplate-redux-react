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

import {handleActions} from 'redux-actions';

import Actions from '../actions';

const {RANDOMIZE} = Actions.greeting;

const GREETINS = [
    'Servus',
    'Hello',
    'Hallo',
    'Guten Tag',
    'Hey',
    'S\'up?',
    'Moin',
    'Moin Moin'
];

function getRandomGreeting () {
    return GREETINS[Math.floor(Math.random() * 1000) % GREETINS.length];
}

function createState () {
    return getRandomGreeting();
}

export default handleActions({
    [RANDOMIZE]: (state, action) => {
        return getRandomGreeting()
    }
}, createState());
