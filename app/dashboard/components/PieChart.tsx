"use client";

import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, Title, Tooltip, Legend, ArcElement, CategoryScale } from "chart.js";

interface PieChartProps {
  title: string;
}

ChartJS.register(Title, Tooltip, Legend, ArcElement, CategoryScale);

export const PieChart = ({ title }: PieChartProps) => {
  const data = {
    labels: ["Salário", "Vale Alimentação", "Salário Extra", "Aluguel Imóvel"],
    datasets: [
      {
        data: [25, 35, 20, 20],
        backgroundColor: ["#4CAF50", "#FF9800", "#03A9F4", "#E91E63"],
      },
    ],
  };

  return (
    <div>
      <h2 className="text-xl font-bold mb-4 ">{title}</h2>
      <Pie data={data} />
    </div>
  );
};
