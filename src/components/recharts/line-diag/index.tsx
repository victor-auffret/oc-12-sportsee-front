import { FunctionComponent, useMemo } from 'react';
//
import { SessionFormated } from '../../../modeles/user';
//
import "./index.css";
import { Line, LineChart, Tooltip, XAxis } from 'recharts';
import { CategoricalChartFunc } from 'recharts/types/chart/generateCategoricalChart';

interface IProps {
  sessions: SessionFormated[]
}

const moveColor: CategoricalChartFunc = (state, _) => {

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
      case "Lu": {
        setSeparation(0);
        return;
      };
      case "Ma": {
        setSeparation(1 * 100 / 7);
        return;
      };
      case "Me": {
        setSeparation(2 * 100 / 7);
        return;
      };
      case "Je": {
        setSeparation(3 * 100 / 7);
        return;
      };
      case "Ve": {
        setSeparation(4 * 100 / 7);
        return;
      };
      case "Sa": {
        setSeparation(5 * 100 / 7);
        return;
      };
      case "Di": {
        setSeparation(6 * 100 / 7);
        return;
      };
      default: { setSeparation(100); return; }
    }
  }

}

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

const DAYS = ["Lu", "Ma", "Me", "Je", "Ve", "Sa", "Di"]

const LineDiag: FunctionComponent<IProps> = ({ sessions }: IProps) => {

  const data = useMemo(() => sessions.map((sess, i) => {
    return {
      "name": DAYS[i % 7],
      "avg": Number(sess.length)
    }
  })
    , [sessions])

  const CustomTick = (props: any) => {
    const { x, y, stroke, payload } = props;

    return (
      <g transform={`translate(${x},${y})`}>
        <text x={0} y={0} dy={16} fontFamily='Roboto' textAnchor="end" fill="#FF8282" stroke={stroke}>
          {payload.value[0]}
        </text>
      </g>
    );
  }

  return (
    <LineChart width={250} height={200} data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5 }} onMouseMove={moveColor}>
      <XAxis dataKey="name" fill={`#FF8282`} stroke={`#FF8282`} tick={<CustomTick />} />
      <Tooltip
        formatter={(val) => { return [`${val} mins`, "", ""] }}
        payload={[{ name: "", value: "", unit: "" }]}
        content={<CustomTooltip />}
      />
      <Line type="monotone" dataKey="avg" stroke="#fff" />
    </LineChart>)

}

export { LineDiag }
