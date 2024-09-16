import React from "react";
import Login1 from "./Login1";
import { GoogleOAuthProvider } from '@react-oauth/google'
export default function App39() {
  const clientid =
    "68173725-bvm8n497n412o7oqd3p8cvr60jn8iuqt.apps.googleusercontent.com";

  return (
    <GoogleOAuthProvider clientId={clientid}>
      <Login1 />
    </GoogleOAuthProvider>
  );
}