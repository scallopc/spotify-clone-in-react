import { Link, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconName } from "@fortawesome/fontawesome-svg-core";
import { Body, Title } from "./styles";

export type Props = {  
  icon: IconName | any;
  children: any;
};

export default function SidebarButton(props: any) {
  const location = useLocation();

  const isActive = location.pathname === props.to;
  const btnClass = isActive ? "active" : " ";

  return (
    <Link to={props.to}>
      <Body className={btnClass}>
        <div className="btn-icon">
          <FontAwesomeIcon icon={props.icon} />
        </div>
        <Title className="btn-title">{props.title}</Title>
      </Body>
    </Link>
  );
}
