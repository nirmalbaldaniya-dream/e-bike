import get from 'lodash-es/get';

/**
 * @param { Object } state - Redux state detail object
 * @return { Boolean } - return `state.app.wideLayout` value
 */
export const filteredList = (state) => get(state, 'app.data') || [];

/**
 * @param {Object} state Redux state
 * @returns {Object} Current applied filters. e.g { minHeight, maxHeight }
 */
export const filters = (state) => get(state, `app.filters`);
