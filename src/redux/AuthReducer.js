import {authAPI, checkResponseStatus} from "../api/api";
import {reset, stopSubmit} from "redux-form";
import {setPin, toggleIsFetching} from "./mainContainerReducer";
import {BASE_URL} from "../components/common/constans";
import * as axios from "axios/index";

const SET_LOGIN_TOKEN = 'SET_LOGIN_TOKEN';
const SET_ERROR_DATA = 'SET_ERROR_DATA';
const SET_IS_AUTH = 'SET_IS_AUTH';
const SET_IS_SHOW = 'SET_IS_SHOW';

let initialState = {
    username: null,
    email: null,
    password: null,
    password2: null,
    key: null,
    isAuth: false,
    isShow: false,
    userId: null//Саша дожен сделать в апи: при регистрации и логировании вместе с токеном возвращать userId
};


const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_LOGIN_TOKEN:
            return {
                ...state,
                key: action.data,
            };
        case SET_ERROR_DATA:
            return {
                ...state,
                error: action.error,
            };
        case SET_IS_AUTH:
            return {
                ...state,
                ...action.payload,
            };
        case SET_IS_SHOW:
            return {
                ...state,
                ...action.payload,
            };

        default:
            return state;
    }
}
//actionCreators
export let setAuthLoginToken = (key) => ({type: SET_LOGIN_TOKEN, data: key});
export let setAuthErrorData = (error) => ({type: SET_ERROR_DATA, error: error});
export let setIsAuth = (username, isAuth) => ({type: SET_IS_AUTH, payload: {username, isAuth}});
export let setIsShow = (password, isShow) => ({type: SET_IS_SHOW, payload: {password, isShow}});

//thunkCreator

export const sendLoginForm = (username, password) => (dispatch) => {
    return authAPI.postLogin(username, password).then((response) => {//получить id при регистрации / залогинивании, Саша делает
        return response.json();
    }).then((data) => {
        if (data.non_field_errors) {
            dispatch(
                stopSubmit("login", {_error: "Unable to log in with provided credentials. Password or email is incorrect"})
            )
        } else if (data.password) {
            dispatch(
                stopSubmit("login", {_error: "This field is required"})
            )
        } else {
            dispatch(setAuthLoginToken(data.key));
            dispatch(setIsAuth(username, true));
            dispatch(reset("login"));
        }
    }).catch((error) => {
        console.log("error", error);
        dispatch(
            stopSubmit("login", {_error: "Some error. Try again or later"})
        );
    });
};

export const sendLogOut = () => (dispatch) => {
    return authAPI.postLogOut().then(checkResponseStatus).then((response) => {
        response.json();
        console.log("Successful" + response);
        dispatch(setIsAuth(null, null, false));
    }).catch((error) => {
        console.log("error", error);
    });
};

export const sendCreateAccountForm = (username, email, password1, password2) => (dispatch) => {
    return authAPI.postCreateAccount(username, email, password1, password2).then(response => {
        console.log("status", response.status);
        console.log("data", response);
        let data = response;
        console.log("Successful" + data);
        dispatch(setAuthLoginToken(data));
        dispatch(setIsAuth(username, true));
        dispatch(reset("singUp"));
    }).catch((error) => {
        console.log("error", error.response.data.email[0]);
        let errorResponse = error.response.data;

        if (!errorResponse.username) {
            dispatch(
                stopSubmit("singUp", {_error: errorResponse.email[0]})
            );
        } else {
            dispatch(
                stopSubmit("singUp", {_error: errorResponse.username[0]})
            );
        }
        if (!errorResponse.email) {
            dispatch(
                stopSubmit("singUp", {_error: errorResponse.password[0]})
            );
        } else {
            dispatch(
                stopSubmit("singUp", {_error: "Some error. Try again or later"})
            );
        }

    })
};
export default authReducer;
