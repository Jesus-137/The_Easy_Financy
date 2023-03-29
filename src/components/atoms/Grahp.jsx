import styled from 'styled-components';
import { PieChart, ResponsiveContainer, Pie, Tooltip, Cell } from 'recharts'
import SubTitle from './Subtitle';

const Div = styled.div`
  width: 33%;
`;

const COLORS = ['#FBC235','#6CE5D6', '#F54B4B', '#00D4FF','#010846']

const Grahp = ({data, title}) => {
  return (
    <Div>
      <SubTitle subTitle={title}/>
      <div style={{ width: '100%', height: 200,}}>
        <ResponsiveContainer>
          <PieChart>
              <Pie
                  dataKey="value" 
                  data={data}
                  innerRadius={60}
                  outerRadius={85}
                  fill="#6CE5D6"
              >
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip/>
          </PieChart>
        </ResponsiveContainer>
      </div>
    </Div>
  )
}

export default Grahp;