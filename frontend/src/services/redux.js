const initialState = {
    email: '',
    password: '',
    data: null,
    firstName: '',
    lastName: '',
    edit: false,
    error: '',
};

const SUBMIT_FORM = 'SUBMIT_FORM';
const GET_DATA = 'GET_DATA';
const PUT_DATA = 'PUT_DATA';
const EDITABLE = 'EDITABLE';
const ERROR = 'ERROR';

export function rootReducer(state = initialState, action) {
    console.log('Prev state' + state);
    switch (action.type) {
        case SUBMIT_FORM:
            return {...state, email: action.payload.email, password: action.payload.password};
        case GET_DATA:
            return {...state, data: action.payload.data};
        case PUT_DATA:
            return {...state, firstName: action.payload.firstName, lastName: action.payload.lastName}
        case EDITABLE:
            return {...state, edit: action.payload.edit}
        case ERROR:
            return {...state, error: action.payload.error}
        default:
            return state;
    }
}

export function submitForm(email, password) {
    return {type: SUBMIT_FORM, payload: {email, password}};
}

export function getData(data) {
    return {type: GET_DATA, payload: {data}}
}

export function putData(firstName, lastName) {
    return {type: PUT_DATA, payload: {firstName, lastName}};
}

export function editable(edit) {
    return {type: EDITABLE, payload: {edit}}
}

export function isError(error) {
    return {type: ERROR, payload: {error}}
}
