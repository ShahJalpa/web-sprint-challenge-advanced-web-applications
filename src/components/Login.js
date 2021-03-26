import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { axiosWithAuth } from "../helpers/axiosWithAuth";

const initialState = {
  username: '',
  password: '',
}

const initialError = '';
const Login = () => {
  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route
  //I decided not to use useEffect, as we do not need it here.
  const [login, setLogin] = useState(initialState)
  const [error, setError] = useState(initialError)
  const { push } = useHistory()

  const handleChange = (event) => {
    const value = event.target.value;
    setLogin({...login, [event.target.name]: value})
    //console.log(value);
  }

  const handleLoginButton = (event) => {
    event.preventDefault();
    //console.log("login");

    (login.username === '' || login.password === '')? setError('Username or Password is not correct'): setError('');

    axiosWithAuth()
        .post('/login', login)
        .then((response) => {
          //console.log(response)
          localStorage.setItem("token", response.data.payload)
          //push('/bubblepage')
          push('/bubbles')
        })
        .catch((error) => {
          setError('Username or Password is not corrected');
          setLogin(initialState);
        })
  }

  return (
    <>
      <h1>
        Welcome to the Bubble App!
      </h1>
      <form onSubmit={handleLoginButton}>
        <label>Username: </label>
        <input 
          type="text"
          name="username"
          placeholder="username"
          value={login.username}
          onChange={handleChange}
        />

        <label>Password: </label>
        <input 
          type="text"
          name="password"
          placeholder="password"
          value={login.password}
          onChange={handleChange}
        /> 

        {error && <p style={{color: "red"}}>{error}</p>}
        <button>Login</button>
      </form>
    </>
  );
};

export default Login;

//Task List:
//1. Build a form containing a username and password field.
//2. Add whatever state nessiary for form functioning.
//3. MAKE SURE THAT FORM INPUTS INCLUDE THE LABEL TEXT "username" and "password" RESPECTIVELY.
//4. If either the username or password is not displaied display EXACTLY the following words: Username or Password not valid.
//5. If the username / password is equal to Lambda School / i<3Lambd4, save that token to localStorage.