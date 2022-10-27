import React from 'react';
import p from './Post.module.css';
import { ReactDOM } from 'react-dom/client';



const Posts = (props) => {
  console.log(props.message);
   return (
       <div>
           <div className={p.item}>
               <img
                   src="https://images.unsplash.com/photo-1628563694622-5a76957fd09c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aW5zdGFncmFtJTIwcHJvZmlsZXxlbnwwfHwwfHw%3D&w=1000&q=80"
                   alt=""
               />
                {props.message}
               <div>
                   <span>like</span> {props.likesCount}

               </div>
           </div>
       </div>

    

   );
}

export default Posts;