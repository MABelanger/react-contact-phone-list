import { connect } from 'react-redux';
import Contact from './ContactComponent';

import { saveContact, addContact } from './contactActions';

const mapStateToProps = (state, ownProps) => ({
  contact: state.contact
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  addContact: (contact) => dispatch(addContact(contact)),
  saveContact: (contact) => dispatch(saveContact(contact))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Contact)
