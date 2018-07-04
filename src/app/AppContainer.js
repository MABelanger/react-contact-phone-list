import { connect } from 'react-redux';
import { addContact, saveContact, deleteContact } from '../actions';
import AppComponent from './AppComponent';


const mapStateToProps = (state, ownProps) => ({
  contacts: state.contacts,
  visibilityContactForm: state.visibilityContactForm
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  onAddContact: () => dispatch({type: 'VISIBILITY_CONTACT_FORM', visibility: true})
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AppComponent)