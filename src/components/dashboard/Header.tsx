import { Plus } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="flex items-center justify-between mb-6">
      <div>
        <div className="flex items-center gap-2 text-sm text-muted-foreground mb-1">
          <span className="text-primary hover:underline cursor-pointer">Prisma AIRS</span>
          <span>/</span>
          <span className="text-primary hover:underline cursor-pointer">Red Teaming</span>
          <span>/</span>
          <span>Red Teaming Dashboard</span>
        </div>
        <h1 className="text-2xl font-semibold text-foreground">Red Teaming Dashboard</h1>
        <p className="text-sm text-muted-foreground mt-1">
          The Red Teaming dashboard gives an overview of the assessment progress and the security and safety risk profile of AI assets in your system
        </p>
      </div>
      
      <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
        <Plus size={16} className="mr-2" />
        New Scan
      </Button>
    </header>
  );
};

export default Header;
