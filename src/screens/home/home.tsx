import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "../../components/sidebar/sidebar";
import Trending from "../trending/trending";
import Favorites from "../favorites/favorites";
import Feed from "../feed/feed";
import Library from "../library/library";
import Player from "../player/player";
import { Container } from "./styles";
import Login from "../login/login";
import { useEffect, useState } from "react";
import { setClientToken } from "../../spotify";

export default function Home() {
  const [token, setToken] = useState<any>("");

  useEffect(() => {
    const token = window.localStorage.getItem("token");
    const hash = window.location.hash;
    window.localStorage.hash = "";
    if (!token && hash) {
      const _token: any = hash.split("&")[0].split("=")[1];
      window.localStorage.setItem("token", _token);
      setToken(_token);
      setClientToken(_token);
    } else {
      setToken(token);
      setClientToken(token);
    }
  }, []);

  return !token ? (
    <Login />
  ) : (
    <Router>
      <Container>
        <Sidebar />
        <Routes>
          <Route path="/" element={<Library />} />
          <Route path="/feed" element={<Feed />} />
          <Route path="/trending" element={<Trending />} />
          <Route path="/player" element={<Player />} />
          <Route path="/favorites" element={<Favorites />} />
        </Routes>
      </Container>
    </Router>
  );
}
