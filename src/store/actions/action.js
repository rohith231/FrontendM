import * as actionType from '../actionType';

export const checkPatientLoggedIn = () => {
    return {
        type: actionType.IS_USER_LOGGED_IN
    }
}