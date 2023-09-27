// import React, { useCallback, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { PieChart, Pie, Cell, Legend } from "recharts";

const COLORS = ["#FF444A", "#00C49F"];

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  percent,
}) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <>
      <text
        x={x}
        y={y}
        fill="white"
        textAnchor={x > cx ? "start" : "end"}
        dominantBaseline="central">
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    </>
  );
};
export default function Chart() {
  const dataDonations = useLoaderData();
  // console.log(dataDonations);
  let totalDonations = 0;
  dataDonations.map((d) => {
    totalDonations += parseInt(d.price);
  });
  const totalDonate = JSON.parse(localStorage.getItem("totalDonate"));
  const data = [
    { name: "Total Donation", value: totalDonations },
    { name: "Your Donation", value: totalDonate },
  ];
  return (
    <div className="w-full flex my-5 lg:mt-10 justify-center">
      <PieChart width={400} height={400}>
        <Pie
          data={data}
          cx={200}
          cy={200}
          labelLine={false}
          label={renderCustomizedLabel}
          outerRadius={150}
          fill="#8884d8"
          dataKey="value">
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Legend />
      </PieChart>
    </div>
  );
}
