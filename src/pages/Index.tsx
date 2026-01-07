import Sidebar from "@/components/dashboard/Sidebar";
import Header from "@/components/dashboard/Header";
import StatCard from "@/components/dashboard/StatCard";
import OverviewSection from "@/components/dashboard/OverviewSection";

const Index = () => {
  return (
    <div className="flex min-h-screen bg-background">
      <Sidebar />
      
      <main className="flex-1 p-6 overflow-auto">
        <Header />
        
        {/* Stats Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <StatCard title="Total Targets Added" value={35} />
          <StatCard title="Targets Scanned" value={28} showViewDetails />
          <StatCard title="Total Scans" value={78} showViewDetails />
        </div>
        
        {/* Overview Section */}
        <OverviewSection />
      </main>
    </div>
  );
};

export default Index;
