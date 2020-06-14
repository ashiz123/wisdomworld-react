
import {combineReducers} from 'redux';
import {RegisterReducer} from './register/register.reducers';
import {LoginFormReducers} from './loginForm/loginForm.reducers'
import { PostReducers } from './posts/post.reducers';
import { ProfileReducers } from './profile/profile.reducer';
import {TagsReducer} from './tags/tags.reducer';
import { TagPostsReducers } from './posts/tagPosts.reducers';
import {FollowUserReducer} from './followUser/followUser.reducers';
import {followUserPostsReducers} from './followUserPosts/followUserPosts.reducers';
import {currentUserTagsReducer} from './CurrentUserTags/currentUserTags.reducers';
import {notificationReducers} from './notifications/notifications.reducers';
import {persistReducer} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
// import { reducer as formReducer } from 'redux-form';



const persistConfig = {
  key: 'root',
  storage, 
  whitelist: ['register', 'post' ]
}


 const rootReducer = combineReducers({
  register: RegisterReducer, //User login, setting current user, registeration
  post: PostReducers,
  profile: ProfileReducers,
  LoginFormOpen : LoginFormReducers,
  Tag: TagsReducer,
  TagPosts: TagPostsReducers,
  FollowUser: FollowUserReducer,
  FollowUserPosts: followUserPostsReducers,
  CurrentUserTags: currentUserTagsReducer,
  Notification : notificationReducers

  // form: formReducer
});



export default persistReducer(persistConfig, rootReducer);