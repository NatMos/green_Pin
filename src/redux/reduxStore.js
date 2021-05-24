import {applyMiddleware, combineReducers, createStore} from "redux";
import thunk from 'redux-thunk';
import mainContainerReducer from "./mainContainerReducer";
import AuthReducer from "./AuthReducer";
import { reducer as formReducer } from 'redux-form'
import reportFormReducer from "./reportFormReducer";
import InfoWindowMarkerReducer from "./InfoWindowMarkerReducer";

let reducers = combineReducers({
        mainContainerPage: mainContainerReducer,
        reportFormModal: reportFormReducer,
        infoWindowMarkerIcon: InfoWindowMarkerReducer,
        auth: AuthReducer,
        form:formReducer,
}
);
let store = createStore(reducers, applyMiddleware(thunk));

export default store;
window.store = store;