import {BASE_URL} from "../components/common/constans";


export const checkResponseStatus=(response)=> {
    if (response.status >= 200 && response.status < 300) {
        return response;
    } else {
        const error = new Error(response.statusText);
        error.response = response;
        throw error;
    }
}

export const pinsMapAPI = {
    getPins() {
        return fetch(`${BASE_URL}/api/v1/pin`, {
            method: "GET",
            mode: "cors",
            headers: {
                "Content-Type": "application/json"
            },
        })
    }
};

export const authAPI = {
    postLogin(username, password) {
        console.log('pass',password);
        console.log(777);
        return fetch(`${BASE_URL}/api/v1/rest-auth/login`, {
            method: "POST",
            mode: "cors",
            body: JSON.stringify({
                    username: username,
                    email: "",
                    password: password,
                }
            ),
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            }
        })
    },

    postLogOut() {
        return fetch(`${BASE_URL}/api/v1/rest-auth/logout/`, {
            method: "POST",
            mode: "cors",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            }
        })
    },
    postCreateAccount(username,email, password1,password2) {
        console.log('create account');
        return fetch(`${BASE_URL}/api/v1/rest-auth/registration/`, {
            method: "POST",
            mode: "cors",
            body: JSON.stringify({
                    username: username,
                    email: email,
                    password: password1,
                    password2: password2,
                }
            ),
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            }
        })
    },
};

export const reportFormAPI={
    postReportForm(selectedOption,geo,username,img,note1,note2){
        let lat = Number(geo.lat).toFixed(10);
        let lng = Number(geo.lng).toFixed(10);
        let category= selectedOption.id;

        return fetch(`${BASE_URL}/api/v1/pin`, {
            method: "POST",
            mode: "cors",
            body: JSON.stringify({
                    title: selectedOption.value,
                    location: {"lat_loc": lat, "lng_loc": lng},
                    category:category,
                    user: 1,//получить id при регистрации / залогинивании, Саша делает
                    img:[],
                    comment:note1 + ' ' + note2,
                    status_pin: 2
                }
            ),
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            }
        })
    }
};