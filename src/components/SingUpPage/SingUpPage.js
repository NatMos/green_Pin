import React from "react";
import FrameLogIn from "../../assets/img/FrameLogIn.png";
import {SingUpReduxForm} from "./SingUpForm";
import QRcodeComponentSingUp from "./QRcodeComponentSingUp";
import {Redirect} from "react-router-dom";

export function SingUpPage(props) {
    const{isAuth,sendCreateAccountForm}=props;

    const onSubmit = (formData) => {
        sendCreateAccountForm(formData.username,formData.email, formData.password1,formData.password2)
    };

    {
        if (isAuth){
            return  <Redirect to="/main"/>
        }
    }
    return (
        <div className="wrapper">
            <div className="content">
                <div className="area">
                    <div className="container">
                        <div className="area__row">
                            <div className="area__body">
                                <div className="area__singin-block">
                                    <div className="area__title">New member</div>
                                    <div className="area__form">
                                      < SingUpReduxForm onSubmit ={onSubmit}  />
                                    </div>

                                    <QRcodeComponentSingUp />
                                </div>
                            </div>
                            <div className="area-image">
                                <img src={FrameLogIn} alt="img" className="FrameLogIn"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
