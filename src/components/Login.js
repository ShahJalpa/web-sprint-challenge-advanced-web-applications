import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { axiosWithAuth } from "../helpers/axiosWithAuth";

const initialState = {
  username: '',
  password: '',
  error:''
}
const Login = () => {
  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route
  const [login, setLogin] = useState(initialState)

  const handleChange = (event) => {
    const value = event.target.value;
    setLogin({...login, [event.target.name]: value})
    console.log(value);
  }

  return (
    <>
      <h1>
        Welcome to the Bubble App!
      </h1>
      <form>
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