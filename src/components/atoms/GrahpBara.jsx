import { BarChart, ResponsiveContainer, XAxis } from 'recharts'

const data = [
    {name: "María", age: 10, weight: 60, color: "#00D4FF"},
    {name: 'Karina', age: 25, weight: 70},
    {name: 'Susana', age: 15, weight: 65},
    {name: 'Pedro', age: 35, weight: 85},
]

const SimpleBarCharts = ({bar}) => {
  return (
    <ResponsiveContainer width="33%" aspect={2.3}>
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
            {bar}
        </BarChart>
    </ResponsiveContainer>
  )
}

export default SimpleBarCharts