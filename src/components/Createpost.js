import React, { useEffect, useState } from 'react';
import "./Createpost.css";
import { addDoc, collection } from 'firebase/firestore';
import { auth, db } from '../firebase';
import { useNavigate } from 'react-router-dom';

const Createpost = ({isAuth}) => {
  const [title, setTitle] = useState();
  const [postText, setPostText] = useState();
  const navigate = useNavigate();

  const onAddPost = async () => {
    await addDoc(collection(db, "posts") , {
      title: title,
      postText: postText,
      author: {
        username: auth.currentUser.displayName,
        id: auth.currentUser.uid
      },
      modDate: Date.now()
    })
    navigate("/");
  }

  useEffect(() => {
    if (!isAuth) {
      navigate("/login");
    }
  }, [])
  return (
    <div className="createPostPage">
      <div className="postContainer">
        <h1>記事を投稿する</h1>
        <div className="inputPost">
          <div>タイトル</div>
          <input type="text" placeholder="タイトルを記入" onChange={(e) => setTitle(e.target.value)}/>
        </div>
        <div className="inputPost">
          <div>投稿内容</div>
          <textarea placeholder="投稿内容を記入" onChange={(e) => setPostText(e.target.value)}></textarea>
        </div>
        <button className="postButton" onClick={onAddPost}>投稿する</button>
      </div>
    </div>
  )
}

export default Createpost