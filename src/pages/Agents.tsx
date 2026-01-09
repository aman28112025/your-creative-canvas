import { Plus, Bot } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import Sidebar from "@/components/dashboard/Sidebar";

const agentsData = [
  { id: 1, name: "Security Scanner", status: "Active", type: "Vulnerability", lastRun: "2024-01-15" },
  { id: 2, name: "Threat Hunter", status: "Inactive", type: "Threat Detection", lastRun: "2024-01-14" },
  { id: 3, name: "Compliance Checker", status: "Active", type: "Compliance", lastRun: "2024-01-15" },
];

const Agents = () => {
  return (
    <div className="flex min-h-screen bg-background">
      <Sidebar />
      <main className="flex-1 p-6">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-2">
            <Bot className="h-6 w-6 text-primary" />
            <h1 className="text-2xl font-semibold text-foreground">Agents</h1>
          </div>
          <Button className="gap-2">
            <Plus size={16} />
            Create Agent
          </Button>
        </div>

        <div className="rounded-lg border border-border bg-card">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Name</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Type</TableHead>
                <TableHead>Last Run</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {agentsData.map((agent) => (
                <TableRow key={agent.id}>
                  <TableCell className="font-medium">{agent.name}</TableCell>
                  <TableCell>
                    <span className={`px-2 py-1 rounded-full text-xs ${
                      agent.status === "Active" 
                        ? "bg-green-500/20 text-green-400" 
                        : "bg-muted text-muted-foreground"
                    }`}>
                      {agent.status}
                    </span>
                  </TableCell>
                  <TableCell>{agent.type}</TableCell>
                  <TableCell>{agent.lastRun}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </main>
    </div>
  );
};

export default Agents;
