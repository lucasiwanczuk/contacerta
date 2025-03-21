const TransactionsTable = () => {
  const transactions = [
    { id: 1, description: "Compra no supermercado", amount: 150.0, date: "2024-12-01" },
    { id: 2, description: "Aluguel", amount: 1200.0, date: "2024-12-05" },
    { id: 3, description: "Venda de produto", amount: 300.0, date: "2024-12-06" },
  ];

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full min-h-full table-auto">
        <thead>
          <tr className="bg-gray-100">
            <th className="px-4 py-2 text-left">Descrição</th>
            <th className="px-4 py-2 text-left">Valor</th>
            <th className="px-4 py-2 text-left">Data</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((transaction) => (
            <tr key={transaction.id} className="border-b">
              <td className="px-4 py-2">{transaction.description}</td>
              <td className="px-4 py-2">{transaction.amount}</td>
              <td className="px-4 py-2">{transaction.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export { TransactionsTable };
