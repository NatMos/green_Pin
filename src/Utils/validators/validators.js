import React from "react";

export const required = value => {

    if (value) return undefined;

    return "This field cannot be empty!!!"

};

export const validLengthCreator = maxLength => {
    return minLength => {
        return (value) => {
            if (value.length > minLength && value.length < maxLength) {
                return undefined;
            } else {
                if (value.length < minLength) {
                    return `Min length ${minLength} symbols`
                }
            }
            return `Max length ${maxLength} symbols`;
        }
    }
};

export const alphaNumeric = value =>
    value && /[^a-zA-Z0-9 ]/i.test(value)
        ? 'Only alphanumeric characters'
        : undefined;

export const matchInput = (value, allValues) => value === allValues.password1 ? undefined : 'Password does not match';


export const emailValidator = value => value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)
    ? 'Invalid email address'
    : undefined;

export const userNameValidator = value =>
    value && !/^[a-z0-9@.+_-]{3,16}$/i.test(value)
        ? 'Invalid User Name'
        : undefined;

export const passwordValidator = value =>
    value && !/^(?=.*[A-Z].*[A-Z])(?=.*[!@#$&*])(?=.*[0-9].*[0-9])(?=.*[a-z].*[a-z].*[a-z]).{8,}$/i.test(value)
        ? 'Invalid Password.' +
        ' Use different case of characters to create a password, the presence of letters, numbers ' +
        'and special characters (! @ # $ & *). Example:Nuf-Nuf-876 *'
        : undefined;
