import { StatusOnlineIcon } from "@heroicons/react/outline";
import {
  Badge,
  Card,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeaderCell,
  TableRow,
  Text,
  Title,
} from "@tremor/react";

const data = [
  {
    name: "Water",
    status: "Pending",
  },
  {
    name: "Gas",
    status: "Pending",
  },
  {
    name: "Energy",
    status: "Pending",
  },
  {
    name: "Energy",
    status: "Pending",
  },
  {
    name: "Energy",
    status: "Pending",
  },
  
];

export const Pendingbills = () => (
  <div>
    <Title>Pending Bills</Title>
    <Table className="mt-5">
      <TableHead>
        <TableRow>
          <TableHeaderCell>Name</TableHeaderCell>
          <TableHeaderCell>Status</TableHeaderCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {data.map((item) => (
          <TableRow key={item.name}>
            <TableCell>{item.name}</TableCell>
            
            <TableCell>
              <Badge color="slate" icon={StatusOnlineIcon}>
                {item.status}
              </Badge>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
    <button className="btn btn-secondary w-full">Pay bills</button>
  </div>
);