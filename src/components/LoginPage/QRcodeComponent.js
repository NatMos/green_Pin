import React from "react";
import appStore from "../../assets/img/appStore.png";
import Play from "../../assets/img/Play.png";

const QRcodeComponent = (props) => {
    return (
        <div className="what__qrcode-zone">
            <p className="qrInfo">We recommend you to download a Green Pin mobile app.</p>
            <div className="qrCode-zone">
                <button type="button" className="qrCode"><img src={appStore}
                                                              alt="qrCodeAppStore"/>
                </button>
                <button type="button" className="qrCode"><img src={Play}
                                                              alt="qrCodePlayMarket"/>
                </button>
            </div>
        </div>
    )
};

export default QRcodeComponent;
