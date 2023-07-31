import { FunctionComponent } from 'react';
import "./index.css";
import { GraphContainer } from '../graph-container';

interface IProps {
}

// TODO : utiliser recoil js pour un user global

const Dashboard: FunctionComponent<IProps> = (props: IProps) => {

 return (<main className={`dashboard-container`}>
  <header>
   <h1>
    Bonjour $nom
   </h1>
   <h2>
    Félicitation ! Vous avez explosé vos objectifs hier 👏
   </h2>
  </header>

  <GraphContainer />

 </main>)
}

export { Dashboard }
