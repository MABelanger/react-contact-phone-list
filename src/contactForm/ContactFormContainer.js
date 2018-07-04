import { connect } from 'react-redux';
import ContactForm from './ContactFormComponent';

const mapStateToProps = (state, ownProps) => ({
  contactFormVisibility: state.contactFormVisibility
});

const mapDispatchToProps = (dispatch, ownProps) => ({

})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ContactForm)
