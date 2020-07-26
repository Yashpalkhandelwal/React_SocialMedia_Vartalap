import React, {useState, useEffect} from 'react';
import Post from "./Components/Post";
import {db} from "./firebase.js";
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import {Button} from "@material-ui/core";
import './App.css';

function getModalStyle() {
    const top = 50;
    const left = 50;

    return {
      top: `${top}%`, 
      left: `${left}%`, 
      transform: `translate(-${top}%, -${left}%)`};
}

const useStyles = makeStyles((theme) => ({
    paper: {
        width: 400,
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3)
    }
}));

function App() {
   const classes = useStyles();
   const [modalStyle] = useState(getModalStyle);
    const [posts, setPosts] = useState([]);
    const [open, setOpen] = useState(false);

    useEffect(() => {
        db
            .collection('posts')
            .onSnapshot(snapshort => {
                setPosts(snapshort.docs.map(doc => ({id: doc.id, post: doc.data()})));
            })
    }, [])

    const singup = (event) => {

    }

    return (
        <div className="app">
            <Modal
                open={open}
                onClose={() => setOpen(false)}
               >
                <div style={modalStyle} className={classes.paper}>
                    <h2>I AM A  modal</h2>
               </div>
            </Modal>

            <div className="app_header">
                <h1 className="app_logo" alt="logo">
                    Vartalapp
                </h1>
            </div>
            <Button onClick={() => setOpen(true)} >
                Sign Up
            </Button>
            {
                posts.map(({id, post}) => (
                    <Post
                        key={id}
                        imgURL={post.imgURL}
                        username={post.username}
                        caption={post.caption}/>
                ))
            }
        </div>
    );
}

export default App;
