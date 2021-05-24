import React from 'react';
import {onCloseConfirm} from "../../redux/InfoWindowMarkerReducer";
import InProgressChangedStatusModal from "./InProgressChangedStatusModal";

const ChangeStatusProblemModalComponent = props => {
    const {problemStatus,showStatusInProgressModal,showStatusAcceptedModal,showStatusDoneModal,
        onCloseConfirm, setStatusInProgressModal} = props;

    return (
        <div className='confirmModalRemove'>
            <button className="btn-modal-close-confirm-status-change"
                    onClick={onCloseConfirm}> x
            </button>
            <p >Current status: {problemStatus}</p>
            <p className="confirm-status-change">Update status </p>

            <button className='btn-status-change-inProgress'
                    onClick={setStatusInProgressModal(1)}
            >
                <span>In progress</span>
            </button>

            <button className='btn-status-change-accepted'
                    onClick={setStatusInProgressModal(2)}
            >
                <span>Accepted</span>
            </button>

            <button className='btn-status-change-done'
                    onClick={setStatusInProgressModal(3)}
            >
                <span>Done</span>
            </button>

            {
                showStatusInProgressModal && <InProgressChangedStatusModal problemStatus={problemStatus} />
            }
        </div>
    )
};

export default ChangeStatusProblemModalComponent;
