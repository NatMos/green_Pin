import React from 'react';
import {Link} from "react-router-dom";


const NeedAuthorizedModal = props => {
    const {onClose} = props;
    return (
        <div className="done-pass">
            <h4>To change the status you need to be an authorized user</h4>
            <div><Link to='/login'>log In </Link> /<Link to='/singIn'> Create account</Link></div>
            <button className=" btn-close-pass" onClick={onClose}> X</button>
        </div>
    );
};

export default NeedAuthorizedModal;
