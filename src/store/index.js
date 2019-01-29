import {createStore} from 'redux';
import taskReducer from '../reducers';

const initialStore = [];

const store = createStore(taskReducer, initialStore);

export default store;

