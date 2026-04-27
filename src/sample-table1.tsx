import {
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
  TableCell,
} from "./components/ui/table";
import { Card, CardHeader, CardTitle, CardContent } from "./components/ui/card";

import { useReactTable, createColumnHelper, getCoreRowModel } from "@tanstack/react-table";


const SampleTable1 = () => {

  // TData type
    interface User {
        name: string;
        email: string;
        role: "User" | "Merchant" | "Admin";
        status: "Active" | "Inactive";
    }

    // Table Data
    const data: User[] = [
      {
        name: "John Larry",
        email: "larry@gmail.com",
        role: "Admin",
        status: "Active"
      },
      {
        name: "Pheobe Jane",
        email: "phebes123@gmail.com",
        role: "User",
        status: "Inactive"
      },
      {
        name: "Sofia Nikky",
        email: "nikkysoffie@gmail.com",
        role: "User",
        status: "Active"
      },
      {
        name: "Bishop Albert",
        email: "bishopthegreat@gmail.com",
        role: "Merchant",
        status: "Active"
      }
    ]

    const columnHelper = createColumnHelper<User>();

    // Table columns
    const columns = [
      columnHelper.accessor("name", {
        header: "Name",
        cell: props => <span>{props.getValue()}</span>
      })
    ]

    const table = useReactTable({
      data: data,
      columns: columns,
      getCoreRowModel: getCoreRowModel()
    })

    const rows = table.getRowModel().rows

  return (
    <Card className="p-0">
      <CardHeader className="bg-green-200 p-6">
        <CardTitle>Sample table</CardTitle>
      </CardHeader>
      <CardContent className="pb-6">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Name</TableHead>
              <TableHead>Email</TableHead>
              <TableHead>Role</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell>John Doe</TableCell>
              <TableCell>[EMAIL_ADDRESS]</TableCell>
              <TableCell>Admin</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
};

export default SampleTable1;
