import { FunctionComponent, useCallback, useMemo } from 'react';
import { Bar, BarChart, CartesianGrid, Cell, Label, Legend, Line, LineChart, Pie, PieChart, PolarAngleAxis, PolarGrid, Radar, RadarChart, ResponsiveContainer, Sector, Tooltip, XAxis, YAxis, ZAxis } from 'recharts';
import { CategoricalChartFunc } from 'recharts/types/chart/generateCategoricalChart';
// libs
import { UserFormated } from '../../modeles/user';
import { makeRadarData } from '../../services/format';
// components
import imgCalories from "../../assets/icon-calories.svg";
import imgProteines from "../../assets/icon-proteines.svg";
import imgGlucides from "../../assets/icon-glucides.svg";
import imgLipides from "../../assets/icon-lipides.svg";
// img
import "./index.css";
import { ActiviteDiag } from '../recharts/activite-diag';
import { LineDiag } from '../recharts/line-diag';
import { RadarDiag } from '../recharts/radar-diag';
import { ScoreDiag } from '../recharts/score-diag';
// css

interface IProps {
  user: UserFormated
}

const GraphContainer: FunctionComponent<IProps> = (props: IProps) => {

  /*
  const ScoreDiag = useMemo(() => {
    if (props.user) {
      const data = [
        { name: 'A', value: 500 },
      ];
      const cx = 110;
      const cy = 110;
      const iR = 90;
      const oR = 100;
      const renderActiveShape = (props: any) => {

        return (
          <g>
            <text x={cx} y={cy} dy={8} textAnchor="middle" fill={`#00f`}>
              {"aaaa"}
            </text>
          </g>
        );
      };

      return (
        <PieChart width={220} height={220}>
          <Pie
            dataKey="value"
            startAngle={220}
            endAngle={220 - (Number(props.user.score) * 360)}
            activeShape={renderActiveShape}
            data={data}
            cx={cx}
            cy={cy}
            innerRadius={iR}
            outerRadius={oR}
            fill="#8884d8"
            stroke="none"
          >
            {data.map((_, index) => (
              <Cell key={`cell-${index}`} fill={`#f00`} />
            ))}
            <g>
              <text x={cx} y={cy} dy={8} textAnchor="middle" fill={`#00f`}>
                {"aaaa"}
              </text>
            </g>
          </Pie>
        </PieChart>
      );
    }
    return null
  }, [props.user])
  */

  return (<div className={`graphcontainer-container`}>

    <div className={`graphcontainer-group`}>
      <div className={`graphcontainer-activite`}>
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
