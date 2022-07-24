import './App.css';
import { ResponsiveContainer, PieChart, Pie, Legend } from "recharts";

const data = [ 
  { name: "India", value: 50, fill: "#f21491" },
  { name: "UK", value: 20, fill: "#147bf2" },
  { name: "USA", value: 25, fill: "#f29d14" },
  { name: "Other", value: 5, fill: "#bc7272" }
];

const renderColorfulLegendText = (value, entry) => {
  return (
    <span style={{ color: "#111", fontWeight: 500, padding: "10px" }}>
      {value}
    </span>
  );
};

function App() {
  return (
    <ResponsiveContainer width="100%" height={250}>
    <PieChart height={250}>
    <Legend
          height={36}
          iconType="circle"
          layout="vertical"
          verticalAlign="middle"
          iconSize={10}
          // padding={5}
          formatter={renderColorfulLegendText} 
          align="right"
        />
      <Pie
        data={data}
        cx="50%"
        cy="50%"
        innerRadius={60}
        outerRadius={80}
        dataKey="value"
        startAngle={-235}
        label={({
          cx,
          cy,
          midAngle,
          innerRadius,
          outerRadius,
          value,
          index
        }) => {
          console.log("handling label?");
          const RADIAN = Math.PI / 180;
          const radius = 25 + innerRadius + (outerRadius - innerRadius);
          const x = cx + radius * Math.cos(-midAngle * RADIAN);
          const y = cy + radius * Math.sin(-midAngle * RADIAN);

          return (
            <text
              x={x}
              y={y}
              fill="#111"
              textAnchor={x > cx ? "start" : "end"}
              dominantBaseline="central"
            >
              {value}%
            </text>
          );
        }}
      />
    </PieChart>
  </ResponsiveContainer>
  );
}

export default App;