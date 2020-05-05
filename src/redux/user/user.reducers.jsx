
import React from 'react';
import {UserActionTypes} from './user.actionTypes';

const initialState ={
 currentUser: {

 }   
}

export function UserReducer(state= initialState , action) {
    switch (action.type) {
       case UserActionTypes.LOGIN_USER:
        return {...state, currentUser: action.payload}

        default:
        return state;
    }
    }
  