import { Link, useLocation, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { LayoutDashboard, Users, MessageSquare, LogOut } from "lucide-react";
import { toast } from "sonner";

interface AdminLayoutProps {
  children: React.ReactNode;
}

const AdminLayout = ({ children }: AdminLayoutProps) => {
  const location = useLocation();
  const navigate = useNavigate();

  const menuItems = [
    {
      title: "ড্যাশবোর্ড",
      icon: LayoutDashboard,
      path: "/admin/dashboard"
    },
    {
      title: "ভর্তি আবেদন",
      icon: Users,
      path: "/admin/admissions"
    },
    {
      title: "যোগাযোগের বার্তা",
      icon: MessageSquare,
      path: "/admin/contacts"
    }
  ];

  const handleLogout = () => {
    toast.success("সফলভাবে লগআউট হয়েছে");
    navigate("/admin/login");
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-card">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-xl font-bold">অ্যাডমিন প্যানেল - কুরআন ইনস্টিটিউট</h1>
          <Button variant="ghost" onClick={handleLogout}>
            <LogOut className="h-4 w-4 ml-2" />
            লগআউট
          </Button>
        </div>
      </header>

      <div className="container mx-auto px-4 py-6">
        <div className="flex gap-6">
          {/* Sidebar */}
          <aside className="w-64 shrink-0">
            <nav className="space-y-2">
              {menuItems.map((item) => {
                const Icon = item.icon;
                const isActive = location.pathname === item.path;
                return (
                  <Link key={item.path} to={item.path}>
                    <Button
                      variant={isActive ? "default" : "ghost"}
                      className="w-full justify-start"
                    >
                      <Icon className="h-4 w-4 ml-2" />
                      {item.title}
                    </Button>
                  </Link>
                );
              })}
            </nav>
          </aside>

          {/* Main Content */}
          <main className="flex-1">
            {children}
          </main>
        </div>
      </div>
    </div>
  );
};

export default AdminLayout;
