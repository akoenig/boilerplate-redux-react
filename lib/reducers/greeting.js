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

const GREETINGS = [
	'Servus',
	'Hello',
	'Hallo',
	'Guten Tag',
	'Hey',
	'S\'up?',
	'Moin',
	'Moin Moin'
];

function getRandomGreeting() {
	return GREETINGS[Math.floor(Math.random() * 1000) % GREETINGS.length];
}

function createState() {
	return getRandomGreeting();
}

export default handleActions({
	[RANDOMIZE]: () => getRandomGreeting()
}, createState());
