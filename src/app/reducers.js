import { combineReducers } from 'redux';
import contacts from '../contacts/contactsReducer';
import contactFormVisibility from '../contactForm/contactFormVisibilityReducer';
import contact from '../contact/contactReducer';

export default combineReducers({
  contact,
  contacts,
  contactFormVisibility
});
