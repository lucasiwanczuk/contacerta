import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

// Registra as escalas e outros elementos
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

export const FinancialChart = () => {
  const data = {
    labels: ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho"],
    datasets: [
      {
        label: "Receitas",
        data: [3000, 4000, 5000, 5400, 4300, 4400],
        backgroundColor: "rgba(22, 163, 74, 0.7)",
      }, 
      {
        label: "Despesas",
        data: [2000, 2500, 3000, 3300, 3200, 3500],
        backgroundColor: "rgba(255, 99, 132, 0.7)",
      },
    ],
  };

  return (
    <div className="chart-container">
      <Bar data={data} options={{ responsive: true }} />
    </div>
  );
};
