import React from 'react';
import './post.css';
const Posts = ({posts}) =>{
    return <ul className="list-group mb-4 list-unstyled">
        {posts.map(post=> 
         <li className="postLi" key={post.key}>
             <div className="insideLi">
             <img className="postImage" src={post.imagePath}/>
         <div class="li-head">hello
           <p>adfasdf aas dubb <br/>
           hbhbbihbhbihb</p>
         </div>
           <div class="li-head">Price
           <h1>$100.99</h1>
         </div>
         </div>
       </li>
            )}
       
    </ul>
}

export default Posts;