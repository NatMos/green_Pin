import React from "react";
import {connect} from "react-redux";
import {Navbar} from "./Navbar";
import {sendLogOut} from "../../redux/AuthReducer";

let mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth,
        username:state.auth.username
    }
};

export default connect(mapStateToProps,{sendLogOut})(Navbar);
