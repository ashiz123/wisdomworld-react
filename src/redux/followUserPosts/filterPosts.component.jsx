import {followUserPostsActionTypes} from './followUserPosts.actionTypes';


export function filterPosts(filtered, followUserPosts)
{

  return dispatch => {
      console.log(followUserPosts);
    var filteredPost = followUserPosts.filter(
        (post) => {
            console.log(filtered);
          return post.title.indexOf(filtered) !== -1;
        }
      )
    //   console.log(filteredPost);
    dispatch(filterFollowUserPosts(filteredPost))

  }
}


function filterFollowUserPosts(posts)
{
    return{
        type: followUserPostsActionTypes.FOLLOW_USER_FILTERING_POSTS,
        payloads : posts
    }
    
}