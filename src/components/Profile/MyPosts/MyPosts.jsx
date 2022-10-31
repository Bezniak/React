// import React from 'react';
// import p from './MyPosts.module.css';
// import Post from './Post/Post';
// import {updateNewPostText} from "../../../redux/state";
//
//
// const MyPosts = (props) => {
//     let postsElements =
//         props.post.map(p => <Post message={p.message} likesCount={p.likesCount}/>);
//
//
//     let newPostElement = React.createRef();
//
//     let addPost = () => {
//         props.addPost();
//     }
//
//     let onPostChange = () => {
//         let text = newPostElement.current.value;
//         props.updateNewPostText(text);
//     }
//
//     return (
//         <div className={p.postsBlock}>
//             <h3>My post</h3>
//             <div>
//                 <div>
//                     <textarea onChange={onPostChange} ref={newPostElement} value={props.newPostText}/>
//                 </div>
//                 <div>
//                     <button onClick={addPost}>Add post</button>
//                 </div>
//             </div>
//             <div className={p.posts}>
//                 {postsElements}
//             </div>
//         </div>);
// }
//
// export default MyPosts;


import React from 'react';
import p from './MyPosts.module.css';
import Post from './Post/Post';
import {useState} from 'react';

const MyPosts = (props) => {
    const [postsItems, setPostsItems] = useState([
        props.post.map(p =>
            <Post key={p.id} message={p.message} likesCount={p.likesCount}/>
        )
    ]);

    let newPostInput = React.createRef();

    let addPost = () => {
        let text = newPostInput.current.value;
        let nextId = Math.floor(Math.random() * 1000);

        if (text) {
            let newPostItem = <Post key={nextId} id={nextId} message={text} likesCount={0}/>;
            setPostsItems((postsItems) => [...postsItems, newPostItem]);
        }
        newPostInput.current.value = '';
    }


    return (
        <div className={p.postsBlock}>
            <h3>My post</h3>
            <div>
                <div>
                    <textarea ref={newPostInput}></textarea>
                </div>
                <div>
                    <button onClick={addPost}>Add post</button>
                </div>
            </div>
            <div className={p.posts}>
                {postsItems}
            </div>
        </div>);
}

export default MyPosts;



