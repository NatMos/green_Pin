import React from "react";
import ReportForm from '../components/ModalReportView/ReportForm';
import InfoModal from '../components/ModalReportView/InfoModal';
import {ButtonPlusContainer} from "../components/ButtonMapReport/ButtonPlusContainer";
import {MapComponentContainer} from "../components/MapComponentMain/MapComponentContainer";
import {getShowModal, getShowModal2, getShowModalFinish} from "../redux/selectors";
import {connect} from "react-redux";
import ModalFinish from "../components/ModalReportView/ModalFinish";

const MainContainerPinsMap = (props) => {

    const {showModal, showModal2, showModalFinish} = props;

    return (

        <div className="main">
            <MapComponentContainer/>

            <ButtonPlusContainer/>

            {showModal && <InfoModal/>}

            {showModal2 && <ReportForm/>}
            {showModalFinish && <ModalFinish />}
        </div>
    );
};

let mapStateToProps = (state) => {
    return {
        showModal: getShowModal(state),
        showModal2: getShowModal2(state),
        showModalFinish: getShowModalFinish(state)
    }
};
let MainContainer = connect(mapStateToProps)(MainContainerPinsMap);

export default MainContainer
