import React from 'react';
import p from './MyPosts.module.css';
import Post from './Post/Post';


const MyPosts = (props) => {
    let postsElements =
        props.posts.map(p => <Post message={p.message} likesCount={p.likesCount} />);

    return (
        <div className={p.postsBlock}>
        <h3>My post</h3>
        <div>
            <div>
                <textarea></textarea>
            </div>
            <div>
                <button>Add post</button>
            </div>
        </div>
        <div className={p.posts}>
            {postsElements}
        </div>
    </div>);
}

export default MyPosts;