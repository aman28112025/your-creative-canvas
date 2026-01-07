interface DonutChartProps {
  completedScans: number;
  inProgress: number;
}

const DonutChart = ({ completedScans, inProgress }: DonutChartProps) => {
  const percentage = 85; // Visual percentage for the donut
  const strokeWidth = 28;
  const radius = 120;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (percentage / 100) * circumference;

  return (
    <div className="relative flex items-center justify-center">
      <svg width="300" height="300" viewBox="0 0 300 300" className="transform -rotate-90">
        {/* Background circle */}
        <circle
          cx="150"
          cy="150"
          r={radius}
          fill="none"
          stroke="hsl(var(--muted))"
          strokeWidth={strokeWidth}
          opacity={0.3}
        />
        {/* Progress circle */}
        <circle
          cx="150"
          cy="150"
          r={radius}
          fill="none"
          stroke="hsl(var(--coral))"
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}
          className="transition-all duration-1000 ease-out"
          style={{
            filter: "drop-shadow(0 0 8px hsl(var(--coral) / 0.5))",
          }}
        />
      </svg>
      
      {/* Center text */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
        <h3 className="text-2xl font-semibold text-foreground mb-2">Red Teaming</h3>
        <div className="w-12 h-0.5 bg-muted mb-3" />
        <p className="text-foreground">
          <span className="font-semibold">{completedScans}</span>{" "}
          <span className="text-muted-foreground">Completed Scans</span>
        </p>
        <p className="text-foreground">
          <span className="font-semibold">{inProgress}</span>{" "}
          <span className="text-muted-foreground">In Progress</span>
        </p>
      </div>
    </div>
  );
};

export default DonutChart;
