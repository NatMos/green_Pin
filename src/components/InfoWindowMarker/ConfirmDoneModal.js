import React from 'react';

const ConfirmDoneModal = props => {
    const {onSubmit, onClose} = props;
    return (
        <div className='confirmModalRemove'>
            <button className="btn-modal-close-confirm-status-change"
                    onClick={onClose}> x
            </button>
            <p className="confirm-status-change">Сonfirm status change</p>

            <button className='btn-confirm-status-change'
                    onClick={onSubmit}
            >
                <span>Confirm</span>
            </button>

        </div>
    )
};

export default ConfirmDoneModal;
