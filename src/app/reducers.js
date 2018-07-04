import { combineReducers } from 'redux';
import contacts from '../contacts/contactsReducer';
import contactFormVisibility from '../contactForm/contactFormVisibilityReducer';

export default combineReducers({
  contacts,
  contactFormVisibility
});
