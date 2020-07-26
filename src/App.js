import React , {useState, useEffect} from 'react';
import Post from "./Components/Post";
import {db} from "./firebase.js";
import './App.css';


function App() {
  const [posts, setPosts]= useState([]);

  useEffect ( () => {
    db.collection('posts').onSnapshot(snapshort =>{
      setPosts(snapshort.docs.map(doc => doc.data()));
    })
  }, [])

  return (
    <div className="app">
    
     <div className="app_header">
       <h1
       className="app_logo"
       alt="logo">
         Vartalapp
       </h1>
     </div>

   {
    posts.map ( post => (
      <Post 
      imgURL={post.imgURL}
      username= {post.username}
      caption= {post.caption}
      />
    ))
    }
   
    


    </div>
  );
}

export default App;
