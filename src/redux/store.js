import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { contactsReduser } from './contact';
import { filterReduser } from './filter';

const reducer = combineReducers({
  contacts: contactsReduser,
  filter: filterReduser,
});

export const store = configureStore({ reducer });
