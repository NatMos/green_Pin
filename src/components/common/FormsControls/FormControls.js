import React from "react";

export const InputFormsControl = ({input, meta, ...props}) => {
    let hasError =  meta.touched && meta.error ;

    return (
            <div >
                <input  {...input}{...props}/>
                {hasError && <span className="errorForms">{meta.error}</span> }
            </div>
    )
}

