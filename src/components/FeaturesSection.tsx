import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { 
  CreditCard, 
  Calendar, 
  MessageCircle, 
  FileText, 
  Settings, 
  BarChart3,
  Home,
  UserCheck
} from "lucide-react";

export function FeaturesSection() {
  const features = [
    {
      icon: CreditCard,
      title: "Gestión de Pagos",
      description: "Control completo de cuotas de mantenimiento, pagos pendientes y estados de cuenta.",
      color: "text-blue-600"
    },
    {
      icon: Calendar,
      title: "Reservas de Áreas",
      description: "Sistema de reservas para salón de eventos, piscina, cancha y otras áreas comunes.",
      color: "text-green-600"
    },
    {
      icon: MessageCircle,
      title: "Comunicaciones",
      description: "Envío de avisos, notificaciones y comunicación directa entre administración y residentes.",
      color: "text-purple-600"
    },
    {
      icon: FileText,
      title: "Reportes de Incidencias",
      description: "Registro y seguimiento de problemas de mantenimiento y solicitudes de los residentes.",
      color: "text-orange-600"
    },
    {
      icon: UserCheck,
      title: "Control de Accesos",
      description: "Gestión de visitantes, registro de entradas y salidas, y control de seguridad.",
      color: "text-red-600"
    },
    {
      icon: BarChart3,
      title: "Reportes y Analytics",
      description: "Dashboards con métricas importantes y reportes financieros del condominio.",
      color: "text-indigo-600"
    },
    {
      icon: Home,
      title: "Directorio de Residentes",
      description: "Base de datos completa con información de contacto y detalles de cada unidad.",
      color: "text-teal-600"
    },
    {
      icon: Settings,
      title: "Administración",
      description: "Configuración general, usuarios, permisos y personalización del sistema.",
      color: "text-gray-600"
    }
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl mb-4">
            Funcionalidades Principales
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Todo lo que necesitas para administrar tu condominio de manera eficiente y profesional
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <IconComponent className={`h-6 w-6 ${feature.color}`} />
                    <CardTitle className="text-lg">{feature.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-sm">
                    {feature.description}
                  </CardDescription>
                  <Button variant="ghost" size="sm" className="mt-4 p-0 h-auto">
                    Más información →
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}