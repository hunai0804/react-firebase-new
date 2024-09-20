import React from 'react';
import { signInWithPopup} from "firebase/auth";
import { auth, provider } from "../firebase";
import { useNavigate } from 'react-router-dom';

const Login = ({setIsAuth}) => {
  const navigate = useNavigate()
  const loginGoogle = () => {
    signInWithPopup(auth, provider)
    .then((result) => {
      localStorage.setItem("isAuth", true);
      setIsAuth(true);
      navigate("/");
    })
  }
  return (
    <div>
      <p>Googleでログインする</p>
      <button onClick={loginGoogle}>ログイン</button>
    </div>
  )
}

export default Login