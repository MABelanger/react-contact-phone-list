import { connect } from 'react-redux';
import Contact from './ContactComponent';

import { addContact, saveContact, clearContact } from './contactActions';

const mapStateToProps = (state, ownProps) => ({
  contact: state.contact
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  addContact: (contact) => dispatch(addContact(contact)),
  saveContact: (contact) => {
    dispatch(saveContact(contact));
    dispatch(clearContact());
  }
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Contact)
