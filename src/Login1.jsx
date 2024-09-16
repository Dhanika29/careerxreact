import React from "react";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { useGoogleLogin } from "@react-oauth/google";
import App1 from "./App1"

import { googleLogout } from "@react-oauth/google";

export default function Login1() {
  const [usr, setUsr] = useState([]);
  const [usrName, setUsrName] = useState();
  const [usrEmail, setUsrEmail] = useState();

  const login = useGoogleLogin({
    onSuccess: (res) => setUsr(res),
    onError: (error) => console.log("Login Failed:", error),
  });

  useEffect(() => {
    if (usr) {
      axios
        .get(
          `https://www.googleapis.com/oauth2/v1/userinfo?access_token=${usr.access_token}`,
          {
            headers: {
              Authorization: `Bearer ${usr.access_token}`,
              Accept: "application/json",
            },
          }
        )
        .then((res) => {
          setUsrName(res.data.name);
          setUsrEmail(res.data.email);
        })
        .catch((err) => console.log(err));
    }
  }, [usr]);

  return (
    <>
      {usrName ? (
        // <div>{usrName}</div>
        <App1/>
      ) : (
        <button onClick={login}>Sign in with Google</button>
      )}
    </>
  );
}