import React from 'react';
import './Modal.css';
import Container from 'react-bootstrap/Container'
import {connect} from "react-redux";
import {toggleModal, toggleModalReport} from "../../redux/mainContainerReducer";


const InfoModalReportForm = (props)=>{
    const{toggleModal, toggleModalReport}=props;
    return(
        <>
        <Container className='modalStep'>
            <p className="modalStepInfo">Please select a place on the map
            </p>
            <button
                className="modal-close"
                onClick ={toggleModal}
            >
                <p>X</p>
            </button>
            <button className= 'nextStep' onClick={toggleModalReport}>
                Continue
            </button>
        </Container>
        </>
    )
}


const  InfoModal=connect(null, {toggleModal,toggleModalReport})(InfoModalReportForm);

export default InfoModal;
