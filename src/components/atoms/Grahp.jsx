import { PieChart, ResponsiveContainer, Pie, Tooltip, Cell } from 'recharts'
import styled from 'styled-components';

const Div = styled.div`
  padding: 2%;
`;

const Grahp = ({data, COLORS}) => {
  return (
    <Div style={{ width: '100%', height: 200,}}>
      <ResponsiveContainer>
        <PieChart>
            <Pie
                dataKey="value" 
                data={data}
                innerRadius={60}
                outerRadius={85}
                fill="#82ca9d"
            >
                {data.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}     
            </Pie>
            <Tooltip/>
        </PieChart>
      </ResponsiveContainer>
    </Div>
  )
}

export default Grahp;