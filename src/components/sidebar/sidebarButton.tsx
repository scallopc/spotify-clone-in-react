import { Link, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconName } from "@fortawesome/fontawesome-svg-core";

export type Props = {  
  icon: IconName | any;
  children: any;
};

export default function SidebarButton(props: any) {
  const location = useLocation();

  const isActive = location.pathname === props.to;

  const btnClass = isActive ? "btn-body active" : "btn-body";

  return (
    <Link to={props.to}>
      <div className={btnClass}>
        <div className="btn-icon">
          <FontAwesomeIcon icon={props.icon} />
        </div>
        <p className="btn-title">{props.title}</p>
      </div>
    </Link>
  );
}
