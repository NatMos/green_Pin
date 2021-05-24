export const BASE_URL =
  "https://arcane-eyrie-30848.herokuapp.com";

export const errorAuthLogin = "Unable to log in with provided credentials.Password or User Name is incorrect";
export const errorFieldEmpty = "This field cannot be empty";

export const options = [
    {value: 'Chopping', label: 'Chopping', id: 1},
    {value: 'Garbage dump', label: 'Garbage dump', id: 2},
    {value: 'Set fire to the grass', label: 'Set fire to the grass', id: 3},
    {value: 'Fire', label: 'Fire', id: 4},
    {value: 'Quarry (clay or sand mining)', label: 'Quarry (clay or sand mining)', id: 5},
    {value: 'New development', label: 'New development', id: 6},
    {value: 'Collection of rare plants', label: 'Collection of rare plants', id: 7},
    {value: 'Poaching', label: 'Poaching', id: 8},
    {value: 'Other', label: 'Other', id: 9},
];

export const customStyles = {
    option: (provided, state) => ({
        ...provided,
        color: state.isSelected ? 'white' : 'black',
        background: state.isSelected ? '#78B0A0' : '#F7F7F7',
    })
};

//export let pinStatus ;