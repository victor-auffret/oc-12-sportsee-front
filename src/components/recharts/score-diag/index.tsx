import { FunctionComponent } from 'react';
import { Cell, Pie, PieChart, Sector } from 'recharts';

import "./index.css";

interface IProps {
 score: number
}

const ScoreDiag: FunctionComponent<IProps> = ({ score }: IProps) => {
 const data = [
  { name: 'A', value: score },
 ];
 const cx = 110;
 const cy = 110;
 const iR = 90;
 const oR = 100;
 const renderActiveShape = (props: any) => {
  const percent = Number(props?.payload?.value ?? 0) * 100;

  const RADIAN = Math.PI / 180;
  const { cx, cy, innerRadius, outerRadius, startAngle, endAngle, fill } = props;
  //const sin = Math.sin(-RADIAN * midAngle);
  //const cos = Math.cos(-RADIAN * midAngle);
  //const sx = cx + (outerRadius + 10) * cos;
  //onst sy = cy + (outerRadius + 10) * sin;
  //const mx = cx + (outerRadius + 30) * cos;
  //const my = cy + (outerRadius + 30) * sin;
  //const ex = mx + (cos >= 0 ? 1 : -1) * 22;
  //const ey = my;
  //const textAnchor = cos >= 0 ? 'start' : 'end';
  return (
   <g>

    <Sector
     cx={cx}
     cy={cy}
     innerRadius={innerRadius}
     outerRadius={outerRadius}
     startAngle={startAngle}
     endAngle={endAngle}
     fill={fill}
    />
    <circle
     cx={cx}
     cy={cy}
     r={innerRadius}
     fill={`#fff`}
    />
    <circle
     cx={cx + Math.cos(-RADIAN * startAngle) * (innerRadius + 5)}
     cy={cy + Math.sin(-RADIAN * startAngle) * (innerRadius + 5)}
     r={5}
     fill={fill}
    />
    <circle
     cx={cx + Math.cos(-RADIAN * endAngle) * (innerRadius + 5)}
     cy={cy + Math.sin(-RADIAN * endAngle) * (innerRadius + 5)}
     r={5}
     fill={fill}
    />
    <text x={cx / 4} y={cy / 5} width={20} height={20} dy={8} fontSize={15} fontFamily='Roboto' fontWeight={500} textAnchor="middle" fill={`#20253A`}>
     Score
    </text>
    <text x={cx} y={cy - 20} width={20} height={20} dy={8} fontSize={26} fontFamily='Roboto' fontWeight={700} textAnchor="middle" fill={`#282D30`}>
     {percent}%
    </text>
    <text x={cx} y={cy + 5} width={20} height={20} dy={8} fontSize={16} fontFamily='Roboto' fontWeight={500} textAnchor="middle" fill={`#74798C`}>
     de votre
    </text>
    <text x={cx} y={cy + 30} width={20} height={20} dy={8} fontSize={16} fontFamily='Roboto' fontWeight={500} textAnchor="middle" fill={`#74798C`}>
     objectif
    </text>
   </g>
  );
 };

 return (
  <PieChart width={220} height={220}>
   <Pie
    dataKey="value"
    startAngle={220}
    endAngle={220 - (Number(score) * 360)}
    activeIndex={0}
    activeShape={renderActiveShape}
    data={data}
    cx={cx}
    cy={cy}
    innerRadius={iR}
    outerRadius={oR}
    stroke="none"
   >
    {data.map((_, index) => (
     <Cell key={`cell-${index}`} fill={`#f00`} />
    ))}
   </Pie>
  </PieChart>
 );

}

export { ScoreDiag }
