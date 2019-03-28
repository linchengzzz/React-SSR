import { createStore } from 'redux';
import reducers from '../reducers';

/**
 *
 * @param data
 * @returns {any}
 */
export default data => createStore(reducers, data);
