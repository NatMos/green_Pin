import React from "react";
import {Button} from "react-bootstrap";
import {Field, reduxForm} from "redux-form";
import PolicyComponentSingUp from "./PolicyComponentSingUp";
import {
    emailValidator,
    matchInput, passwordValidator,
    required, userNameValidator,
    validLengthCreator
} from "../../Utils/validators/validators";
import {InputFormsControl} from "../common/FormsControls/FormControls";

let maxLength25 = validLengthCreator(25)(1);
let minLength8 = validLengthCreator(25)(8);
let minLength3 = validLengthCreator(25)(3);

const SingUpForm = (props) => {
    const {error, dirty, handleSubmit, pristine, submitting} = props;

    return (
        <form onSubmit={handleSubmit}>
            <div className="log-userName">
                <Field
                    name="username"
                    component={InputFormsControl}
                    validate={[required, maxLength25, minLength3, userNameValidator]}
                    autoFocus
                    type="text"
                    placeholder="User Name"/>
            </div>
            <div className="log-email">
                <Field
                    name="email"
                    component={InputFormsControl}
                    autoFocus
                    type="email"
                    placeholder="Email"
                    validate={[required, emailValidator]}
                />
            </div>
            <div className="log-password">
                <Field
                    name="password1"
                    component={InputFormsControl}
                    validate={[required, minLength8, maxLength25, passwordValidator]}
                    autoFocus
                    type="password"
                    placeholder="Password Example:Nuf-Nuf-876*"

                />
            </div>

            {dirty && <div className="log-password">
                <Field
                    name="password2"
                    component={InputFormsControl}
                    validate={[required, minLength8, maxLength25, matchInput]}
                    autoFocus
                    type="password"
                    placeholder="Confirm Password"
                />
            </div>}

            {/*<div>
                <Field name="rememberMe"
                       component="input"
                       autoFocus
                       type="checkbox"
                />remember me
            </div>*/}

            <div className="area__verification">
                {error && <div className='error-login'>
                    <p>{error}</p>
                </div>
                }
            </div>

            <PolicyComponentSingUp/>

            <div className="area__sing-btn">
                <Button disabled={pristine || submitting} className="btn-singIn" block bsSize="large" type="submit"
                >
                    <span className="singIn-span-button">SingUp</span>
                </Button>
            </div>
        </form>
    )
};

export const SingUpReduxForm = reduxForm({form: "singUp"})(SingUpForm);
