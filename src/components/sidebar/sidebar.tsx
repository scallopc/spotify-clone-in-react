import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { useEffect, useState } from "react";
import SidebarButton from "./sidebarButton";
import { Avatar, SidebarContainer } from "./styles";

export default function Sidebar() {
  const [image, setImage] = useState(
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdLAY3C19kL0nV2bI_plU3_YFCtra0dpsYkg&usqp=CAU"
  );
    // useEffect(() => {
    //   apiClient.get("me").then((response) => {
    //     setImage(response.data.images[0].url);
    //   });
    // }, []);

  return (
    <SidebarContainer>
      <Avatar src={image} alt="profile" />
      <div>
      <SidebarButton title="Feed" to="/feed" icon={faHeart} />
        <SidebarButton title="Trending" to="/trending" icon={faHeart} />
        <SidebarButton title="Player" to="/player" icon={faHeart} />
        <SidebarButton
          title="Favorites"
          to="/favorites"
          icon={faHeart}
        />
        <SidebarButton title="Library" to="/" icon={faHeart} />
      </div>
      <SidebarButton title="Sign Out" to="" icon={faHeart} />
    </SidebarContainer>
  );
}
