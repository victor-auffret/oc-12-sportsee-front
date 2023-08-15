import { FunctionComponent, useMemo } from 'react';
import { Bar, BarChart, CartesianGrid, ComposedChart, Legend, Line, ResponsiveContainer, Tooltip, XAxis, YAxis, ZAxis } from 'recharts';
//
import { SessionFormated } from '../../../modeles/user';
//
import "./index.css";

interface IProps {
 sessions: SessionFormated[]
}

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


const ActiviteDiag: FunctionComponent<IProps> = ({ sessions }: IProps) => {

 const data = useMemo(() => sessions.map((sess, i) => {
  return {
   "day": `${i + 1}`,
   "Poids (kg)": Number(sess.kilogram),
   "Calories Brulées (Kcal)": Number(sess.calories)
  }
 })
  , [sessions])

 // <YAxis dataKey="Calories Brulées (Kcal)" hide={false} />
 // <YAxis dataKey="Poids (kg)" orientation='right' hide={false} />

 return (
  <ComposedChart
   width={750}
   height={250}
   data={data}
   margin={{
    top: 10,
    right: 10,
    bottom: 10,
    left: 10,
   }}
   barSize={7}
  >
   <CartesianGrid strokeDasharray="3 3" />
   <XAxis dataKey="day" />
   <Tooltip content={<CustomTooltip />} />

   <YAxis dataKey="Poids (kg)" hide={false} orientation={"right"} range={[50, 200]} />

   <Bar dataKey="Poids (kg)" fill="#282D30" shape={<CustomBar />} />
   <Bar dataKey="Calories Brulées (Kcal)" fill="#ff0101" shape={<CustomBar />} />

  </ComposedChart>
 )
 /*

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

   <YAxis dataKey="Calories Brulées (Kcal)" hide={true} />
   <Bar dataKey="Poids (kg)" fill="#282D30" shape={<CustomBar />} />
   <Bar dataKey="Calories Brulées (Kcal)" fill="#ff0101" shape={<CustomBar />} />
 </BarChart>)*/

}

export { ActiviteDiag }
