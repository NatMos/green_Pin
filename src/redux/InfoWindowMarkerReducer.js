import {pinsMapAPI} from "../api/api";
import {getIsAuth} from "./selectors";
import {changedProblemStatus} from "./mainContainerReducer";

const SET_DATA_IN_INFO_MODAL = 'SET_DATA_IN_INFO_MODAL';
const TOGGLE_MODAL_DONE = 'TOGGLE_MODAL_DONE';
const ON_CLOSE_CONFIRM = 'ON_CLOSE_CONFIRM';
const ON_CLOSE_PASS = 'ON_CLOSE_PASS';
const RENDER_SWITCH_PROBLEM_STATUS = 'RENDER_SWITCH_PROBLEM_STATUS';



let initialState = {
    dataInfoModal: {},
    showModalDone: false,
    showModalRemove: false,
    problemStatus: "Status unknown",

};

const InfoWindowMarkerReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_DATA_IN_INFO_MODAL:
            return {
                ...state,
                dataInfoModal: action.dataInfoModal
            };
        case TOGGLE_MODAL_DONE:
            return {
                ...state,
                showModalRemove: !state.showModalRemove,
                showModalDone: !state.showModalDone,
            };
        case ON_CLOSE_CONFIRM:
            return {
                ...state,
                showModalRemove: false
            };
        case ON_CLOSE_PASS:
            return {
                ...state,
                showModalDone: false
            };
        case RENDER_SWITCH_PROBLEM_STATUS:
            switch (action.status_pin) {
                case 1:
                    return {
                        ...state,
                        problemStatus: "In progress"
                    };
                case 2:
                    return {
                        ...state,
                        problemStatus: "Accepted"
                    };
                case 3:
                    return {
                        ...state,
                        problemStatus: "Done"
                    };
                default:
                    return {...state}
            }

        default:
            return {...state};
    }


};


//actionCreators
export const setDataInfoModal = (dataInfoModal) => ({type: SET_DATA_IN_INFO_MODAL, dataInfoModal});
//export const onClickCreateMarker = (lat, lng) => ({type: CLICK_CREATE_MARKER, lat, lng});
export const toggleModalDone = () => ({type: TOGGLE_MODAL_DONE});
export const onCloseConfirm = () => ({type: ON_CLOSE_CONFIRM});
export const onClosePass = () => ({type: ON_CLOSE_PASS});
export const renderSwitchProblemStatus = (status_pin) => ({type: RENDER_SWITCH_PROBLEM_STATUS, status_pin});



//thunkCreator
/*export const getPins = () => {
    return (dispatch) => {
        dispatch(toggleIsFetching(true));
        pinsMapAPI.getPins().then((response) => {
            dispatch(setPin(response.data));
            dispatch(toggleIsFetching(false));
        });
    }
};

}*/
export default InfoWindowMarkerReducer;