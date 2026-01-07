import { Info } from "lucide-react";

interface BubbleMetricProps {
  value: number;
  label: string;
  color: "cyan" | "magenta" | "lime";
  size?: "sm" | "md" | "lg";
}

const sizeClasses = {
  sm: "w-24 h-24",
  md: "w-28 h-28",
  lg: "w-32 h-32",
};

const colorClasses = {
  cyan: "border-cyan glow-cyan",
  magenta: "border-magenta glow-magenta",
  lime: "border-lime glow-lime",
};

const textColors = {
  cyan: "text-cyan",
  magenta: "text-magenta",
  lime: "text-lime",
};

const BubbleMetric = ({ value, label, color, size = "md" }: BubbleMetricProps) => {
  return (
    <div
      className={`${sizeClasses[size]} rounded-full border-4 ${colorClasses[color]} flex flex-col items-center justify-center bg-background/50 backdrop-blur-sm`}
    >
      <span className={`text-3xl font-bold ${textColors[color]}`}>{value}</span>
      <div className="flex items-center gap-1">
        <span className="text-xs text-muted-foreground">{label}</span>
        <Info size={10} className="text-muted-foreground" />
      </div>
    </div>
  );
};

export default BubbleMetric;
