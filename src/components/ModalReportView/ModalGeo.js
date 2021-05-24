import React from 'react';
import './Modal.css';

const ModalGeo = (props) => {
    const {onClose} = props;
    return (
        <>
            <div className='modalGeo'>
                <p className="modalStepGeo">Please select a place on the big map!!!
                </p>
                <button className="modal-close"
                        onClick={onClose}>x
                </button>
            </div>
        </>
    )
}

export default ModalGeo;
