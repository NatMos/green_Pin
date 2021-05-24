import {pinsMapAPI} from "../api/api";

const SET_PIN = 'SET_PIN';
const CLICK_CREATE_MARKER = 'CLICK_CREATE_MARKER';
const TOGGLE_MODAL = 'TOGGLE_MODAL';
const TOGGLE_MODAL_REPORT = 'TOGGLE_MODAL_REPORT';
const CLOSE_REPORT_FORM = 'CLOSE_REPORT_FORM';
const CROSS_TO_REPORT = 'CROSS_TO_REPORT';
const TOGGLE_FINISH_MODAL = 'TOGGLE_FINISH_MODAL';
const CLOSE_MODAL_GEO = 'CLOSE_MODAL_GEO';
const SET_MODAL_GEO = 'SET_MODAL_GEO';
const SET_MODAL_SELECT = 'SET_MODAL_SELECT';
const SET_MODAL_ERROR = 'SET_MODAL_ERROR';
const CLOSE_MODAL_SELECT = 'CLOSE_MODAL_SELECT';
const CLOSE_MODAL_ERROR = 'CLOSE_MODAL_ERROR';
const TOGGLE_isFETCHING = 'TOGGLE_isFETCHING';
const TOGGLE_BTN_CLICKED_PROGRESS = 'TOGGLE_BTN_CLICKED_PROGRESS';
const TOGGLE_MARKER_CLICKED_INFO = 'TOGGLE_MARKER_CLICKED_INFO';
const CHANGED_PROBLEM_STATUS = 'CHANGED_PROBLEM_STATUS';
const SET_STATUS_IN_PROGRESS_MODAL = 'SET_STATUS_IN_PROGRESS_MODAL';


let initialState = {
    isFetching: true,
    pin: [],
    btnClickedProgress: false,
    isProps: true,
    showModal: false,
    showModal2: false,
    showModalFinish: false,
    showModalGeo: false,
    showModalSelect: false,
    showModalError: false,
    position:
        {
            lat: null,
            lng: null
        },
    categoryId: "",
    isPinShow: true,
    showInfoIcon: false,
    isMarkerShown: false,
    status_pin: null,
    error: null,
    showStatusInProgressModal: false,
    showStatusAcceptedModal: false,
    showStatusDoneModal: false,
};

const mainContainerReducer = (state = initialState, action) => {

    let stateCopy;
    switch (action.type) {
        case SET_PIN:
            return {
                ...state,
                pin: [...state.pin, ...action.pin]
            };
        case CLICK_CREATE_MARKER:
            return {
                ...state,
                position: {
                    lat: action.lat,
                    lng: action.lng
                },
                isMarkerShown: true
            };
        case TOGGLE_MODAL:
            stateCopy = {...state};
            stateCopy.showModal = !stateCopy.showModal;
            stateCopy.btnClickedProgress = !stateCopy.btnClickedProgress;
            console.log("finisState", stateCopy);
            return stateCopy;
        case TOGGLE_MODAL_REPORT:
            return {
                ...state,
                showModal: false,
                showModal2: !state.showModal2
            };
        case CLOSE_REPORT_FORM:
            return {
                ...state,
                ...action.data,
            };
        case CROSS_TO_REPORT:
            return {
                ...state,
                showModalFinish: false,
                showModal2: true
            };
        case TOGGLE_FINISH_MODAL:
            return {
                ...state,
                showModalFinish: false,
            };
        case CLOSE_MODAL_GEO:
            return {
                ...state,
                showModal2: true,
                showModalGeo: !state.showModalGeo,
            };
        case SET_MODAL_GEO:
            return {
                ...state,
                showModalGeo: action.showModalGeo,
            };
        case SET_MODAL_SELECT:
            return {
                ...state,
                showModalSelect: action.showModalSelect,
            };
        case SET_MODAL_ERROR:
            return {
                ...state,
                showModalError: action.showModalError,
            };
        case CLOSE_MODAL_SELECT:
            return {
                ...state,
                showModal2: true,
                showModalSelect: !state.showModalSelect,
            };
        case CLOSE_MODAL_ERROR:
            return {
                ...state,
                showModal2: true,
                showModalError: !state.showModalError,
            };
        case TOGGLE_isFETCHING:
            return {
                ...state,
                isFetching: action.isFetching
            };
        case TOGGLE_BTN_CLICKED_PROGRESS:
            return {
                ...state,
                btnClickedProgress: action.isFetching
            };
        case TOGGLE_MARKER_CLICKED_INFO:
            return {
                ...state,
                showInfoIcon: !state.showInfoIcon,
                categoryId: action.elem

            };
        case CHANGED_PROBLEM_STATUS:
            return {
                ...state,
                status_pin: action.status

            };
        case SET_STATUS_IN_PROGRESS_MODAL:
            return {
                ...state,
                status_pin: action.status,
                showStatusInProgressModal: true,
                showModalRemove: !state.showModalRemove,
            };
        default:
            return {...state};
    }

    //записываем в копию только то что будет меняться
//когда будем менять pin или дкакие-то другие объекты,тогда копировать объект глубоко
    /* let stateCopy = {...state, pin:[...state.pin]};вместо двух строчек:
        let stateCopy = {...state};
        stateCopy.pin=[...state.pin,{
            id: 178,
            title: "Chopping",
            location: {lat_loc: 60.009374945928, lng_loc: 26.247414724976},
            category: 1,
            user: 1,
            status_pin: 2
        },]

     stateCopy.position = {...state.position};//делаем когда будет затронут стейт позишен

     */

};


//actionCreators
export const setPin = (pin) => ({type: SET_PIN, pin});
export const onClickCreateMarker = (lat, lng) => ({type: CLICK_CREATE_MARKER, lat, lng});
export const toggleModal = () => ({type: TOGGLE_MODAL});
export const toggleModalReport = () => ({type: TOGGLE_MODAL_REPORT});
export const closeReportForm = (showModalFinish, showModal2) => ({
    type: CLOSE_REPORT_FORM,
    data: {showModalFinish, showModal2}
});
export const crossToReport = () => ({type: CROSS_TO_REPORT});
export const closeFinishModal = () => ({type: TOGGLE_FINISH_MODAL});
export const closeModalGeo = () => ({type: CLOSE_MODAL_GEO});
export const setModalGeo = (showModalGeo) => ({type: SET_MODAL_GEO, showModalGeo});
export const setModalSelect = (showModalSelect) => ({type: SET_MODAL_SELECT, showModalSelect});
export const setModalError = (showModalError) => ({type: SET_MODAL_ERROR, showModalError});
export const closeModalSelect = () => ({type: CLOSE_MODAL_SELECT});
export const closeModalError = () => ({type: CLOSE_MODAL_ERROR});
export const toggleIsFetching = (isFetching) => ({type: TOGGLE_isFETCHING, isFetching});
export const toggleBtnClickedProgress = (isFetching) => ({type: TOGGLE_BTN_CLICKED_PROGRESS, isFetching});
export const toggleMarkerClickedInfo = (elem, categ) => ({type: TOGGLE_MARKER_CLICKED_INFO, elem, categ});
export const setStatusInProgressModal = (status) => ({type: SET_STATUS_IN_PROGRESS_MODAL, status});



//thunkCreator
export  const getPins = () => {
    return (dispatch) => {
        dispatch(toggleIsFetching(true));console.log(55555);
        pinsMapAPI.getPins().then((response) => {
            return response.json();
        })
            .then((data) => {
                dispatch(setPin(data));
                dispatch(toggleIsFetching(false));
            });
    }
};

export default mainContainerReducer;
