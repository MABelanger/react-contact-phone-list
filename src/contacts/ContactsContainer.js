import { connect } from 'react-redux';
import { addContact, saveContact, deleteContact } from './contactActions';
import Contacts from './components/Contacts';


const mapStateToProps = (state, ownProps) => ({
  contacts: state.contacts
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  onDeleteContact: (id) => dispatch({type: 'DELETE_CONTACT', id})
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Contacts)
