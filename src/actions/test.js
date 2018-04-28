import { TEST, FETCH_TEST } from './types';

export function plsHelpMe() {
    return function(dispatch) {
        console.log("plsHelpMe Test!!!");

        dispatch({
            type: FETCH_TEST,
            payload: {
                "data": "this is like a test"
            }
        });
      }
}