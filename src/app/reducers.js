import { combineReducers } from 'redux';
import contacts from '../../contacts/contactsReducer';
import visibilityContactForm from '../../contactForm/visibilityContactFormReducer';

export default combineReducers({
  contacts,
  visibilityContactForm
});
