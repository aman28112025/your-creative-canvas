import { AlertTriangle } from "lucide-react";

interface RiskLevel {
  level: string;
  count: number;
  agents: number;
  applications: number;
  models: number;
  color: string;
  percentage: number;
}

const riskLevels: RiskLevel[] = [
  {
    level: "Low Risk",
    count: 16,
    agents: 1,
    applications: 0,
    models: 15,
    color: "bg-lime",
    percentage: 60,
  },
  {
    level: "Medium Risk",
    count: 9,
    agents: 0,
    applications: 2,
    models: 7,
    color: "bg-orange",
    percentage: 35,
  },
  {
    level: "High Risk",
    count: 3,
    agents: 1,
    applications: 0,
    models: 2,
    color: "bg-coral",
    percentage: 12,
  },
  {
    level: "Critical Risk",
    count: 0,
    agents: 0,
    applications: 0,
    models: 0,
    color: "bg-muted",
    percentage: 0,
  },
];

const RiskProfile = () => {
  return (
    <div className="bg-card rounded-lg p-5 border border-border h-full">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-8 h-8 rounded bg-coral/20 flex items-center justify-center">
          <AlertTriangle size={18} className="text-coral" />
        </div>
        <h3 className="text-lg font-medium text-foreground">Asset Risk Profile</h3>
      </div>

      <div className="space-y-5">
        {riskLevels.map((risk) => (
          <div key={risk.level}>
            <div className="flex items-center gap-2 mb-2">
              <span className={`text-sm font-medium ${risk.count > 0 ? (risk.level === "Low Risk" ? "text-lime" : risk.level === "Medium Risk" ? "text-warning" : "text-coral") : "text-muted-foreground"}`}>
                {risk.count}
              </span>
              <span className="text-sm text-muted-foreground">{risk.level}</span>
            </div>
            
            <div className="risk-bar mb-2">
              <div
                className={`risk-bar-fill ${risk.color}`}
                style={{ width: `${risk.percentage}%` }}
              />
            </div>
            
            <p className="text-xs text-muted-foreground">
              {risk.agents} Agents • {risk.applications} Applications • {risk.models} Models
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RiskProfile;
