import React from 'react';
const InProgressChangedStatusModal = props => {
    const {problemStatus, onCloseConfirm} = props;
    console.log(problemStatus);
    return (
        <div className='confirmModalRemove'>
            <button className="btn-modal-close-confirm-status-change"
                    onClick={onCloseConfirm}> x
            </button>
            <p > Status changed</p>
            <p className="confirm-status-change"> New Status: {problemStatus}</p>
        </div>
    )
};

export default InProgressChangedStatusModal;
