import React from 'react';
import {
    getProblemStatus,
    getShowModalRemove,
    getShowStatusAcceptedModal, getShowStatusDoneModal,
    getShowStatusInProgressModal
} from "../../redux/selectors";
import {connect} from "react-redux";
import { onCloseConfirm} from "../../redux/InfoWindowMarkerReducer";
import ChangeStatusProblemModalComponent from "./ChangeStatusProblemModalComponent";
import {setStatusInProgressModal} from "../../redux/mainContainerReducer";

const ChangeStatusProblemModalContainer =props=>{
    return (
        <ChangeStatusProblemModalComponent {...props} />
    )
}

let mapStateToProps =state=>{
    return{
        problemStatus: getProblemStatus(state),
        showModalRemove: getShowModalRemove(state),
        showStatusInProgressModal: getShowStatusInProgressModal(state),
        showStatusAcceptedModal: getShowStatusAcceptedModal(state),
        showStatusDoneModal:getShowStatusDoneModal(state)
    }
};

const ChangeStatusProblemModal = connect(mapStateToProps,{onCloseConfirm, setStatusInProgressModal})(ChangeStatusProblemModalContainer);

export default ChangeStatusProblemModal;