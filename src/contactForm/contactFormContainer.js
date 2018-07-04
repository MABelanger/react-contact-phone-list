import { connect } from 'react-redux';
import AppComponent from './AppComponent';


const mapStateToProps = (state, ownProps) => ({
  contactFormVisibility: state.contactFormVisibility
});

const mapDispatchToProps = (dispatch, ownProps) => ({

})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AppComponent)
