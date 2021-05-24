import React from "react";
import {connect} from "react-redux";
import {
    sendCreateAccountForm,
    setIsShow
} from "../../redux/AuthReducer";
import {SingUpPage} from "./SingUpPage";
import {getIsAuth, getUserName} from "../../redux/selectors";


const SingUpPageContainer = (props) => {
    return (
        <SingUpPage {...props}
        />
    )
}


let mapStateToProps = (state) => {
    return {
        username: getUserName(state),
        email: state.auth.email,
        password1: state.auth.password,
        password2: state.auth.password2,
        key: state.auth.key,
        isAuth: getIsAuth(state),
        isShow: state.auth.isShow,
    }
}
export default connect(mapStateToProps, {
    sendCreateAccountForm, setIsShow
})(SingUpPageContainer);
