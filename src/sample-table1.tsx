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
import { useMemo } from "react";


const SampleTable1 = () => {

  // TData type
    interface User {
        name: string;
        email: string;
        role: "User" | "Merchant" | "Admin";
        status: "Active" | "Inactive";
    }

    // Table Data
    const data = useMemo<User[]>(
      () => [
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
    ], [])

    const columnHelper = createColumnHelper<User>();

    // Table columns
    const columns = useMemo(() => [
      columnHelper.accessor("name", {
        header: "Name",
        cell: props => <span>{props.getValue()}</span>
      }),
      columnHelper.accessor("email", {
        header: "Email",
        cell: props => <span>{props.getValue()}</span>
      }),
      columnHelper.accessor("role", {
        header: "Role",
        cell: props => <span>{props.getValue()}</span>
      })
    ], [columnHelper])

    // Table instance
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
            {
              rows.map(row => (
                <TableRow key={row.id}>
                  <TableCell>{row.getValue("name")}</TableCell>
                  <TableCell>{row.getValue("email")}</TableCell>
                  <TableCell>{row.getValue("role")}</TableCell>
                </TableRow>
              ))
            }
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
};

export default SampleTable1;
