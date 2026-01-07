import DonutChart from "./DonutChart";
import BubbleMetric from "./BubbleMetric";
import RiskProfile from "./RiskProfile";

const OverviewSection = () => {
  return (
    <div className="bg-card rounded-lg border border-border p-6">
      <h2 className="text-lg font-medium text-foreground mb-6">Overview</h2>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left side - Donut chart with bubbles */}
        <div className="lg:col-span-2 flex items-center justify-center relative">
          <div className="relative">
            <DonutChart completedScans={78} inProgress={0} />
            
            {/* Positioned bubble metrics */}
            <div className="absolute -top-4 right-0">
              <BubbleMetric value={29} label="Models" color="cyan" size="lg" />
            </div>
            
            <div className="absolute top-1/3 -right-16">
              <BubbleMetric value={2} label="Applications" color="magenta" size="md" />
            </div>
            
            <div className="absolute bottom-0 right-8">
              <BubbleMetric value={4} label="Agents" color="lime" size="md" />
            </div>
          </div>
        </div>
        
        {/* Right side - Risk Profile */}
        <div className="lg:col-span-1">
          <RiskProfile />
        </div>
      </div>
    </div>
  );
};

export default OverviewSection;
