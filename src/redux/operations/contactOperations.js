import axios from "axios"

import { addNewContactRequest,
  addNewContactSuccess,
  addNewContactError,
  getContactsRequest,
  getContactsSuccess,
  getContactsError,
  deleteContactRequest,
  deleteContactSuccess,
  deleteContactError} from "../actions/formActions"


const addNewContactOperation = (contact) => async (dispatch, getState) => {
    dispatch(addNewContactRequest());

    const localId = getState().auth.localId;
    const idToken = getState().auth.idToken;
    console.log(localId);
    console.log(idToken);

    try { 
        const response = await axios.post(`${process.env.REACT_APP_BASE_URL}/${localId}/contacts.json?auth=${idToken}`, contact)
        dispatch(addNewContactSuccess({ ...contact, id: response.data.name }))
    } catch (error) {
        dispatch (addNewContactError(error))
    }    
}

const getContactOperation = () => async (dispatch, getState) => {
    dispatch(getContactsRequest());

    const localId = getState().auth.localId;
    const idToken = getState().auth.idToken;

    try {
        const response = await axios.get(`${process.env.REACT_APP_BASE_URL}/${localId}/contacts.json?auth=${idToken}`)
    
        const contacts = response.data ?
            Object.keys(response.data).map((key) => ({
                ...response.data[key],
                id: key
            })) : [];
        dispatch(getContactsSuccess(contacts))
    } catch (error) {
        dispatch(getContactsError(error))
    }
}

const deleteContactOperation = (id) => (dispatch, getState) => {
    dispatch(deleteContactRequest());

    const localId = getState().auth.localId;
    const idToken = getState().auth.idToken;

    try {
        axios 
            .delete(`${process.env.REACT_APP_BASE_URL}/${localId}/contacts/${id}.json?auth=${idToken}`)
            .then(()=>dispatch(deleteContactSuccess(id)))
    } catch (error) {
        dispatch(deleteContactError(error))
    } 
}

export{addNewContactOperation, getContactOperation, deleteContactOperation}