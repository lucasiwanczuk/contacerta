"use client";

import { FinancialChart } from "./components/FinancialChart";
import { TransactionsTable } from "./components/TransactionsTable";
import { PieChartNew } from "./components/PieChartNew";
import { Header } from "./components/Header";
import { AccountBalanceWallet, Add, Remove } from "@mui/icons-material";

export default function DashboardPage() {
  return (
    <div className="space-y-4 px-4 md:px-8">
      <Header />
      {/* Cards de receita, despesa e balanço */}
      <div className="grid grid-cols-1 grid-cols-3 gap-2">
        <div className="bg-white shadow rounded-lg p-6 flex justify-between items-center">
          <div>
            <h3 className="text-lg font-semibold text-gray-700">Receitas</h3>
            <p className="text-xl font-bold text-green-600">R$ 1.250,00</p>
          </div>
          <div className="bg-green-100 text-green-600 p-3 rounded-full">
            <Add />
          </div>
        </div>

        <div className="bg-white shadow rounded-lg p-6 flex justify-between items-center">
          <div>
            <h3 className="text-lg font-semibold text-gray-700">Despesas</h3>
            <p className="text-xl font-bold text-red-600">R$ 750,00</p>
          </div>
          <div className="bg-red-100 text-red-600 p-3 rounded-full">
            <Remove />
          </div>
        </div>

        <div className="bg-white shadow rounded-lg p-6 flex justify-between items-center">
          <div>
            <h3 className="text-lg font-semibold text-gray-700">Balanço</h3>
            <p className="text-xl font-bold text-blue-600">R$ 500,00</p>
          </div>
          <div className="bg-blue-100 text-blue-600 p-3 rounded-full">
            <AccountBalanceWallet />
          </div>
        </div>
      </div>

      {/* Barra acima */}
      <div className="grid grid-cols-1 bg-white shadow rounded-lg p-4">
        <FinancialChart />
      </div>

      {/* Pie charts lado a lado */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white shadow rounded-lg p-4">
          <PieChartNew />
        </div>
        <div className="bg-white shadow rounded-lg p-4">
          <PieChartNew />
        </div>
      </div>
      
      {/* Tabela de transações */}
      <div className="bg-white shadow rounded-lg p-4">
        <TransactionsTable />
      </div>
    </div>
  );
}
