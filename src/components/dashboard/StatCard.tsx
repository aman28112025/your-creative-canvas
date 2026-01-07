interface StatCardProps {
  title: string;
  value: number | string;
  showViewDetails?: boolean;
}

const StatCard = ({ title, value, showViewDetails = false }: StatCardProps) => {
  return (
    <div className="stat-card flex flex-col justify-between min-h-[100px]">
      <div>
        <p className="text-sm text-muted-foreground mb-1">{title}</p>
        <p className="text-4xl font-semibold text-foreground">{value}</p>
      </div>
      {showViewDetails && (
        <div className="mt-3">
          <button className="text-sm text-primary hover:underline">
            View Details
          </button>
        </div>
      )}
    </div>
  );
};

export default StatCard;
