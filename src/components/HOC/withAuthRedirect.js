import React from "react";

//удалить этот ХОК если не нужен будет,пока для практики
export const withAuthRedirect = (Component) => {
    class RedirectComponent extends React.Component {
        render() {
            /*if (!this.props.isAuth) {
                return < Redirect to="./login"/>
            }*/
            return <Component {...this.props} />
        }
    }

    return RedirectComponent;
};
