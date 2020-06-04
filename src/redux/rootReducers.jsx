
import {combineReducers} from 'redux';
import {RegisterReducer} from './register/register.reducers';
import {UserReducer} from './user/user.reducers';
import {LoginFormReducers} from './loginForm/loginForm.reducers'
import { PostReducers } from './posts/post.reducers';
import { ProfileReducers } from './profile/profile.reducer';
import {TagsReducer} from './tags/tags.reducer';
import { TagPostsReducers } from './posts/tagPosts.reducers';
import {FollowUserReducer} from './followUser/followUser.reducers';
import {followUserPostsReducers} from './followUserPosts/followUserPosts.reducers';
import {currentUserTagsReducer} from './CurrentUserTags/currentUserTags.reducers';
import {persistReducer} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
// import { reducer as formReducer } from 'redux-form';



const persistConfig = {
  key: 'root',
  storage, 
  whitelist: ['register', 'post', 'Tag', 'FollowUser', 'CurrentUserTags', 'profile', 'FollowUserPosts' ]
}


 const rootReducer = combineReducers({
  register: RegisterReducer,
  // user: UserReducer,
  post: PostReducers,
  profile: ProfileReducers,
  LoginFormOpen : LoginFormReducers,
  Tag: TagsReducer,
  TagPosts: TagPostsReducers,
  FollowUser: FollowUserReducer,
  FollowUserPosts: followUserPostsReducers,
  CurrentUserTags: currentUserTagsReducer

  // form: formReducer
});



export default persistReducer(persistConfig, rootReducer);