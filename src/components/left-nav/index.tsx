import { FunctionComponent } from 'react';
import IconMeditation from "../../assets/icon-medidation.svg";
import IconNatation from "../../assets/icon-natation.svg";
import IconVelo from "../../assets/icon-velo.svg";
import IconAlter from "../../assets/icon-alter.svg";
import "./index.css";

interface IProps {
}

const LeftNav: FunctionComponent<IProps> = (_: IProps) => {
 return (<aside className={`bg-noir leftnav-container`}>

  <div>
   <ul className={`leftnav-list`}>
    <li className={`leftnav-item`}>
     <img src={IconMeditation} alt={`meditation`} />
    </li>
    <li className={`leftnav-item`}>
     <img src={IconNatation} alt={`natation`} />
    </li>
    <li className={`leftnav-item`}>
     <img src={IconVelo} alt={`velo`} />
    </li>
    <li className={`leftnav-item`}>
     <img src={IconAlter} alt={`alter`} />
    </li>
   </ul>
  </div>

  <div>
   <p className={`leftnav-copy`}>
    Copiryght, SportSee 2020
   </p>
  </div>

 </aside>)
}

export { LeftNav }
