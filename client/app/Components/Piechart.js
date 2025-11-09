'use client'
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer, Label } from 'recharts'

export default function Piechart({ data, font, color, inner, outer }) {
  const COLORS = ['#a3a3a3', '#22c55e'] // green = consumed, gray = remaining

  return (
    <div className="w-full h-64 ">
      <ResponsiveContainer>
        <PieChart>
          <Pie
            data={data}
            dataKey="value"
            nameKey="name"
            cx="50%"
            cy="50%"
            innerRadius={inner}
            outerRadius={outer}
            paddingAngle={3}
            fill="#8884d8"
            labelLine={false}
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={color[index % COLORS.length]} />
            ))}

            {/* 👇 This Label puts text in the center */}
            <Label
              value={`${data[1].value}/${data[1].value+data[2].value}${data[0].name}`}
              position="center"
              fill="#000"
              style={{
                fontSize: `${font}rem`,
                fontWeight: 'bold',
              }}
            />
          </Pie>
          <Tooltip />
        </PieChart>
      </ResponsiveContainer>
    </div>
  )
}