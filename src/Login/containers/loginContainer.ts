import { AppState } from "../../Shared/AppState";
import { bindActionCreators, Dispatch, Action } from "redux";
import { Login, LoginProps } from "../components/Login";
import { connect } from "react-redux";

const mapStateToProps = (state: AppState, ownProps: LoginProps) => {
    ownProps = { ...state.loginState };
    return ownProps;
};

const mapDispatchToProps = (dispatch: Dispatch<Action>) => {
    return bindActionCreators({}, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);