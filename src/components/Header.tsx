import { Button } from './ui/button';
import { Menu, User } from 'lucide-react';

export function Header() {
  return (
    <header className="bg-white shadow-sm border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <h1 className="text-xl text-primary">CondoAdmin</h1>
            </div>
            <nav className="hidden md:ml-10 md:flex md:space-x-8">
              <a
                href="#"
                className="text-muted-foreground hover:text-foreground px-3 py-2 rounded-md"
              >
                Inicio
              </a>
              <a
                href="#"
                className="text-muted-foreground hover:text-foreground px-3 py-2 rounded-md"
              >
                Residentes
              </a>
              <a
                href="#"
                className="text-muted-foreground hover:text-foreground px-3 py-2 rounded-md"
              >
                Pagos
              </a>
              <a
                href="#"
                className="text-muted-foreground hover:text-foreground px-3 py-2 rounded-md"
              >
                Reservas
              </a>
              <a
                href="#"
                className="text-muted-foreground hover:text-foreground px-3 py-2 rounded-md"
              >
                Reportes
              </a>
            </nav>
          </div>
          <div className="flex items-center space-x-4">
            <Button variant="outline" size="sm">
              <User className="h-4 w-4 mr-2" />
              Iniciar Sesión
            </Button>
            <Button className="md:hidden" variant="ghost" size="sm">
              <Menu className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
