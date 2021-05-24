import React, {Component} from "react";
import styled, {keyframes} from "styled-components";
import {flipInX} from "react-animations";
import {
    getCategoryId,
    getDataInfoModal,
    getIsAuth,
    getPin, getProblemStatus,
    getShowModalDone,
    getShowModalRemove
} from "../../redux/selectors";
import {connect} from "react-redux";
import {compose} from "redux";
import {InfoWindowMarker} from "./InfoWindowMarker";
import {toggleMarkerClickedInfo} from "../../redux/mainContainerReducer";
import {
    onClosePass,
    renderSwitchProblemStatus,
    setDataInfoModal,
    toggleModalDone
} from "../../redux/InfoWindowMarkerReducer";

const Flip = styled.div`
  animation: 0.5s ${keyframes`${flipInX}`};
`;

class InfoIconProblemComponent extends Component {

    componentDidMount() {
        const {categoryId, pin, setDataInfoModal} = this.props;
        const infoModalId = categoryId;
        const dataInfoModal = pin.find((item) => item.id === infoModalId);
        setDataInfoModal(dataInfoModal);
    }


    removeMarker = e => {
        e.preventDefault();
        const {categoryId} = this.props;
        const pin = categoryId;
        fetch(`https://cors-anywhere.herokuapp.com/https://arcane-eyrie-30848.herokuapp.com/api/v1/pin/${pin}/`, {
            method: "DELETE",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json",
            }
        }).then(response => {
            response.text().then(data => {
                console.log("Successful" + data);
            })
        }).catch((error) => console.log("error", error));
        this.setState({
            showModalRemove: false
        });
    };


    render() {
        return (
            <InfoWindowMarker
                {...this.props}
            />
        );
    }
}

let mapStateToProps = (state) => {
    return {
        dataInfoModal: getDataInfoModal(state),
        showModalDone: getShowModalDone(state),
        showModalRemove: getShowModalRemove(state),
        isAutorization: getIsAuth(state),
        pin: getPin(state),
        categoryId: getCategoryId(state),
        problemStatus: getProblemStatus(state)
    }
};

const InfoIconProblem = compose(connect(mapStateToProps, {
    toggleMarkerClickedInfo, setDataInfoModal, toggleModalDone,
    onClosePass, renderSwitchProblemStatus
}))(InfoIconProblemComponent);

export default InfoIconProblem;