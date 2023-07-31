import { FunctionComponent } from 'react';
import { UserFormated } from '../../modeles/user';

import imgCalories from "../../assets/icon-calories.svg";
import imgProteines from "../../assets/icon-proteines.svg";
import imgGlucides from "../../assets/icon-glucides.svg";
import imgLipides from "../../assets/icon-lipides.svg";

import "./index.css";

interface IProps {
 user: UserFormated
}

const GraphContainer: FunctionComponent<IProps> = (props: IProps) => {
 return (<div className={`graphcontainer-container`}>

  <div className={`graphcontainer-group`}>
   <div className={`graphcontainer-activite`}></div>

   <div className={`graphcontainer-group-d3`}>
    <div className={`graphcontainer-duree graphcontainer-group-d3-item`}></div>
    <div className={`graphcontainer-hexagone graphcontainer-group-d3-item`}></div>
    <div className={`graphcontainer-score graphcontainer-group-d3-item`}></div>
   </div>

  </div>

  <div className={`graphcontainer-group-alimentation`}>

   <div className={`graphcontainer-calorie graphcontainer-group-alimentation-item`}>
    <img src={imgCalories} alt="calories" />
    <p>
     <span className={`txt-gras`}>
      {props.user.alimentation.calorieCount} kCal
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
      {props.user.alimentation.proteinCount} g
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
      {props.user.alimentation.carbohydrateCount} g
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
      {props.user.alimentation.lipidCount} g
     </span>
     <br />
     <span className={`txt-alimentation`}>
      Lipides
     </span>
    </p>
   </div>

  </div>

 </div>)
}

export { GraphContainer }
