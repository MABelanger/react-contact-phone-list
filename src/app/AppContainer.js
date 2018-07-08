import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import AppComponent from './AppComponent';

import { displayContactForm } from './appActions';

const mapStateToProps = (state, {match}) => ({
  pathParam: match.params.pathParam || 'default'
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  onDisplayContactForm: () => dispatch(displayContactForm(true))
})

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(AppComponent));
