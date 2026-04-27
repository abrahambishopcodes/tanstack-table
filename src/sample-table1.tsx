import { Table, TableBody, TableHead, TableHeader, TableRow, TableCell, TableCaption } from "./components/ui/table"


const SampleTable1 = () => {
  return (
    <Table>
        <TableHeader>
            <TableRow>
                <TableHead>Name</TableHead>
                <TableHead>Email</TableHead>
                <TableHead>Role</TableHead>
            </TableRow>
        </TableHeader>
        <TableBody>
            <TableCaption>Sample table</TableCaption>
            <TableRow>
                <TableCell>John Doe</TableCell>
                <TableCell>[EMAIL_ADDRESS]</TableCell>
                <TableCell>Admin</TableCell>
            </TableRow>
        </TableBody>
    </Table>
  )
}

export default SampleTable1