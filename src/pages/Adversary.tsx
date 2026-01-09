import { useState } from "react";
import { Search } from "lucide-react";
import Sidebar from "@/components/dashboard/Sidebar";
import { Input } from "@/components/ui/input";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

const adversaryData = [
  { attackName: "Credential Dumping", miterId: "T1003", os: "Windows" },
  { attackName: "Phishing", miterId: "T1566", os: "Cross-platform" },
  { attackName: "Command and Scripting Interpreter", miterId: "T1059", os: "Windows, Linux, macOS" },
  { attackName: "Exploitation for Privilege Escalation", miterId: "T1068", os: "Windows, Linux" },
  { attackName: "Remote Services", miterId: "T1021", os: "Windows, Linux" },
  { attackName: "Data Encrypted for Impact", miterId: "T1486", os: "Windows, Linux" },
  { attackName: "Account Manipulation", miterId: "T1098", os: "Windows, Azure AD" },
  { attackName: "Brute Force", miterId: "T1110", os: "Cross-platform" },
];

const Adversary = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredData = adversaryData.filter((item) =>
    item.attackName.toLowerCase().includes(searchQuery.toLowerCase()) ||
    item.miterId.toLowerCase().includes(searchQuery.toLowerCase()) ||
    item.os.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="flex min-h-screen bg-background">
      <Sidebar />
      
      <main className="flex-1 p-6 overflow-auto">
        <header className="mb-6">
          <h1 className="text-2xl font-semibold text-foreground">Adversary Techniques</h1>
          <p className="text-sm text-muted-foreground mt-1">
            Browse and manage adversary attack techniques mapped to MITRE ATT&CK framework
          </p>
        </header>

        <div className="relative mb-4">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search techniques..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-9 max-w-sm"
          />
        </div>

        <div className="rounded-lg border bg-card">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Attack Name</TableHead>
                <TableHead>MITRE ID</TableHead>
                <TableHead>OS</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredData.map((item, index) => (
                <TableRow key={index}>
                  <TableCell className="font-medium">{item.attackName}</TableCell>
                  <TableCell>
                    <span className="px-2 py-1 rounded bg-primary/10 text-primary text-sm">
                      {item.miterId}
                    </span>
                  </TableCell>
                  <TableCell className="text-muted-foreground">{item.os}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </main>
    </div>
  );
};

export default Adversary;
