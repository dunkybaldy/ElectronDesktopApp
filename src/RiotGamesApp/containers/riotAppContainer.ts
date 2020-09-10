import { AppState } from "../../Shared/AppState";
import { RiotAppProps, RiotApp } from "../components/RiotApp";
import { Action, bindActionCreators, Dispatch } from "redux";
import { connect } from "react-redux";

const mapStateToProps = (state: AppState, ownProps: RiotAppProps) => {
    ownProps = {...state.riotAppState};
    return ownProps;
  };
  
const mapDispatchToProps = (dispatch: Dispatch<Action>) => {
return bindActionCreators({ }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(RiotApp);