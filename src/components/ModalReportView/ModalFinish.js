import React from 'react';
import './Modal.css';
import Container from 'react-bootstrap/Container'
import {connect} from "react-redux";
import {closeFinishModal, crossToReport} from "../../redux/mainContainerReducer";

const ModalFinishReportForm = (props) => {
    const {crossToReport, closeFinishModal} = props;
    return (
        <>
            <Container className="modalStep">
                <p className='modalFinishText'>Your request are successfully saved
                </p>
                <button className="modal-close"
                        onClick={closeFinishModal}>X
                </button>
                <button className="btnModal-finish"
                        onClick={crossToReport}>
                    <p className='modal-finish'>Continue</p>
                </button>
            </Container>
        </>
    )
}
const ModalFinish = connect(null, {crossToReport, closeFinishModal})(ModalFinishReportForm);

export default ModalFinish;
