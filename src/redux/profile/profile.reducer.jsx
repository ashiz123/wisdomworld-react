import {ProfileActionTypes} from './profile.actiontypes';

const intitialState = {
    currentUser: false,
    posts : {}
}


export const ProfileReducers = (state = intitialState, action ) => 
{
    switch(action.type)
    {
        case(ProfileActionTypes.PROFILE_PENDING):
         return {...state, currentUser:false, posts: {}}

         case(ProfileActionTypes.PROFILE_SUCCESS):
         return {...state, currentUser:true, posts:action.payload}

        default: 
      return state;
    }

    

}