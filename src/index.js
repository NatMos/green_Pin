import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import store from "./redux/reduxStore";
import {Provider} from "react-redux";



ReactDOM.render(
    <React.StrictMode>

        <div className="wrapper">
            <Provider store={store}>
                <App/>
            </Provider>
        </div>

    </React.StrictMode>,
    document.getElementById("root")
);



