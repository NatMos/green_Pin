import React from 'react';
import './Modal.css';

const ModalSelect = (props) => {
    const {onClose} = props;
    return (
        <div className='modalSelect'>
            <p>Please select a type problem!!!
            </p>
            <button className="modal-close"
                    onClick={onClose}>x
            </button>
        </div>
    )
}

export default ModalSelect;
