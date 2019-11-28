import { bindActionCreators, Action, Dispatch } from 'redux';
import { connect } from 'react-redux';
import { refresh } from '../reducers/actions';
import { AppState } from '../../Shared/AppState';
import { Main, MainProps } from "../components/Main";

const mapStateToProps = (state: AppState, ownProps: MainProps) => {
  ownProps = {...state.mainState};
  return ownProps;
};

const mapDispatchToProps = (dispatch: Dispatch<Action>) => {
  return bindActionCreators({ refresh }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Main);