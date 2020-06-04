import {ProfileActionTypes} from './profile.actiontypes';

const intitialState = {
    currentUser: false,
    posts : {},
    status: null,
    error: null
}


export const ProfileReducers = (state = intitialState, action ) => 
{
    switch(action.type)
    {
        case(ProfileActionTypes.PROFILE_PENDING):
         return {...state, currentUser:false, posts: {}, status:'pending', error:null}

         case(ProfileActionTypes.PROFILE_SUCCESS):
         return {...state, currentUser:true, posts:action.payload, status:'success', error:null}

         case(ProfileActionTypes.PROFILE_ERROR):
         return {...state, currentUser:false,  error:action.payload, status:'failed'}

        default: 
      return state;
    }

    

}