import React, { useState } from "react";
import { GoogleLogin } from '@react-oauth/google';

const clientid =
"65810230783-61cde81il307rp45evue9su1kts0t062.apps.googleusercontent.com";


export default function App40() {
  const [flag, setFlag] = useState(false);
  const [name, setName] = useState();

  const onSuccess = (res) => {
    setName(res.profileObj["name"]);
    console.log("Success", res.profileObj);
    setFlag(true);
  };

  const onFailure = (res) => {
console.log("Failed", res);
  };
  return (
    <div>
      {flag ? (
        <h2>Hello {name}</h2>
      ) : (
        <GoogleLogin
          clientId={clientid}
          onSuccess={onSuccess}
          onFailure={onFailure}
          buttonText="Signin with Google"
          cookiePolicy={"single_host_origin"}
          isSignedIn={false}
        />
      )}
    </div>
  );
}