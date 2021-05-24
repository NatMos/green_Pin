import React from "react";
import {Field, reduxForm} from "redux-form";
import {Button} from "react-bootstrap";
import {Link} from "react-router-dom";
import PolicyComponent from "./PolicyComponent";
import {required} from "../../Utils/validators/validators";
import {InputFormsControl} from "../common/FormsControls/FormControls";


const LoginForm = (props) => {
    const {error, handleSubmit, pristine, submitting} = props;
    return (
        <form onSubmit={handleSubmit}>
            <div>
                <Field name="username"
                       component={InputFormsControl}
                       validate={[required]}
                       autoFocus
                    //type="text"
                       placeholder="User Name"
                />
            </div>
            <div>
                <Field name="password"
                       component={InputFormsControl}
                       validate={[required]}
                       autoFocus
                       type="password"
                       placeholder="Password"
                />
            </div>
            {/*<div>
                <Field name="rememberMe"
                       component="input"
                       autoFocus
                       type="checkbox"
                />remember me
            </div>*/}
            <div className="what__forgot-password">
                <button className="btn-forgot-password">
                    Forgot your password ?
                </button>

            </div>

            {
                error && <div className='error-login'>
                    <p>{error}</p>
                </div>
            }

            <PolicyComponent/>

            <div className="what__sing-btn">{/*add disabled at button*/}
                <Button disabled={pristine || submitting} className="btn-login" block bsSize="large" type="submit">
                    <span className="login-span-button">Login</span>
                </Button>

                <button className="btn-sing_in-link-redirect"><Link to='/SingUp'>
                    Sign In</Link>
                </button>
            </div>
        </form>
    )
};


export let LoginReduxForm = reduxForm({form: "login"})(LoginForm);
