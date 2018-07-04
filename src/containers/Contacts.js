import { connect } from 'react-redux';
import { addContact, saveContact, deleteContact } from '../actions';
import Contacts from '../components/Contacts';


const mapStateToProps = (state, ownProps) => ({
  contacts: state.contacts,
  visibilityContactForm: state.visibilityContactForm
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  onAddContact: () => dispatch({type: 'VISIBILITY_CONTACT_FORM', visibility: true}),
  onDeleteContact: (id) => dispatch({type: 'DELETE_CONTACT', id})
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Contacts)
