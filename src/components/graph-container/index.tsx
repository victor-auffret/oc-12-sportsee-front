import { FunctionComponent } from 'react';
import "./index.css";

interface IProps {
}

const GraphContainer: FunctionComponent<IProps> = (props: IProps) => {
 return (<div className={`graphcontainer-container`}>

  <div className={`graphcontainer-group`}>
   <div className={`graphcontainer-activite`}></div>

   <div className={`graphcontainer-group-d3`}>
    <div className={`graphcontainer-duree`}></div>
    <div className={`graphcontainer-hexagone`}></div>
    <div className={`graphcontainer-score`}></div>
   </div>

  </div>

  <div className={`graphcontainer-group-alimentation`}>
   <div className={`graphcontainer-calorie`}></div>
   <div className={`graphcontainer-proteine`}></div>
   <div className={`graphcontainer-glucide`}></div>
   <div className={`graphcontainer-lipide`}></div>
  </div>

 </div>)
}

export { GraphContainer }
