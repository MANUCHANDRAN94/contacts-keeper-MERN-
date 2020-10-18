/**
 * !we cheeck to see if a topken is passesd
 * ! if it is then we're gonna set it to the main global header
 * ! if not we delete from the global header
 */

import axios from 'axios';

const setAuthToken = token => {

    if (token) {
        axios.defaults.headers.common['x-auth-token'] = token;
    } else {
        delete axios.defaults.headers.common['x-auth-token'];
    }

}
export default setAuthToken;