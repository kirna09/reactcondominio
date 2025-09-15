import { Button } from "./ui/button";
import { Building2, Shield, Users } from "lucide-react";

export function HeroSection() {
  return (
    <section className="bg-gradient-to-br from-primary/5 to-primary/10 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="flex justify-center mb-6">
            <Building2 className="h-16 w-16 text-primary" />
          </div>
          <h1 className="text-4xl md:text-6xl mb-6 text-primary">
            Gestión Integral de Condominios
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Simplifica la administración de tu condominio con nuestra plataforma todo-en-uno. 
            Gestiona residentes, pagos, comunicaciones y más desde un solo lugar.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="px-8 py-6">
              Comenzar Ahora
            </Button>
            <Button variant="outline" size="lg" className="px-8 py-6">
              Ver Demo
            </Button>
          </div>
          
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <Users className="h-8 w-8 text-primary mx-auto mb-4" />
              <h3 className="mb-2">Gestión de Residentes</h3>
              <p className="text-muted-foreground">
                Administra toda la información de los habitantes de manera eficiente
              </p>
            </div>
            <div className="text-center">
              <Shield className="h-8 w-8 text-primary mx-auto mb-4" />
              <h3 className="mb-2">Seguridad y Control</h3>
              <p className="text-muted-foreground">
                Control de accesos y registro de visitantes en tiempo real
              </p>
            </div>
            <div className="text-center">
              <Building2 className="h-8 w-8 text-primary mx-auto mb-4" />
              <h3 className="mb-2">Administración Completa</h3>
              <p className="text-muted-foreground">
                Todas las herramientas necesarias para una gestión eficaz
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}