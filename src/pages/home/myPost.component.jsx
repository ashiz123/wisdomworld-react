import React from 'react';
import './home.styles.css';
import {getPostsError, getPosts, getPostsPending} from '../../redux/posts/post.reducers';
import PostRender from '../../components/PostsRender/postsRender.component';

export default function MyPost({allPosts}) {
    return (
        <div>
             <div style={{marginTop:-30, padding: 0}}>
          {
            (allPosts) ?
            allPosts.filter((post, idx) => idx < 2).map(({id, ...otherPostProps})  => {
              return(
                 <PostRender key={id} {...otherPostProps}/>
              )
            }): <div style={{margin:50}}>
              {(getPostsPending)? <div>Loading...</div> : <div>Error on page</div>}
            </div>
        }
        </div>
        </div>
    )
}
