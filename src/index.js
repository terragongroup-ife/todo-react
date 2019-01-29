import React from 'react';
import ReactDOM from 'react-dom';
import AddTask from './components/AddTask';
import {Provider} from 'react-redux';
import store from './store';

ReactDOM.render(
<Provider store={store}>
<AddTask/>
</Provider>, document.getElementById('root'));