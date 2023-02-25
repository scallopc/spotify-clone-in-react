import { loginEndpoint } from "../../spotify";
import { useState } from "react";
import { Button, Container, Logo } from "./styles";

export default function Login(props: any) {
  const [auth, setAuth] = useState<any>();

  const loginInit = () => {
    console.log('login')
      setAuth(loginEndpoint);
  }

  return (
    <Container>
      <Logo
        src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_RGB_White.png"
        alt="logo-spotify"
      />
      <a href={loginEndpoint}>
        <div className="login-btn">LOG IN</div>
      </a>
      <Button onClick={loginInit}>Login</Button>
    </Container>
  );
}
