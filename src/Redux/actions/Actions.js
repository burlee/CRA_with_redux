import {
    INCREMENT,
}
    from './types';
import axios from 'axios';



export const increment = (startPagination, endPagination) => dispatch => {
    console.log('Increment')
    dispatch({
         type: INCREMENT
    })
};