import { FunctionComponent } from 'react';
import LogoSportSee from "../../assets/logo-avec-titre.svg"
import "./index.css";
import { NavLink } from 'react-router-dom';

interface IProps {
}

const TopNav: FunctionComponent<IProps> = (props: IProps) => {
 return (<header className={`bg-noir topnav-container`}>
  <nav className={`topnav-nav`}>
   <ul className={`topnav-list`}>
    <li className={`topnav-list-item`}>
     <img className={`topnav-logo`} src={LogoSportSee} alt={`logo sport see`} />
    </li>
    <li className={`topnav-list-item`}>
     <NavLink to={`/`}>Accueil</NavLink>
    </li>
    <li className={`topnav-list-item`}>
     Profil
    </li>
    <li className={`topnav-list-item`}>
     Réglage
    </li>
    <li className={`topnav-list-item`}>
     Communauté
    </li>
   </ul>
  </nav>
 </header>)
}

export { TopNav }
