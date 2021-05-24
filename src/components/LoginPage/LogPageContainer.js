import React from "react";
import {connect} from "react-redux";
import {LogInPage} from "./LogPage";
import {sendLoginForm} from "../../redux/AuthReducer";


const LogPageContainer =props=> {
        return (
            <LogInPage {...props}/>
        )
};

let mapStateToProps = (state) => {
    return {
        username: state.auth.username,
        email: state.auth.email,
        password: state.auth.password,
        error: state.auth.error,
        key: state.auth.key,
        isAuth: state.auth.isAuth,
        btnClickedProgress: state.mainContainerPage.btnClickedProgress,
    }
};

export default connect(mapStateToProps, {
    sendLoginForm
})(LogPageContainer);
