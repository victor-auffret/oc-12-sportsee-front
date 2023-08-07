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
import { Payload } from 'recharts/types/component/DefaultLegendContent';
// css

interface IProps {
  user: UserFormated
}

const GraphContainer: FunctionComponent<IProps> = (props: IProps) => {

  const ActiviteDiag = useMemo(() => {
    if (props.user) {
      const data = props.user.sessions.map((sess, i) => {
        return {
          "day": `${i + 1}`,
          "Poids (kg)": Number(sess.kilogram),
          "Calories Brulées (Kcal)": Number(sess.calories)
        }
      })

      const CustomTooltip = ({ active, payload }: any) => {
        if (active && payload && payload.length) {
          return (
            <div className="custom-tooltip custom-tooltip-activite">
              <p className="label">{`${payload[0].value} Kg`}</p>
              <p className="label">{`${payload[1].value} Kcal`}</p>
            </div>
          );
        }
        return null;
      };

      const CustomBar = (props: any) => {
        const { fill, x, y, width, height } = props;
        const getPath = (x: number, y: number, width: number, height: number) => {
          return `M ${x},${y + height} 
          L ${x}, ${y} 
          A ${width / 2}, ${width / 2} 180 1 1 ${x + width}, ${y}
          L ${x + width}, ${y + height}`;
        };
        return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
      };

      // <YAxis dataKey="Calories Brulées (Kcal)" hide={false} />
      // <YAxis dataKey="Poids (kg)" orientation='right' hide={false} />

      return (<BarChart width={750} height={250} barSize={7} data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="day" />
        <Tooltip content={<CustomTooltip />} />
        <Legend
          verticalAlign='top'
          align='right'
          iconType='circle'
          iconSize={8}
          margin={{ top: 15, left: 5, right: 5, bottom: 15 }}
        />

        <YAxis dataKey="Poids (kg)" orientation='right' hide={false} />
        <Bar dataKey="Poids (kg)" fill="#282D30" shape={<CustomBar />} />
        <Bar dataKey="Calories Brulées (Kcal)" fill="#ff0101" shape={<CustomBar />} />
      </BarChart>)
    }
    return null;
  }, [props.user])

  const LineDiag = useMemo(() => {
    if (props.user != null) {
      const DAYS = ["L", "M", "M", "J", "V", "S", "D"]
      const CustomTooltip = ({ active, payload }: any) => {
        if (active && payload && payload.length) {
          return (
            <div className="custom-tooltip custom-tooltip-session">
              <p className="label">{`${payload[0].value} min`}</p>
            </div>
          );
        }

        return null;
      };
      const data = props.user.sessions.map((sess, i) => {
        return {
          "name": DAYS[i % 7],
          "avg": Number(sess.length)
        }
      })

      const moveColor: CategoricalChartFunc = (state, event) => {
        const setSeparation = (val: number) => {
          const r = document.querySelector(':root');
          if (r) {
            if ("style" in r && "setProperty" in ((r.style) as { setProperty: (k: string, v: any) => void })) {
              (r.style as { setProperty: (k: string, v: any) => void }).setProperty("--separation", `${val}%`)
            }
          }
        }
        if (state.activeLabel) {
          switch (state.activeLabel) {
            case "L": {
              setSeparation(0);
              return;
            };
            case "M": {
              setSeparation(1 * 100 / 7);
              return;
            };
            case "J": {
              setSeparation(3 * 100 / 7);
              return;
            };
            case "V": {
              setSeparation(4 * 100 / 7);
              return;
            };
            case "S": {
              setSeparation(5 * 100 / 7);
              return;
            };
            default: { setSeparation(100); return; }
          }
        }

      }

      return (
        <LineChart width={250} height={200} data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5 }} onMouseMove={moveColor}>
          <XAxis dataKey="name" fill={`#FF8282`} />
          <Tooltip
            formatter={(val, name, prop) => { return [`${val} mins`, "", ""] }}
            payload={[{ name: "", value: "", unit: "" }]}
            content={<CustomTooltip />}
          />
          <Line type="monotone" dataKey="avg" stroke="#fff" />
        </LineChart>)
    }
    return null
  }, [props.user])

  const RadarDiag = useMemo(() => {
    if (props.user != null) {
      const data = makeRadarData(props.user.radar)

      const d = [10, 25, 50, 75, 100]

      return (
        <ResponsiveContainer width="100%" height="100%">
          <RadarChart cx="50%" cy="50%" outerRadius="80%" data={data} >
            <PolarGrid polarRadius={d} fill={`#ffffff`} />
            <PolarAngleAxis dataKey="subject" fill={`#ffffff`} />
            <Radar name="Mike" dataKey="A" stroke={`#ff0101`} fill={`#ff0101`} fillOpacity={0.7} dot={false} label={false} />
          </RadarChart>
        </ResponsiveContainer>)
    }
    return null
  }, [props.user])

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

  return (<div className={`graphcontainer-container`}>

    <div className={`graphcontainer-group`}>
      <div className={`graphcontainer-activite`}>
        {ActiviteDiag}
      </div>

      <div className={`graphcontainer-group-d3`}>
        <div className={`graphcontainer-duree graphcontainer-group-d3-item`}>
          <h4 className={`graphcontainer-duree-title`}>Durée moyenne des sessions</h4>
          {LineDiag}
        </div>
        <div className={`graphcontainer-hexagone graphcontainer-group-d3-item`}>{RadarDiag}</div>
        <div className={`graphcontainer-score graphcontainer-group-d3-item`}>{ScoreDiag}</div>
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
