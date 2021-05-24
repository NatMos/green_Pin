export const getIsFetching=(state)=>{
    return state.mainContainerPage.isFetching;
};
export const getPin=(state)=>{
    return state.mainContainerPage.pin;
};
export const getBtnClickedProgress=(state)=>{
    return state.mainContainerPage.btnClickedProgress;
};
export const getShowModal=(state)=>{
    return state.mainContainerPage.showModal;
};
export const getShowModal2=(state)=>{
    return state.mainContainerPage.showModal2;
};
export const getShowModalFinish = (state) => {
    return state.mainContainerPage.showModalFinish;
};

export const getShowModalGeo = (state) => {
    return state.mainContainerPage.showModalGeo;
};

export const getShowModalSelect = (state) => {
    return state.mainContainerPage.showModalSelect;
};
export const getShowModalError = (state) => {
    return state.mainContainerPage.showModalError;
};

export const getGeoPosition=(state)=>{
    return state.mainContainerPage.position;
};

export const getCategoryId=(state)=>{
    return state.mainContainerPage.categoryId;
};
export const getIsPinShow=(state)=>{
    return state.mainContainerPage.isPinShow;
};
export const getShowInfoIcon=(state)=>{
    return state.mainContainerPage.showInfoIcon;
};
export const getIsMarkerShown=(state)=>{
    return state.mainContainerPage.isMarkerShown;
};
export const getStatus_pin=(state)=>{
    return state.mainContainerPage.status_pin;
};
export const getError=(state)=>{
    return state.mainContainerPage.error;
};
export const getShowStatusInProgressModal = (state) => {
    return state.mainContainerPage.showStatusInProgressModal;
};
export const getShowStatusAcceptedModal = (state) => {
    return state.mainContainerPage.showStatusAcceptedModal;
};
export const getShowStatusDoneModal = (state) => {
    return state.mainContainerPage.showStatusDoneModal;
};






export const getNoteMap=(state)=>{
    return state.reportFormModal.note1.value;
};

export const getNoteSelectPinsCategory = (state) => {
    return state.reportFormModal.note2.value;
};

export const getSelectedOption = (state) => {
    return state.reportFormModal.selectedOption;
};

export const getImages = (state) => {
    return state.reportFormModal.image;
};
export const getErrorResponseData = (state) => {
    return state.reportFormModal.errorResponseData;
};

export const getUserName = (state) => {
    return state.auth.username;

};

export const getIsAuth = (state) => {
    return state.auth.isAuth;
};


export const getDataInfoModal = (state) => {
    return state.infoWindowMarkerIcon.dataInfoModal;
};
export const getShowModalDone = (state) => {
    return state.infoWindowMarkerIcon.showModalDone;
};
export const getShowModalRemove = (state) => {
    return state.infoWindowMarkerIcon.showModalRemove;
};
export const getProblemStatus = (state) => {
    return state.infoWindowMarkerIcon.problemStatus;
};



