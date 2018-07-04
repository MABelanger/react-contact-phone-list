import { connect } from 'react-redux';
import AppComponent from './AppComponent';

import { displayContactForm } from './appActions';

const mapStateToProps = (state, ownProps) => ({

});

const mapDispatchToProps = (dispatch, ownProps) => ({
  onDisplayContactForm: () => dispatch(displayContactForm(true))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AppComponent)
