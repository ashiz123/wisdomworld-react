
import {combineReducers} from 'redux';
import {RegisterReducer} from './register/register.reducers';
import {UserReducer} from './user/user.reducers';
import Register from '../components/register/register.component';
import { PostReducers } from './posts/post.reducers';
import { ProfileReducers } from './profile/profile.reducer';


 


const rootReducer = combineReducers({
  register: RegisterReducer,
  user: UserReducer,
  post: PostReducers,
  profile: ProfileReducers
});

export default rootReducer;