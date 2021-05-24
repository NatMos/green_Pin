import {reportFormAPI} from "../api/api";
import {
    closeReportForm,
    setModalError,
    setModalGeo,
    setModalSelect,
    toggleBtnClickedProgress
} from "./mainContainerReducer";

const ON_CHANGE_NOTE_MAP = 'ON_CHANGE_NOTE_MAP';
const ON_CHANGE_NOTE_DESCRIPTION = 'ON_CHANGE_NOTE_DESCRIPTION';
const ON_CHANGE_SELECT_PROBLEM = 'ON_CHANGE_SELECT_PROBLEM';
const SET_ERROR_RESPONSE_DATA = 'SET_ERROR_RESPONSE_DATA';

let initialState = {
    note1:
        {value: ''},
    note2:
        {value: ''},
    selectedOption: '',

    image: [],
    errorResponseData: ''
};

const reportFormReducer = (state = initialState, action) => {

    switch (action.type) {
        case ON_CHANGE_NOTE_MAP:
            return {
                ...state,
                note1: {value: action.text}
            };
        case ON_CHANGE_NOTE_DESCRIPTION:
            return {
                ...state,
                note2: {value: action.text}
            };
        case ON_CHANGE_SELECT_PROBLEM:
            return {
                ...state,
                selectedOption: action.selectedOption
            };

        case SET_ERROR_RESPONSE_DATA:
            return {
                ...state,
                errorResponseData: action.errorResponseData
            };
        default:
            return {...state};
    }
};


//actionCreators

export const onChangeNoteMap = (text) => ({type: ON_CHANGE_NOTE_MAP, text});
export const onChangeNoteDescription = (text) => ({type: ON_CHANGE_NOTE_DESCRIPTION, text});
export const onChangeSelectProblem = (selectedOption) => ({type: ON_CHANGE_SELECT_PROBLEM, selectedOption});
export const setErrorResponseData = (errorResponseData) => ({type: SET_ERROR_RESPONSE_DATA, errorResponseData});


//thunkCreator
export const sendReportForm = (selectedOption, geo, username, img, note1, note2) => {

    if (!geo) {
        return (dispatch) => dispatch(setModalGeo(true))
    }
    let category = selectedOption.id;

    if (!category) {
        return (dispatch) => dispatch(setModalSelect(true))
    }

    return (dispatch) => {
        dispatch(toggleBtnClickedProgress(true));
        reportFormAPI.postReportForm(selectedOption, geo, username, img, note1, note2)
            .then(response => {
                console.log("Successful" + response);
                dispatch(closeReportForm(true, false));
                dispatch(toggleBtnClickedProgress(false))
            }).catch((error) => {
            console.log("error", error );
            if (error.response.status === 400) {
                dispatch(setErrorResponseData(error.response.data));
                dispatch(setModalError(true));
                dispatch(toggleBtnClickedProgress(false));
            }else{
                dispatch(setErrorResponseData("Something went wrong, please try again"));
                dispatch(setModalError(true));
                dispatch(toggleBtnClickedProgress(false));
            }
        });
    }
};

export default reportFormReducer;
