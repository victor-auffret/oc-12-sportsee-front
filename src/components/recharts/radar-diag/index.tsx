import { FunctionComponent, useMemo } from 'react';
import { PolarAngleAxis, PolarGrid, Radar, RadarChart, ResponsiveContainer } from 'recharts';
//
import { RadarFormated } from '../../../modeles/user';
import { makeRadarData } from '../../../services/format';
//
import "./index.css";

interface IProps {
 radar: RadarFormated
}

const RadarDiag: FunctionComponent<IProps> = ({ radar }: IProps) => {

 const data = useMemo(() => makeRadarData(radar), [radar])

 const d = [10, 25, 50, 75, 100]

 return (
  <ResponsiveContainer>
   <RadarChart cx="50%" cy="50%" outerRadius="80%" data={data} >
    <PolarGrid polarRadius={d} fill={`#ffffff`} />
    <PolarAngleAxis dataKey="subject" fill={`#ffffff`} />
    <Radar name="Mike" dataKey="A" stroke={`#ff0101`} fill={`#ff0101`} fillOpacity={0.7} dot={false} label={false} />
   </RadarChart>
  </ResponsiveContainer>
 )
}

export { RadarDiag }
