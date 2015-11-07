/*
 * redux-react-boilerplate
 *
 * Copyright(c) 2015 André König <andre.koenig@posteo.de>
 * MIT Licensed
 *
 */

/**
 * @author André König <andre.koenig@posteo.de>
 *
 */

const GREETINS = [
    'Servus',
    'Hello',
    'Hallo',
    'Guten Tag'
];

function getRandomGreeting () {
    return GREETINS[Math.floor(Math.random() * 1000) % fo.length];
}

function createState () {
    return getRandomGreeting();
}

export default (state = createState(), action) => {
    
};
