import React, { useEffect, useState } from 'react';
import './Home.css';
import { collection, deleteDoc, doc, getDocs } from 'firebase/firestore';
import { auth, db } from '../firebase';

const Home = () => {
  const [postList, setPostList] = useState([]);

  const postSorts = postList.sort((a,b) => b.modDate - a.modDate)

  useEffect(() => {
    const getPosts = async () => {
      const data = await getDocs(collection(db, 'posts'));
      setPostList(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getPosts();
  }, []);

  const postDelete = async (id) => {
    await deleteDoc(doc(db, "posts", id));
    window.location.href = "/";
  }

  return (
    <div className="homepage">
      {postSorts.map((post) => (
        <div className="postContents" key={post.id}>
          <div className="postheader">
            <h1>{post.title}</h1>
          </div>
          <div className="posttextcontainer">
            <p>{post.postText}</p>
          </div>
          <div className="nameanddeletebutton">
            <h3>@{post.author.username}</h3>
            <p>投稿時間: {new Date(post.modDate).toLocaleString()}</p>
            {post.author.id === auth.currentUser?.uid && (
              <button onClick={() => postDelete(post.id)}>削除</button>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Home;
