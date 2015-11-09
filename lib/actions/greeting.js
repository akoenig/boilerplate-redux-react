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

import {createAction} from 'redux-actions';

export const RANDOMIZE = '@@greeting/randomize';
export const randomize = createAction(RANDOMIZE);
