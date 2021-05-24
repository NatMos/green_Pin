import React from "react";
import FrameLogIn from "../../assets/img/FrameLogIn.png";
import {LoginReduxForm} from "./LoginForm";
import QRcodeComponent from "./QRcodeComponent";
import {Redirect} from "react-router-dom";


export function LogInPage(props) {
    // dispatch formsData to server
    const onSubmit = (formData) => {
        const {username, password} = formData;

        props.sendLoginForm(username, password);//sendLoginForm это не санккреэтор, это connect from
        // LogPageContainer через пропс отправил другую функцию с таким же названием - колбэк который принимает параметры
        // и внутри себя диспатчит санккреэйтор
    };

    {
        if (props.isAuth) {
            return <Redirect to="/main"/>
        }
    }
    return (
        <div className="wrapper">
            <div className="content">
                <div className="what">
                    <div className="container">
                        <div className="what__row">
                            <div className="what__body">

                                <div className="what__login-block">
                                    <div className="what__title">Member login</div>
                                    <div className="what__form">
                                        <LoginReduxForm onSubmit={onSubmit}/>
                                    </div>

                                    <QRcodeComponent/>
                                </div>
                            </div>

                            <div className="what-image">
                                <img src={FrameLogIn} alt="img" className="FrameLogIn"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
