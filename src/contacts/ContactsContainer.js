import { connect } from 'react-redux';
import { editContact, deleteContact } from './contactActions';
import Contacts from './components/Contacts';


const mapStateToProps = (state, ownProps) => ({
  contacts: state.contacts
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  onDelete: (id) => {
    console.log('id', id);
    dispatch(deleteContact(id))
  },
  onEdit: (id) => {
    console.log('id', id);
    dispatch(editContact(id))
  }
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Contacts)
