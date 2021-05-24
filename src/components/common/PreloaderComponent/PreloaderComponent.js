import React from "react";
import preloader from "../../../assets/img/preloader.gif"

const PreloaderComponent =(props)=>{
    return(
    <div>
        <img className='preloader_main' src={preloader}/>
        <div className='preloader_main'>Loading...</div>
    </div>
    )
};
export default PreloaderComponent;