import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import {
  Table,
  TableHeader,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
} from "@/components/ui/table";
import {
  useReactTable,
  flexRender,
  createColumnHelper,
  getCoreRowModel,
} from "@tanstack/react-table";
import { useMemo } from "react";

const TableWithOrdering = () => {
  // TData
  interface Product {
    id: string;
    name: string;
    price: number;
    category: string;
    brand: string;
    isOutOfStock: boolean;
  }

  // Table Data
  const products = useMemo<Product[]>(
    () => [
      {
        id: "1",
        name: "Quantum Wireless Mouse",
        price: 49.99,
        category: "Peripherals",
        brand: "LogiTech",
        isOutOfStock: false,
      },
      {
        id: "2",
        name: "UltraWide 34-inch Monitor",
        price: 549.0,
        category: "Displays",
        brand: "ViewSonic",
        isOutOfStock: true,
      },
      {
        id: "3",
        name: "Mechanical RGB Keyboard",
        price: 129.5,
        category: "Peripherals",
        brand: "Razer",
        isOutOfStock: false,
      },
      {
        id: "4",
        name: "Noise Cancelling Headphones",
        price: 299.99,
        category: "Audio",
        brand: "Sony",
        isOutOfStock: false,
      },
      {
        id: "5",
        name: "Ergonomic Office Chair",
        price: 850.0,
        category: "Furniture",
        brand: "Herman Miller",
        isOutOfStock: false,
      },
    ],
    [],
  );

  const columnHelper = createColumnHelper<Product>();

  const columns = useMemo(
    () => [
      columnHelper.accessor("id", {
        header: "Id",
        cell: (props) => <span>{props.getValue()}</span>,
      }),
      columnHelper.accessor("name", {
        header: "Name",
        cell: (props) => <span>{props.getValue()}</span>,
      }),
      columnHelper.accessor("price", {
        header: "Price",
        cell: (props) => <span>{props.getValue()}</span>,
      }),
      columnHelper.accessor("category", {
        header: "Category",
        cell: (props) => <span>{props.getValue()}</span>,
      }),
      columnHelper.accessor("brand", {
        header: "Brand",
        cell: (props) => <span>{props.getValue()}</span>,
      }),
      columnHelper.accessor("isOutOfStock", {
        header: "Out of Stock",
        cell: (props) => <span>{props.getValue() ? "Yes" : "No"}</span>,
      }),
    ],
    [columnHelper],
  );

  const table = useReactTable({
    data: products,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  const rows = table.getCoreRowModel().rows;

  return (
    <Card className="p-0">
      <CardHeader className="card-header">
        <CardTitle>Table with ordering</CardTitle>
      </CardHeader>
      <CardContent className="card-content">
        <Table>
            <TableHeader>
                {
                    table.getHeaderGroups().map(headerGroup => (
                        <TableRow key={headerGroup.id}>
                            {
                                headerGroup.headers.map(header => (
                                    <TableHead colSpan={header.colSpan} key={header.id}>{flexRender(
                                        header.column.columnDef.header, header.getContext()
                                    )}</TableHead>
                                ))
                            }
                        </TableRow>
                    ))
                }
            </TableHeader>
            <TableBody>
                {
                    rows.map(row => (
                        <TableRow key={row.id}>
                            {
                                row.getVisibleCells().map(cell => (
                                    <TableCell key={cell.id}>
                                        {flexRender(
                                            cell.column.columnDef.cell, cell.getContext()
                                        )}
                                    </TableCell>
                                ))
                            }
                        </TableRow>
                    ))
                }
            </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
};

export default TableWithOrdering;
