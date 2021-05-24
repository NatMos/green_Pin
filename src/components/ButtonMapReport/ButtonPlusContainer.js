import React from "react";
import {ButtonPlus} from "../index.js";
import {toggleModal} from "../../redux/mainContainerReducer";
//import StoreContext from "../StoreContex";
import {connect} from "react-redux";
import {getBtnClickedProgress} from "../../redux/selectors";


//export const ClickedContextMarker = React.createContext(null);

/*
export function ButtonPlusContainer() {




    return (
        <StoreContext.Consumer>
            {
                store => {
                    let onToggleModal = (e) => {
                        e.preventDefault();
                        store.dispatch(toggleModalActionCreator());
                    };

                    return <ButtonPlus
                        onClickBtn={onToggleModal}
                    />
                }
            }
        </StoreContext.Consumer>

    );
}
*/

/*let mapDispatchToProps =(dispatch)=>{
    return {
        toggleModal:(e)=>{
            e.preventDefault();
            dispatch(toggleModal());
        }
    }
}*/
let mapStateToProps=(state)=>{
    return {
        btnClickedProgress:getBtnClickedProgress(state)
    }
};

export const ButtonPlusContainer = connect (mapStateToProps,{toggleModal})(ButtonPlus);
