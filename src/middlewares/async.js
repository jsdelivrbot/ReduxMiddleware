export default function({ dispatch }) {
    return next => action => {
        //checks for action payload not to be a promise
        if (!action.payload || !action.payload.then) {
            return next(action);
        }

        action.payload
            .then( response => {
                return dispatch({ ...action, payload: response.data });
            });
    }
}