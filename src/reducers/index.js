import { combineReducers } from 'redux';
import contacts from './contacts';
import visibilityContactForm from './visibilityContactForm';

export default combineReducers({
  contacts,
  visibilityContactForm
});
