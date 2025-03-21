"use client"

import { Bar } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from "chart.js";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const data = {
  labels: ["Janeiro", "Fevereiro", "Março", "Abril"],
  datasets: [
    {
      label: "Despesas",
      data: [400, 300, 200, 500],
      backgroundColor: "rgba(79, 172, 136, 0.5)", // Usando a paleta do Connecta Credit
    },
  ],
};

const options = {
  responsive: true,
  plugins: {
    legend: { position: "top" as const },
    title: { display: true, text: "Gráfico de Despesas Mensais" },
  },
};

const FinancialChart = () => <Bar options={options} data={data} />;
export default FinancialChart;
