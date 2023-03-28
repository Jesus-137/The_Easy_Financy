import styled from 'styled-components';
import { PieChart, ResponsiveContainer, Pie, Tooltip, Cell } from 'recharts'
import SubTitle from './Subtitle';

const Div = styled.div`
  width: 33%;
`;

const COLORS = ['#E0E0EA','#FBC235']

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
                  fill="#E0E0EA"
              >
                <Cell key={`cell-${2}`} fill={COLORS[1 % COLORS.length]} />
              </Pie>
              <Tooltip/>
          </PieChart>
        </ResponsiveContainer>
      </div>
    </Div>
  )
}

export default Grahp;