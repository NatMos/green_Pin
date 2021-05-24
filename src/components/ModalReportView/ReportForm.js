import React from 'react';
import ModalGeo from './ModalGeo.js';
import ModalSelect from './ModalSelect.js';
import ModalReportView from "./ModalReportComponent/ModalReportView.js"
import {connect} from "react-redux";
import {
    getBtnClickedProgress,
    getError, getErrorResponseData,
    getGeoPosition, getImages,
    getNoteMap,
    getNoteSelectPinsCategory,
    getSelectedOption, getShowModalError,
    getShowModalGeo, getShowModalSelect, getUserName
} from "../../redux/selectors";
import {
    closeModalError,
    closeModalGeo,
    closeModalSelect,
    closeReportForm, toggleBtnClickedProgress,
    toggleModalReport
} from "../../redux/mainContainerReducer";
import {
    onChangeNoteMap,
    onChangeNoteDescription,
    onChangeSelectProblem,
    sendReportForm
} from "../../redux/reportFormReducer";
import ModalError from "./ModalError";


const ReportFormContainer = (props) => {

    const {selectedOption, geo, username, img, note1, note2,
        showModalGeo, showModalSelect,showModalError, closeModalGeo, closeModalSelect,
        onChangeNoteMap,onChangeNoteDescription, errorResponseData, sendReportForm, closeModalError} = props;

    const updateNoteMap = (e) => {
        let text = e.target.value;
        onChangeNoteMap(text)
    };
    const updateNoteDescription = (e) => {
        let text = e.target.value;
        onChangeNoteDescription(text)
    };
    const onSubmit = () => {
        return sendReportForm(selectedOption, geo, username, img, note1, note2)
    };

    return (
        <>
            <ModalReportView {...props}
                             updateNoteMap={updateNoteMap.bind(this)}
                             updateNoteDescription={updateNoteDescription.bind(this)}
                             onSubmit={onSubmit.bind(this)}
                //handleChangeStatus={this.handleChangeStatus}
            />
            {
                showModalGeo && <ModalGeo
                    onClose={closeModalGeo}
                />
            }

            {
                showModalSelect && <ModalSelect
                    onClose={closeModalSelect}
                />
            }
            {
                showModalError && <ModalError
                    error = {errorResponseData}
                    onClose={closeModalError}
                />
            }
        </>
    );

};

let mapStateToProps = (state) => {
    return {
        selectedOption: getSelectedOption(state),
        geo: getGeoPosition(state),
        username: getUserName(state),
        image: getImages(state),
        note1: getNoteMap(state),
        note2: getNoteSelectPinsCategory(state),
        error: getError(state),
        showModalGeo: getShowModalGeo(state),
        showModalSelect: getShowModalSelect(state),
        showModalError:getShowModalError(state),
        errorResponseData:getErrorResponseData(state),
        btnClickedProgress:getBtnClickedProgress(state)
    }
};
const ReportForm = connect(mapStateToProps, {
    toggleModalReport, closeReportForm, closeModalGeo,
    closeModalSelect, onChangeNoteMap, onChangeNoteDescription,
    onChangeSelectProblem, sendReportForm, closeModalError,toggleBtnClickedProgress
})(ReportFormContainer);

export default ReportForm;