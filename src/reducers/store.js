import { createStore, combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

const reducer = combineReducers({
  form: formReducer,
});

export const store = (window.devToolsExtension ? window.devToolsExtension()(createStore) : createStore)(reducer);
