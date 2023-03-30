import { BarChart, Bar, Tooltip, ResponsiveContainer, XAxis } from 'recharts'

const data = [
    {name: "María", age: 10, weight: 60},
    {name: 'Karina', age: 25, weight: 70},
    {name: 'Susana', age: 15, weight: 65},
    {name: 'Pedro', age: 35, weight: 85},
]

const SimpleBarCharts = ({width, aspect}) => {
  return (
    <ResponsiveContainer width={width} aspect={aspect}>
        <BarChart 
            data={data}
            margin={{
                top:5,
                right:30,
                left:20,
                bottom:5
            }}
        >
            <XAxis dataKey="age"/>
            <Tooltip />
            <Bar dataKey="weight" fill='#00D4FF'/>
        </BarChart>
    </ResponsiveContainer>
  )
}

export default SimpleBarCharts