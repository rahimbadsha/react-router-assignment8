
import { Bar, BarChart, CartesianGrid, Tooltip, YAxis, XAxis, ResponsiveContainer } from 'recharts';

const RatingCharts = ({ ratings }) => {
  
    const barColor = "#FF8000"; 
    const chartBgColor = "#F4F4F4";
    const reversRatings = [...ratings].reverse();
    //console.log(ratings)

  return (
    <div style={{ backgroundColor: chartBgColor, padding: "20px", borderRadius: "8px" }}>
      <h3 className="text-xl font-bold mb-4" style={{ color: "#333" }}>Ratings</h3>

      <ResponsiveContainer width="100%" height={250}>
        <BarChart
          data={reversRatings}
          layout="vertical" // Horizontal bars
          margin={{ top: 10, right: 30, left: 20, bottom: 5 }}
        >
          {/* Only horizontal grid lines */}
          <CartesianGrid horizontal={true} vertical={false} stroke="#D0D0D0" strokeDasharray="0" />

          {/* Y-axis: rating labels */}
          <YAxis
            dataKey="name"
            type="category"
            axisLine={false}
            tickLine={false}
            stroke="#333"
          />

          {/* X-axis: count */}
          <XAxis
            type="number"
            axisLine={false}
            tickLine={false}
            stroke="#333"
          />

          {/* Tooltip */}
          <Tooltip
            cursor={{ fill: "rgba(0,0,0,0.05)" }}
            formatter={(value, name, props) => [`${value} reviews`, props.payload.name]}
            contentStyle={{ borderRadius: "4px", border: "none" }}
          />

          {/* Bars */}
          <Bar
            dataKey="count"
            name="Reviews Count"
            fill={barColor}
            barSize={20}
            radius={[4, 4, 4, 4]} // rounded corners on all sides
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default RatingCharts;
