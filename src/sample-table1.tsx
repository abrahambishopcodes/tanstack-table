import {
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
  TableCell,
} from "./components/ui/table";
import { Card, CardHeader, CardTitle, CardContent } from "./components/ui/card";

const SampleTable1 = () => {
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
