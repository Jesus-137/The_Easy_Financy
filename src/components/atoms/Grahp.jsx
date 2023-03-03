import { PieChart, ResponsiveContainer, Pie, Tooltip, Cell } from 'recharts'

const Grahp = ({data, COLORS}) => {
  return (
    <div style={{ width: '50%', height: 200, padding: '2%'}}>
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
    </div>
  )
}

export default Grahp;