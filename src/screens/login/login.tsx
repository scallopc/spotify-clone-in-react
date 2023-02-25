import { loginEndpoint } from "../../spotify";
import {useState } from "react"
import { Button, Container } from "./styles";

export default function Login(props: any) {
    // const [auth, setAuth] = useState<any>();

    // const loginInit = () => {
    //     setAuth(loginEndpoint);
    // }

    return (
        <Container>
          <Login src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_RGB_White.png"
            alt="logo-spotify"
          />
          <a href={loginEndpoint}>
            <div className="login-btn">LOG IN</div>
          </a>
          <Button >Button</Button>
        </Container>
      );
}
