import { GoogleOAuthProvider, GoogleLogin } from "@react-oauth/google"
import { web } from "./google_secret.json"
function App() {


  return (
    <>
      <GoogleOAuthProvider clientId={web.client_id}>
        <GoogleLogin
          onSuccess={credentialResponse => {
            console.log(credentialResponse);
          }}
          onError={() => {
            console.log('Login Failed');
          }}
        />
      </GoogleOAuthProvider>
    </>
  )
}

export default App
