import { bindActionCreators, Action, Dispatch } from 'redux';
import { connect } from 'react-redux';
import { refresh } from '../reducers/actions';
import { State } from '../../Shared/State';
import { App } from "../components/App";
import { AppProps } from '../Props';

const mapStateToProps = (state: State, ownProps: AppProps) => {
    ownProps.mainState = state.mainState;
    return ownProps;
  };
  
  const mapDispatchToProps = (dispatch: Dispatch<Action>) => {
    return bindActionCreators({ refresh }, dispatch);
  };
  
  export default connect(mapStateToProps, mapDispatchToProps)(App);