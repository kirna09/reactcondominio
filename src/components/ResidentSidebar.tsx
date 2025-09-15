import { 
  Home, 
  CreditCard, 
  Calendar, 
  MessageCircle, 
  FileText, 
  User, 
  Settings,
  Bell,
  LogOut
} from "lucide-react";
import { Button } from "./ui/button";
import { Separator } from "./ui/separator";

interface ResidentSidebarProps {
  activeSection: string;
  onSectionChange: (section: string) => void;
}

export function ResidentSidebar({ activeSection, onSectionChange }: ResidentSidebarProps) {
  const menuItems = [
    { id: 'dashboard', label: 'Dashboard', icon: Home },
    { id: 'payments', label: 'Pagos', icon: CreditCard },
    { id: 'reservations', label: 'Reservas', icon: Calendar },
    { id: 'communications', label: 'Comunicaciones', icon: MessageCircle },
    { id: 'reports', label: 'Reportes', icon: FileText },
    { id: 'profile', label: 'Mi Perfil', icon: User },
  ];

  return (
    <div className="w-64 h-screen bg-card border-r border-border flex flex-col">
      <div className="p-6">
        <h2 className="text-xl text-primary">Portal Residente</h2>
        <p className="text-sm text-muted-foreground">Torre A - Apt 501</p>
      </div>
      
      <Separator />
      
      <nav className="flex-1 p-4">
        <div className="space-y-2">
          {menuItems.map((item) => {
            const IconComponent = item.icon;
            const isActive = activeSection === item.id;
            return (
              <Button
                key={item.id}
                variant={isActive ? "secondary" : "ghost"}
                className="w-full justify-start"
                onClick={() => onSectionChange(item.id)}
              >
                <IconComponent className="h-4 w-4 mr-3" />
                {item.label}
              </Button>
            );
          })}
        </div>
      </nav>
      
      <div className="p-4 space-y-2">
        <Separator />
        <Button variant="ghost" className="w-full justify-start">
          <Bell className="h-4 w-4 mr-3" />
          Notificaciones
        </Button>
        <Button variant="ghost" className="w-full justify-start">
          <Settings className="h-4 w-4 mr-3" />
          Configuración
        </Button>
        <Button variant="ghost" className="w-full justify-start text-destructive hover:text-destructive">
          <LogOut className="h-4 w-4 mr-3" />
          Cerrar Sesión
        </Button>
      </div>
    </div>
  );
}