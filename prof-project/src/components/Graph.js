import React, { PureComponent } from "react";
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

const data = [
  {
    name: "Ağustos",
    Kahve: 3000,
    Çay: 1398,
    amt: 2210,
  },
  {
    name: "Eylül",
    Kahve: 2000,
    Çay: 5800,
    amt: 2290,
  },
  {
    name: "Ekim",
    Kahve: 2780,
    Çay: 3908,
    amt: 2000,
  },
  {
    name: "Kasım",
    Kahve: 1890,
    Çay: 4800,
    amt: 2181,
  },
  {
    name: "Aralık",
    Kahve: 2390,
    Çay: 3800,
    amt: 2500,
  },
  {
    name: "Ocak",
    Kahve: 3490,
    Çay: 4300,
    amt: 2100,
  },
];

const Graph = function () {
  return (
    <BarChart
      width={500}
      height={300}
      data={data}
      margin={{
        top: 5,
        right: 30,
        left: 20,
        bottom: 5,
      }}
    >
      <CartesianGrid strokeDasharray="0" height={1} /> <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Bar dataKey="Çay" fill="#475569" />
      <Bar dataKey="Kahve" fill="#92400e" />
    </BarChart>
  );
};

export default Graph;
