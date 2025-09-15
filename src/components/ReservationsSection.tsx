import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "./ui/table";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { Calendar } from "./ui/calendar";
import { Label } from "./ui/label";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "./ui/dialog";
import { Calendar as CalendarIcon, Clock, MapPin, Plus, Eye, X } from "lucide-react";
import { useState } from "react";

export function ReservationsSection() {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(new Date());
  
  const activeReservations = [
    {
      id: 1,
      area: "Salón de Eventos",
      date: "2024-09-20",
      startTime: "18:00",
      endTime: "23:00",
      status: "Confirmada",
      guests: 25
    },
    {
      id: 2,
      area: "Cancha de Tenis",
      date: "2024-09-25",
      startTime: "08:00", 
      endTime: "10:00",
      status: "Confirmada",
      guests: 4
    }
  ];

  const reservationHistory = [
    {
      id: 1,
      area: "Piscina",
      date: "2024-08-15",
      startTime: "10:00",
      endTime: "14:00",
      status: "Completada",
      guests: 8
    },
    {
      id: 2,
      area: "Salón de Eventos",
      date: "2024-07-10",
      startTime: "19:00",
      endTime: "23:00",
      status: "Completada",
      guests: 30
    }
  ];

  const availableAreas = [
    { id: 1, name: "Salón de Eventos", capacity: 50, rate: "$200/hora" },
    { id: 2, name: "Cancha de Tenis", capacity: 4, rate: "$50/hora" },
    { id: 3, name: "Piscina", capacity: 20, rate: "$30/hora" },
    { id: 4, name: "Zona BBQ", capacity: 15, rate: "$40/hora" },
    { id: 5, name: "Salón de Juegos", capacity: 12, rate: "$25/hora" }
  ];

  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl">Reservas de Áreas Comunes</h2>
          <p className="text-muted-foreground">Gestiona tus reservas y solicita nuevas</p>
        </div>
        <Dialog>
          <DialogTrigger asChild>
            <Button>
              <Plus className="h-4 w-4 mr-2" />
              Nueva Reserva
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-2xl">
            <DialogHeader>
              <DialogTitle>Solicitar Nueva Reserva</DialogTitle>
              <DialogDescription>
                Selecciona el área, fecha y horario para tu reserva
              </DialogDescription>
            </DialogHeader>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div>
                  <Label>Área a Reservar</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Selecciona un área" />
                    </SelectTrigger>
                    <SelectContent>
                      {availableAreas.map((area) => (
                        <SelectItem key={area.id} value={area.id.toString()}>
                          {area.name} - {area.rate}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label>Hora de Inicio</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Selecciona hora" />
                    </SelectTrigger>
                    <SelectContent>
                      {Array.from({length: 24}, (_, i) => (
                        <SelectItem key={i} value={`${i.toString().padStart(2, '0')}:00`}>
                          {`${i.toString().padStart(2, '0')}:00`}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label>Hora de Fin</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Selecciona hora" />
                    </SelectTrigger>
                    <SelectContent>
                      {Array.from({length: 24}, (_, i) => (
                        <SelectItem key={i} value={`${i.toString().padStart(2, '0')}:00`}>
                          {`${i.toString().padStart(2, '0')}:00`}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <div>
                <Label>Fecha de Reserva</Label>
                <Calendar
                  mode="single"
                  selected={selectedDate}
                  onSelect={setSelectedDate}
                  className="rounded-md border"
                />
              </div>
            </div>
            <DialogFooter>
              <Button variant="outline">Cancelar</Button>
              <Button>Solicitar Reserva</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>

      {/* Resumen de Reservas */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm">Reservas Activas</CardTitle>
            <CalendarIcon className="h-4 w-4 text-primary" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl">2</div>
            <p className="text-xs text-muted-foreground">
              Próxima: 20 Sep
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm">Este Mes</CardTitle>
            <Clock className="h-4 w-4 text-green-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl">4</div>
            <p className="text-xs text-muted-foreground">
              Reservas realizadas
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm">Área Favorita</CardTitle>
            <MapPin className="h-4 w-4 text-purple-600" />
          </CardHeader>
          <CardContent>
            <div className="text-lg">Salón de Eventos</div>
            <p className="text-xs text-muted-foreground">
              Más utilizada
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Áreas Disponibles */}
      <Card>
        <CardHeader>
          <CardTitle>Áreas Disponibles para Reserva</CardTitle>
          <CardDescription>
            Conoce todas las áreas comunes y sus tarifas
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {availableAreas.map((area) => (
              <Card key={area.id} className="hover:shadow-md transition-shadow">
                <CardHeader>
                  <CardTitle className="text-lg">{area.name}</CardTitle>
                  <CardDescription>
                    Capacidad: {area.capacity} personas
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <span className="text-lg">{area.rate}</span>
                    <Button size="sm">Reservar</Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Tabs para Reservas Activas e Historial */}
      <Tabs defaultValue="active" className="w-full">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="active">Reservas Activas</TabsTrigger>
          <TabsTrigger value="history">Historial</TabsTrigger>
        </TabsList>
        
        <TabsContent value="active" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Mis Reservas Confirmadas</CardTitle>
              <CardDescription>
                Reservas próximas y confirmadas
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Área</TableHead>
                    <TableHead>Fecha</TableHead>
                    <TableHead>Horario</TableHead>
                    <TableHead>Invitados</TableHead>
                    <TableHead>Estado</TableHead>
                    <TableHead>Acciones</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {activeReservations.map((reservation) => (
                    <TableRow key={reservation.id}>
                      <TableCell>{reservation.area}</TableCell>
                      <TableCell>{new Date(reservation.date).toLocaleDateString()}</TableCell>
                      <TableCell>{reservation.startTime} - {reservation.endTime}</TableCell>
                      <TableCell>{reservation.guests}</TableCell>
                      <TableCell>
                        <Badge variant="secondary">{reservation.status}</Badge>
                      </TableCell>
                      <TableCell>
                        <div className="flex space-x-2">
                          <Button size="sm" variant="outline">
                            <Eye className="h-4 w-4" />
                          </Button>
                          <Button size="sm" variant="outline">
                            <X className="h-4 w-4" />
                          </Button>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="history" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Historial de Reservas</CardTitle>
              <CardDescription>
                Todas tus reservas anteriores
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Área</TableHead>
                    <TableHead>Fecha</TableHead>
                    <TableHead>Horario</TableHead>
                    <TableHead>Invitados</TableHead>
                    <TableHead>Estado</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {reservationHistory.map((reservation) => (
                    <TableRow key={reservation.id}>
                      <TableCell>{reservation.area}</TableCell>
                      <TableCell>{new Date(reservation.date).toLocaleDateString()}</TableCell>
                      <TableCell>{reservation.startTime} - {reservation.endTime}</TableCell>
                      <TableCell>{reservation.guests}</TableCell>
                      <TableCell>
                        <Badge variant="outline">{reservation.status}</Badge>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}