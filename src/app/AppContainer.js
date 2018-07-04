import { connect } from 'react-redux';
import AppComponent from './AppComponent';


const mapStateToProps = (state, ownProps) => ({
  contacts: state.contacts,
  visibilityContactForm: state.visibilityContactForm
});

const mapDispatchToProps = (dispatch, ownProps) => ({})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AppComponent)
