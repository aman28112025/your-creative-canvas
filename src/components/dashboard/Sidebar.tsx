import { Home, Target, Scan, Zap, Shield, Bot, Activity, Server, Users } from "lucide-react";

interface NavItem {
  label: string;
  icon?: React.ReactNode;
  active?: boolean;
}

interface NavSection {
  title: string;
  items: NavItem[];
}

const navSections: NavSection[] = [
  {
    title: "",
    items: [
      { label: "Home", icon: <Home size={16} /> },
    ],
  },
  {
    title: "AI RED TEAMING",
    items: [
      { label: "Dashboard", icon: <Activity size={16} />, active: true },
      { label: "Targets", icon: <Target size={16} /> },
      { label: "Scans", icon: <Scan size={16} /> },
      { label: "Custom Attacks", icon: <Zap size={16} /> },
    ],
  },
  {
    title: "AI RUNTIME",
    items: [
      { label: "AI Runtime Firewall", icon: <Shield size={16} /> },
      { label: "API Applications", icon: <Server size={16} /> },
      { label: "AI Sessions", icon: <Bot size={16} /> },
    ],
  },
  {
    title: "AI AGENT SECURITY",
    items: [
      { label: "Enterprise Agents", icon: <Users size={16} /> },
      { label: "AI Sessions", icon: <Bot size={16} /> },
    ],
  },
  {
    title: "AI AGENT SECURITY",
    items: [
      { label: "AI Sessions", icon: <Bot size={16} /> },
    ],
  },
  {
    title: "AI AGENT SECURITY",
    items: [
      { label: "Enterprise Agents", icon: <Users size={16} /> },
    ],
  },
];

const Sidebar = () => {
  return (
    <aside className="w-56 min-h-screen bg-sidebar border-r border-sidebar-border flex flex-col">
      <div className="p-4 border-b border-sidebar-border">
        <h1 className="text-lg font-semibold text-foreground">AI Security</h1>
      </div>
      
      <nav className="flex-1 py-2 overflow-y-auto">
        {navSections.map((section, sectionIndex) => (
          <div key={sectionIndex} className="mb-1">
            {section.title && (
              <div className="nav-section-title">{section.title}</div>
            )}
            {section.items.map((item, itemIndex) => (
              <div
                key={itemIndex}
                className={`nav-item ${item.active ? "nav-item-active" : ""}`}
              >
                {item.icon}
                <span>{item.label}</span>
              </div>
            ))}
          </div>
        ))}
      </nav>
    </aside>
  );
};

export default Sidebar;
