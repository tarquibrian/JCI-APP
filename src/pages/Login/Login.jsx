import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { LoginCard, LoginSection } from "./LoginStyles";
import { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const submitForm = async (e) => {
    e.preventDefault();

    // await axios
    //   .post("http://192.168.1.7:8080/signup", {
    //     email: email,
    //     password: password,
    //   })
    //   // .then((response) => {
    //   //   console.log(response);
    //   //   console.log(email, password);
    //   // });
  };
  return (
    <LoginSection>
      <LoginCard>
        <form onSubmit={submitForm}>
          <h1>LOGIN</h1>
          {/* <label htmlFor="email">Nombre de Usuario</label> */}
          <input
            type="text"
            placeholder="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {/* <label htmlFor="password">Contraseña</label> */}
          <input
            type="password"
            placeholder="contraseña"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Link to="/jci-home">
          <button type="submit">Acceder</button>
          </Link>
        </form>
      </LoginCard>
    </LoginSection>
  );
};
0;

export default Login;
