import { FunctionComponent } from 'react';
// libs
import { UserFormated } from '../../modeles/user';
// components
import { ActiviteDiag } from '../recharts/activite-diag';
import { LineDiag } from '../recharts/line-diag';
import { RadarDiag } from '../recharts/radar-diag';
import { ScoreDiag } from '../recharts/score-diag';
import { GroupAlimentation } from '../recharts/group-alimentation';
// css
import "./index.css";

interface IProps {
  user: UserFormated
}

const GraphContainer: FunctionComponent<IProps> = (props: IProps) => {

  return (<div className={`graphcontainer-container`}>

    <div className={`graphcontainer-group`}>

      <div className={`graphcontainer-activite`}>
        <header className={`activite-header`}>
          <h4 className={`activite-title`}>Activité quotidienne</h4>

          <ul className={`legend`}>
            <li className={`legend-kg`}>
              <span className={`legend-txt`}>Poids (kg)</span>
            </li>
            <li className={`legend-kcal`}>
              <span className={`legend-txt`}>Calories Brulées (Kcal)</span>
            </li>
          </ul>
        </header>

        <ActiviteDiag sessions={props.user.sessions} />
      </div>

      <div className={`graphcontainer-group-d3`}>
        <div className={`graphcontainer-duree graphcontainer-group-d3-item`}>
          <h4 className={`graphcontainer-duree-title`}>Durée moyenne des sessions</h4>
          <LineDiag sessions={props.user.sessions} />
        </div>
        <div className={`graphcontainer-hexagone graphcontainer-group-d3-item`}>
          <RadarDiag radar={props.user.radar} />
        </div>
        <div className={`graphcontainer-score graphcontainer-group-d3-item`}>
          <ScoreDiag score={props.user.score} />
        </div>
      </div>

    </div>

    <GroupAlimentation alimentation={props.user.alimentation} />

  </div>)
}

export { GraphContainer }
