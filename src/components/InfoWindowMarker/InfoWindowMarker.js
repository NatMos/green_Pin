import React from "react";
import pen from "../../assets/icon/pen.svg";
import camera from "../../assets/icon/camera.svg";
import NeedAuthorizedModal from './NeedAuthorizedModal.js';

import styled, {keyframes} from "styled-components";
import {flipInX} from "react-animations";
import ChangeStatusProblemModal from "./ChangeStatusProblemModal";

const Flip = styled.div`
  animation: 0.5s ${keyframes`${flipInX}`};
`;


export const InfoWindowMarker = props => {

    const {img, title, comment, status_pin} = props.dataInfoModal;
    const {
        showModalDone, showModalRemove, isAutorization, problemStatus, toggleMarkerClickedInfo, toggleModalDone,
        onClosePass, renderSwitchProblemStatus, removeMarker
    } = props;

    {
        status_pin && renderSwitchProblemStatus(status_pin)
    }

    return (
        <div className="icon-info-modal">
            <Flip>
                <div className="container-info">
                    <div className="img-info-modal">
                        <div className="header-modal"><span>Information</span></div>

                        <div className="description-problem-modal">
                            <div className="description-head">
                                    <span>
                                    <img src={pen} alt="" className="icon"/>
                                    </span>
                                <h5>Description of the problem</h5>
                            </div>
                            <div className="description-type-problem">
                                <h5>Type: </h5><span>{title ? title.toUpperCase() : ""}</span>
                            </div>
                            <div className="description-status-problem">
                                <h5>Problem Status: </h5><span>{problemStatus}</span>
                            </div>
                        </div>
                        <div className="heading-photo">
                            <img src={camera} alt="icon" className="icon"/>
                            <p>Photo</p>
                        </div>
                        {img ? (
                            <div className="title-img-info-modal">
                                <img src={img} alt="img"/>
                            </div>
                        ) : (
                            <p className="error-photo">
                                Фотографии отсутствуют к данной метке.
                            </p>
                        )}
                        <p className="note">
                            {comment || (
                                <span className="error-photo">
                                            Комментарии отсутствуют к данной метке.
                                        </span>
                            )}
                        </p>
                    </div>
                    <div className="control-modal">
                        <button
                            className="btn-close-problem-icon"
                            onClick={toggleMarkerClickedInfo}
                        >
                            X
                        </button>
                        <button
                            className="doneMarker"
                            onClick={toggleModalDone}
                        ><span>CHANGE STATUS</span></button>
                    </div>

                    {
                        (showModalDone && !isAutorization) && <NeedAuthorizedModal
                            onClose={onClosePass}
                        />
                    }

                    {
                        (showModalRemove && isAutorization) && <ChangeStatusProblemModal
                            onSubmit={removeMarker}
                            //onClose={onCloseConfirm}
                        />
                    }

                </div>
            </Flip>
        </div>
    )
};