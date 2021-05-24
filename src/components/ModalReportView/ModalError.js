import React  from 'react';
import './Modal.css';

const ModalError = (props) => {
    const {error, onClose} = props;
    console.log(error);
    return (
        <div className='modalSelect'>
            {error}
            <button className="modal-close"
                    onClick={onClose}>x
            </button>
        </div>
    )
};

export default ModalError;
