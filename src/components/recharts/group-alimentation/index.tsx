import { FunctionComponent } from 'react';
// libs
import { KeyDataJson } from '../../../modeles/json';
// components
import imgCalories from "../../../assets/icon-calories.svg";
import imgProteines from "../../../assets/icon-proteines.svg";
import imgGlucides from "../../../assets/icon-glucides.svg";
import imgLipides from "../../../assets/icon-lipides.svg";

import "./index.css";

interface IProps {
 alimentation: KeyDataJson
}

const GroupAlimentation: FunctionComponent<IProps> = ({ alimentation }: IProps) => {
 return (
  <div className={`graphcontainer-group-alimentation`}>

   <div className={`graphcontainer-calorie graphcontainer-group-alimentation-item`}>
    <img src={imgCalories} alt="calories" />
    <p>
     <span className={`txt-gras`}>
      {alimentation.calorieCount} kCal
     </span>
     <br />
     <span className={`txt-alimentation`}>
      Calories
     </span>
    </p>
   </div>

   <div className={`graphcontainer-proteine graphcontainer-group-alimentation-item`}>
    <img src={imgProteines} alt="proteines" />
    <p>
     <span className={`txt-gras`}>
      {alimentation.proteinCount} g
     </span>
     <br />
     <span className={`txt-alimentation`}>
      Proteines
     </span>
    </p>
   </div>

   <div className={`graphcontainer-glucide graphcontainer-group-alimentation-item`}>
    <img src={imgGlucides} alt="glucides" />
    <p>
     <span className={`txt-gras`}>
      {alimentation.carbohydrateCount} g
     </span>
     <br />
     <span className={`txt-alimentation`}>
      Glucides
     </span>
    </p>
   </div>

   <div className={`graphcontainer-lipide graphcontainer-group-alimentation-item`}>
    <img src={imgLipides} alt="lipides" />
    <p>
     <span className={`txt-gras`}>
      {alimentation.lipidCount} g
     </span>
     <br />
     <span className={`txt-alimentation`}>
      Lipides
     </span>
    </p>
   </div>

  </div>
 )
}

export { GroupAlimentation }
