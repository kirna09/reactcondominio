import { Building2, Mail, Phone, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center mb-4">
              <Building2 className="h-8 w-8 mr-2" />
              <h3 className="text-xl">CondoAdmin</h3>
            </div>
            <p className="text-primary-foreground/80 mb-4 max-w-md">
              La solución más completa para la administración de condominios. 
              Simplificamos la gestión diaria con tecnología de vanguardia.
            </p>
            <div className="space-y-2">
              <div className="flex items-center">
                <Phone className="h-4 w-4 mr-2" />
                <span className="text-sm">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center">
                <Mail className="h-4 w-4 mr-2" />
                <span className="text-sm">contacto@condoadmin.com</span>
              </div>
              <div className="flex items-center">
                <MapPin className="h-4 w-4 mr-2" />
                <span className="text-sm">Ciudad de México, México</span>
              </div>
            </div>
          </div>
          
          <div>
            <h4 className="mb-4">Producto</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/80">
              <li><a href="#" className="hover:text-primary-foreground">Características</a></li>
              <li><a href="#" className="hover:text-primary-foreground">Precios</a></li>
              <li><a href="#" className="hover:text-primary-foreground">Demo</a></li>
              <li><a href="#" className="hover:text-primary-foreground">Integraciones</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="mb-4">Soporte</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/80">
              <li><a href="#" className="hover:text-primary-foreground">Centro de Ayuda</a></li>
              <li><a href="#" className="hover:text-primary-foreground">Documentación</a></li>
              <li><a href="#" className="hover:text-primary-foreground">Contacto</a></li>
              <li><a href="#" className="hover:text-primary-foreground">Estado del Servicio</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center text-sm text-primary-foreground/60">
          <p>&copy; 2024 CondoAdmin. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}