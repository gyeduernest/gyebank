import { Title } from "@tremor/react";

const data = [
  {
    name: 'Amazon Prime',
    Type: 'Bills',
    Amount: 547.00,
    Transaction: 'Sent',
    Date: "1-2-2023",
    Paymethod: "Mastercard"
  },
  {
    name: 'Netflix',
    Type: 'Subscription',
    Amount: 547.00,
    Transaction: 'Pending',
    Date: "1-2-2023",
    Paymethod: "Mastercard"
  },
  {
    name: 'School Fees',
    Type: 'Fees',
    Amount: 547.00,
    Transaction: 'Sent',
    Date: "1-2-2023",
    Paymethod: "Mastercard"
  }
];


const TableRow = ({ name, Type, Amount, Transaction, Date, Paymethod }) => (
  <tr key={name}>
    <td>
      <div className="flex items-center">
        <div>
          <div className="font-bold">{name}</div>
          <div className="text-xs opacity-50">{Type}</div>
        </div>
      </div>
    </td>
    <td>
      {Amount}
    </td>
    <th>
      <button className="btn btn-xs">{Transaction}</button>
    </th>
    <td>
      {Date}
    </td>
    <td>
      {Paymethod}
    </td>
  </tr>
);

const TranasactionTable = () => (
  <div className="overflow-x-auto">
    <table className="table">
      {/* head */}
      <thead>
        <div className="flex ">
          <Title> Latest Transactions</Title>
        </div>
        <tr>
          <th>Reference</th>
          <th>Amount</th>
          <th>State</th>
          <th>Date</th>
          <th>Payment Method</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item) => (
          <TableRow key={item.name} {...item} />
        ))}
      </tbody>
    </table>
  </div>
);

export default TranasactionTable;
