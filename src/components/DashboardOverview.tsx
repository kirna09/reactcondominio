import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Progress } from "./ui/progress";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "./ui/dialog";
import { Textarea } from "./ui/textarea";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { Separator } from "./ui/separator";
import { 
  CreditCard, 
  Calendar, 
  MessageCircle, 
  AlertTriangle,
  Home,
  Users,
  MapPin,
  Phone,
  Plus,
  Send,
  FileText,
  CheckCircle,
  Clock
} from "lucide-react";
import { useState } from "react";

export function DashboardOverview() {
  const [reportType, setReportType] = useState("");
  const [reportDescription, setReportDescription] = useState("");
  return (
    <div className="p-6 space-y-6">
      {/* Información del Condominio */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center">
            <Home className="h-5 w-5 mr-2" />
            Información de Mi Condominio
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="space-y-2">
              <p className="text-sm text-muted-foreground">Condominio</p>
              <p>Residencial Los Pinos</p>
            </div>
            <div className="space-y-2">
              <p className="text-sm text-muted-foreground">Unidad</p>
              <p>Torre A - Apartamento 501</p>
            </div>
            <div className="space-y-2">
              <p className="text-sm text-muted-foreground">Administrador</p>
              <p>Ing. Carlos Ruiz</p>
            </div>
            <div className="space-y-2">
              <p className="text-sm text-muted-foreground">Contacto</p>
              <div className="flex items-center">
                <Phone className="h-4 w-4 mr-1" />
                <p className="text-sm">555-0123</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Cards de Resumen */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm">Pagos Pendientes</CardTitle>
            <CreditCard className="h-4 w-4 text-destructive" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl">$2,450</div>
            <p className="text-xs text-muted-foreground">
              2 cuotas vencidas
            </p>
            <Dialog>
              <DialogTrigger asChild>
                <Button size="sm" className="mt-2">Ver Detalles</Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Pagos Pendientes</DialogTitle>
                  <DialogDescription>
                    Resumen de tus pagos pendientes
                  </DialogDescription>
                </DialogHeader>
                <div className="space-y-4">
                  <Card className="p-4 border-l-4 border-l-destructive">
                    <div className="flex justify-between items-start">
                      <div>
                        <h4 className="font-medium">Cuota de Mantenimiento</h4>
                        <p className="text-sm text-muted-foreground">Septiembre 2024</p>
                        <Badge variant="destructive" className="mt-1">Vencido</Badge>
                      </div>
                      <div className="text-right">
                        <p className="text-lg font-semibold">$1,225</p>
                        <p className="text-xs text-muted-foreground">Vence: 15/09/2024</p>
                      </div>
                    </div>
                  </Card>
                  
                  <Card className="p-4 border-l-4 border-l-orange-500">
                    <div className="flex justify-between items-start">
                      <div>
                        <h4 className="font-medium">Fondo de Reserva</h4>
                        <p className="text-sm text-muted-foreground">Septiembre 2024</p>
                        <Badge variant="secondary" className="mt-1">Pendiente</Badge>
                      </div>
                      <div className="text-right">
                        <p className="text-lg font-semibold">$500</p>
                        <p className="text-xs text-muted-foreground">Vence: 30/09/2024</p>
                      </div>
                    </div>
                  </Card>
                  
                  <div className="bg-primary/5 p-4 rounded-lg">
                    <div className="flex justify-between items-center">
                      <span className="font-medium">Total Pendiente:</span>
                      <span className="text-xl font-bold text-destructive">$1,725</span>
                    </div>
                  </div>
                </div>
                <DialogFooter>
                  <Button variant="outline">Cerrar</Button>
                  <Button>Ir a Pagos</Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm">Reservas Activas</CardTitle>
            <Calendar className="h-4 w-4 text-primary" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl">2</div>
            <p className="text-xs text-muted-foreground">
              Próxima: Salón el 20/09
            </p>
            <Dialog>
              <DialogTrigger asChild>
                <Button size="sm" variant="outline" className="mt-2">Gestionar</Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Mis Reservas Activas</DialogTitle>
                  <DialogDescription>
                    Gestiona tus reservas confirmadas
                  </DialogDescription>
                </DialogHeader>
                <div className="space-y-4">
                  <Card className="p-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                          <Home className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <h4 className="font-medium">Salón de Eventos</h4>
                          <p className="text-sm text-muted-foreground">20 Sep, 6:00 PM - 11:00 PM</p>
                          <p className="text-xs text-muted-foreground">25 invitados</p>
                        </div>
                      </div>
                      <div className="flex space-x-2">
                        <Button size="sm" variant="outline">Editar</Button>
                        <Button size="sm" variant="outline">Cancelar</Button>
                      </div>
                    </div>
                  </Card>
                  
                  <Card className="p-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                          <MapPin className="h-5 w-5 text-green-600" />
                        </div>
                        <div>
                          <h4 className="font-medium">Cancha de Tenis</h4>
                          <p className="text-sm text-muted-foreground">25 Sep, 8:00 AM - 10:00 AM</p>
                          <p className="text-xs text-muted-foreground">4 invitados</p>
                        </div>
                      </div>
                      <div className="flex space-x-2">
                        <Button size="sm" variant="outline">Editar</Button>
                        <Button size="sm" variant="outline">Cancelar</Button>
                      </div>
                    </div>
                  </Card>
                </div>
                <DialogFooter>
                  <Button variant="outline">Cerrar</Button>
                  <Button>Nueva Reserva</Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm">Comunicaciones</CardTitle>
            <MessageCircle className="h-4 w-4 text-blue-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl">5</div>
            <p className="text-xs text-muted-foreground">
              Sin leer
            </p>
            <Dialog>
              <DialogTrigger asChild>
                <Button size="sm" variant="outline" className="mt-2">Leer</Button>
              </DialogTrigger>
              <DialogContent className="max-w-2xl">
                <DialogHeader>
                  <DialogTitle>Comunicaciones Recientes</DialogTitle>
                  <DialogDescription>
                    Mensajes y avisos de la administración
                  </DialogDescription>
                </DialogHeader>
                <div className="space-y-4 max-h-96 overflow-y-auto">
                  <Card className="p-4 border-l-4 border-l-blue-500">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center space-x-2 mb-2">
                          <Badge variant="outline" className="text-xs">Importante</Badge>
                          <span className="text-xs text-muted-foreground">18 Sep 2024</span>
                        </div>
                        <h4 className="font-medium">Mantenimiento Programado - Ascensores</h4>
                        <p className="text-sm text-muted-foreground mt-1">
                          Se realizará mantenimiento preventivo de ascensores el próximo sábado de 8:00 AM a 12:00 PM. 
                          Durante este tiempo, los ascensores no estarán disponibles. Se recomienda planificar sus actividades...
                        </p>
                      </div>
                      <Button size="sm" variant="ghost">
                        <MessageCircle className="h-4 w-4" />
                      </Button>
                    </div>
                  </Card>
                  
                  <Card className="p-4 border-l-4 border-l-green-500">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center space-x-2 mb-2">
                          <Badge variant="secondary" className="text-xs">Noticia</Badge>
                          <span className="text-xs text-muted-foreground">15 Sep 2024</span>
                        </div>
                        <h4 className="font-medium">Nueva Área Recreativa Disponible</h4>
                        <p className="text-sm text-muted-foreground mt-1">
                          Ya está disponible para reservas la nueva zona de BBQ en la terraza del edificio. 
                          Capacidad para 15 personas, incluye parrillas y área de mesas...
                        </p>
                      </div>
                      <Button size="sm" variant="ghost">
                        <MessageCircle className="h-4 w-4" />
                      </Button>
                    </div>
                  </Card>
                  
                  <Card className="p-4 border-l-4 border-l-orange-500">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center space-x-2 mb-2">
                          <Badge variant="outline" className="text-xs">Recordatorio</Badge>
                          <span className="text-xs text-muted-foreground">12 Sep 2024</span>
                        </div>
                        <h4 className="font-medium">Asamblea General de Propietarios</h4>
                        <p className="text-sm text-muted-foreground mt-1">
                          Recordamos que la asamblea se realizará el 30 de septiembre en el salón de eventos. 
                          Favor confirmar asistencia...
                        </p>
                      </div>
                      <Button size="sm" variant="ghost">
                        <MessageCircle className="h-4 w-4" />
                      </Button>
                    </div>
                  </Card>
                </div>
                <DialogFooter>
                  <Button variant="outline">Marcar como Leídas</Button>
                  <Button>Ver Todas</Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm">Reportes Abiertos</CardTitle>
            <AlertTriangle className="h-4 w-4 text-orange-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl">1</div>
            <p className="text-xs text-muted-foreground">
              En proceso
            </p>
            <Dialog>
              <DialogTrigger asChild>
                <Button size="sm" variant="outline" className="mt-2">Ver Estado</Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Mis Reportes de Incidencias</DialogTitle>
                  <DialogDescription>
                    Estado de tus reportes y solicitudes
                  </DialogDescription>
                </DialogHeader>
                <div className="space-y-4">
                  <Card className="p-4">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center space-x-2 mb-2">
                          <Badge className="text-xs">En Proceso</Badge>
                          <span className="text-xs text-muted-foreground">Ticket #001</span>
                        </div>
                        <h4 className="font-medium">Filtración en Baño Principal</h4>
                        <p className="text-sm text-muted-foreground mt-1">
                          Reportado el 10 Sep 2024
                        </p>
                        <div className="flex items-center space-x-2 mt-2">
                          <Clock className="h-4 w-4 text-orange-500" />
                          <span className="text-sm text-orange-600">Técnico asignado - En revisión</span>
                        </div>
                      </div>
                      <Button size="sm" variant="outline">Ver Detalles</Button>
                    </div>
                  </Card>
                  
                  <div className="flex items-center justify-center p-8 text-center">
                    <div>
                      <AlertTriangle className="h-12 w-12 text-muted-foreground mx-auto mb-2" />
                      <p className="text-muted-foreground">¿Tienes una nueva incidencia?</p>
                      <Dialog>
                        <DialogTrigger asChild>
                          <Button className="mt-2">
                            <Plus className="h-4 w-4 mr-2" />
                            Crear Reporte
                          </Button>
                        </DialogTrigger>
                        <DialogContent>
                          <DialogHeader>
                            <DialogTitle>Crear Nuevo Reporte</DialogTitle>
                            <DialogDescription>
                              Describe la incidencia o solicitud de mantenimiento
                            </DialogDescription>
                          </DialogHeader>
                          <div className="space-y-4">
                            <div>
                              <Label>Tipo de Incidencia</Label>
                              <Select value={reportType} onValueChange={setReportType}>
                                <SelectTrigger>
                                  <SelectValue placeholder="Selecciona el tipo" />
                                </SelectTrigger>
                                <SelectContent>
                                  <SelectItem value="plumbing">Plomería</SelectItem>
                                  <SelectItem value="electrical">Eléctrico</SelectItem>
                                  <SelectItem value="elevator">Ascensor</SelectItem>
                                  <SelectItem value="common-areas">Áreas Comunes</SelectItem>
                                  <SelectItem value="security">Seguridad</SelectItem>
                                  <SelectItem value="other">Otro</SelectItem>
                                </SelectContent>
                              </Select>
                            </div>
                            
                            <div>
                              <Label>Ubicación</Label>
                              <Input placeholder="Ej: Apartamento 501, Baño principal" />
                            </div>
                            
                            <div>
                              <Label>Descripción del Problema</Label>
                              <Textarea 
                                placeholder="Describe detalladamente la incidencia..."
                                value={reportDescription}
                                onChange={(e) => setReportDescription(e.target.value)}
                                rows={4}
                              />
                            </div>
                            
                            <div>
                              <Label>Prioridad</Label>
                              <Select>
                                <SelectTrigger>
                                  <SelectValue placeholder="Selecciona prioridad" />
                                </SelectTrigger>
                                <SelectContent>
                                  <SelectItem value="low">Baja</SelectItem>
                                  <SelectItem value="medium">Media</SelectItem>
                                  <SelectItem value="high">Alta</SelectItem>
                                  <SelectItem value="urgent">Urgente</SelectItem>
                                </SelectContent>
                              </Select>
                            </div>
                          </div>
                          <DialogFooter>
                            <Button variant="outline">Cancelar</Button>
                            <Button>
                              <Send className="h-4 w-4 mr-2" />
                              Enviar Reporte
                            </Button>
                          </DialogFooter>
                        </DialogContent>
                      </Dialog>
                    </div>
                  </div>
                </div>
                <DialogFooter>
                  <Button variant="outline">Cerrar</Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>
          </CardContent>
        </Card>
      </div>

      {/* Actividad Reciente */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Pagos Recientes</CardTitle>
            <CardDescription>Historial de tus últimos pagos</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm">Cuota de Mantenimiento</p>
                  <p className="text-xs text-muted-foreground">Agosto 2024</p>
                </div>
                <div className="text-right">
                  <p className="text-sm">$1,225</p>
                  <Badge variant="secondary" className="text-xs">Pagado</Badge>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm">Fondo de Reserva</p>
                  <p className="text-xs text-muted-foreground">Julio 2024</p>
                </div>
                <div className="text-right">
                  <p className="text-sm">$500</p>
                  <Badge variant="secondary" className="text-xs">Pagado</Badge>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm">Cuota de Mantenimiento</p>
                  <p className="text-xs text-muted-foreground">Septiembre 2024</p>
                </div>
                <div className="text-right">
                  <p className="text-sm">$1,225</p>
                  <Badge variant="destructive" className="text-xs">Pendiente</Badge>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Próximas Reservas</CardTitle>
            <CardDescription>Tus reservas confirmadas</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm">Salón de Eventos</p>
                  <p className="text-xs text-muted-foreground">20 Sep, 6:00 PM - 11:00 PM</p>
                </div>
                <Badge variant="secondary">Confirmada</Badge>
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm">Cancha de Tenis</p>
                  <p className="text-xs text-muted-foreground">25 Sep, 8:00 AM - 10:00 AM</p>
                </div>
                <Badge variant="secondary">Confirmada</Badge>
              </div>
              <Dialog>
                <DialogTrigger asChild>
                  <Button variant="outline" className="w-full mt-4">
                    <Calendar className="h-4 w-4 mr-2" />
                    Hacer Nueva Reserva
                  </Button>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>Reserva Rápida</DialogTitle>
                    <DialogDescription>
                      Solicita una nueva reserva desde el dashboard
                    </DialogDescription>
                  </DialogHeader>
                  <div className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <Card className="p-4 cursor-pointer hover:bg-accent transition-colors">
                        <div className="text-center">
                          <Home className="h-8 w-8 mx-auto mb-2 text-primary" />
                          <h4 className="font-medium">Salón de Eventos</h4>
                          <p className="text-sm text-muted-foreground">$200/hora</p>
                        </div>
                      </Card>
                      <Card className="p-4 cursor-pointer hover:bg-accent transition-colors">
                        <div className="text-center">
                          <MapPin className="h-8 w-8 mx-auto mb-2 text-primary" />
                          <h4 className="font-medium">Cancha de Tenis</h4>
                          <p className="text-sm text-muted-foreground">$50/hora</p>
                        </div>
                      </Card>
                      <Card className="p-4 cursor-pointer hover:bg-accent transition-colors">
                        <div className="text-center">
                          <Users className="h-8 w-8 mx-auto mb-2 text-primary" />
                          <h4 className="font-medium">Piscina</h4>
                          <p className="text-sm text-muted-foreground">$30/hora</p>
                        </div>
                      </Card>
                      <Card className="p-4 cursor-pointer hover:bg-accent transition-colors">
                        <div className="text-center">
                          <FileText className="h-8 w-8 mx-auto mb-2 text-primary" />
                          <h4 className="font-medium">Zona BBQ</h4>
                          <p className="text-sm text-muted-foreground">$40/hora</p>
                        </div>
                      </Card>
                    </div>
                  </div>
                  <DialogFooter>
                    <Button variant="outline">Cancelar</Button>
                    <Button>Ir a Reservas</Button>
                  </DialogFooter>
                </DialogContent>
              </Dialog>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Comunicaciones Recientes */}
      <Card>
        <CardHeader>
          <CardTitle>Comunicaciones Recientes</CardTitle>
          <CardDescription>Últimos avisos de la administración</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="border-l-4 border-blue-500 pl-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm">Mantenimiento Programado - Ascensores</p>
                  <p className="text-xs text-muted-foreground">18 Sep 2024</p>
                </div>
                <Badge variant="outline">Importante</Badge>
              </div>
              <p className="text-xs text-muted-foreground mt-1">
                Se realizará mantenimiento preventivo de ascensores el próximo sábado...
              </p>
            </div>
            
            <div className="border-l-4 border-green-500 pl-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm">Nueva Área Recreativa Disponible</p>
                  <p className="text-xs text-muted-foreground">15 Sep 2024</p>
                </div>
                <Badge variant="secondary">Noticia</Badge>
              </div>
              <p className="text-xs text-muted-foreground mt-1">
                Ya está disponible para reservas la nueva zona de BBQ en la terraza...
              </p>
            </div>
            
            <Button variant="outline" className="w-full">
              Ver Todas las Comunicaciones
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}