import React, {Component} from "react";
import {MapComponent} from "../index.js";
import {connect} from "react-redux";
import {getPins, onClickCreateMarker, toggleMarkerClickedInfo} from "../../redux/mainContainerReducer";
import PreloaderComponent from "../common/PreloaderComponent/PreloaderComponent";
import {compose} from "redux";
import {withAuthRedirect} from "../HOC/withAuthRedirect";
import {
    getBtnClickedProgress,
    getCategoryId,
    getGeoPosition, getIsAuth,
    getIsFetching,
    getIsMarkerShown,
    getIsPinShow, getPin, getShowInfoIcon,
    getStatus_pin
} from "../../redux/selectors";


class MapComponentClass extends Component {
    componentDidMount() {
        this.props.getPins();
    }

    onMapClick = (e) => {
        const lat = e.latLng.lat();
        const lng = e.latLng.lng();
        console.log(typeof lat);
        return (
            this.props.onClickCreateMarker(lat, lng)
        )

    };

    render() {

        const {pin, isFetching, showInfoIcon, categoryId, isMarkerShown, position, toggleMarkerClickedInfo} = this.props;

        return (
            <>
                {isFetching
                    ? <PreloaderComponent/>
                    : < MapComponent
                        pin={pin}
                        isFetching={isFetching}
                        onClickCreateMarker={this.onMapClick.bind(this)}
                        isMarkerShown={isMarkerShown}
                        position={position}
                        showInfoIcon={showInfoIcon}
                        handleClickInfoIcon={toggleMarkerClickedInfo}
                        categoryId={categoryId}
                        /*onToggleShow={this.handlePinShow}*/
                    />
                }
            </>
        )
    }
}

let mapStateToProps = (state) => {
    return {
        isFetching: getIsFetching(state),
        pin: getPin(state),
        btnClickedProgress: getBtnClickedProgress(state),
        position: getGeoPosition(state),
        categoryId: getCategoryId(state),
        isPinShow: getIsPinShow(state),
        isMarkerShown: getIsMarkerShown(state),
        showInfoIcon: getShowInfoIcon(state),
        status_pin: getStatus_pin(state),
        isAuth: getIsAuth(state),
    }
};

export const MapComponentContainer = compose(connect(mapStateToProps, {
    getPins,
    onClickCreateMarker,toggleMarkerClickedInfo
}), withAuthRedirect)(MapComponentClass);
