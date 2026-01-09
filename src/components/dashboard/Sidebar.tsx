import { Home, Target, Activity, Info, Bot } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

interface NavItem {
  label: string;
  icon?: React.ReactNode;
  path: string;
}

interface NavSection {
  title: string;
  items: NavItem[];
}

const navSections: NavSection[] = [
  {
    title: "",
    items: [
      { label: "Home", icon: <Home size={16} />, path: "/" },
    ],
  },
  {
    title: "AI RED TEAMING",
    items: [
      { label: "Dashboard", icon: <Activity size={16} />, path: "/" },
      { label: "Adversary", icon: <Target size={16} />, path: "/adversary" },
      { label: "Agents", icon: <Bot size={16} />, path: "/agents" },
    ],
  },
  {
    title: "INFORMATION",
    items: [
      { label: "About", icon: <Info size={16} />, path: "/about" },
    ],
  },
];

const Sidebar = () => {
  const location = useLocation();

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
              <Link
                key={itemIndex}
                to={item.path}
                className={`nav-item ${location.pathname === item.path ? "nav-item-active" : ""}`}
              >
                {item.icon}
                <span>{item.label}</span>
              </Link>
            ))}
          </div>
        ))}
      </nav>
    </aside>
  );
};

export default Sidebar;
