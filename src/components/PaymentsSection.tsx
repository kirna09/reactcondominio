import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "./ui/table";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "./ui/dialog";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Separator } from "./ui/separator";
import { CreditCard, Download, Eye, AlertCircle, Building, Calendar, DollarSign, FileText, CheckCircle } from "lucide-react";
import { useState } from "react";

export function PaymentsSection() {
  const [selectedPayment, setSelectedPayment] = useState<any>(null);
  const [paymentMethod, setPaymentMethod] = useState("");
  
  const pendingPayments = [
    {
      id: 1,
      concept: "Cuota de Mantenimiento",
      period: "Septiembre 2024",
      amount: 1225,
      dueDate: "2024-09-15",
      status: "Vencido"
    },
    {
      id: 2,
      concept: "Fondo de Reserva",
      period: "Septiembre 2024", 
      amount: 500,
      dueDate: "2024-09-30",
      status: "Pendiente"
    }
  ];

  const paymentHistory = [
    {
      id: 1,
      concept: "Cuota de Mantenimiento",
      period: "Agosto 2024",
      amount: 1225,
      paidDate: "2024-08-10",
      method: "Transferencia",
      status: "Pagado"
    },
    {
      id: 2,
      concept: "Fondo de Reserva",
      period: "Agosto 2024",
      amount: 500,
      paidDate: "2024-08-10",
      method: "Transferencia",
      status: "Pagado"
    },
    {
      id: 3,
      concept: "Cuota de Mantenimiento",
      period: "Julio 2024",
      amount: 1225,
      paidDate: "2024-07-05",
      method: "Tarjeta de Crédito",
      status: "Pagado"
    }
  ];

  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl">Gestión de Pagos</h2>
          <p className="text-muted-foreground">Administra tus pagos y consulta tu historial</p>
        </div>
        <Dialog>
          <DialogTrigger asChild>
            <Button>
              <CreditCard className="h-4 w-4 mr-2" />
              Realizar Pago
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-2xl">
            <DialogHeader>
              <DialogTitle>Realizar Pago Multiple</DialogTitle>
              <DialogDescription>
                Selecciona los pagos que deseas realizar y el método de pago
              </DialogDescription>
            </DialogHeader>
            <div className="space-y-6">
              <div className="grid grid-cols-1 gap-4">
                <Label>Pagos Pendientes</Label>
                {pendingPayments.map((payment) => (
                  <Card key={payment.id} className="p-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <input type="checkbox" className="rounded" />
                        <div>
                          <p className="font-medium">{payment.concept}</p>
                          <p className="text-sm text-muted-foreground">{payment.period}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="font-medium">${payment.amount.toLocaleString()}</p>
                        <Badge variant={payment.status === "Vencido" ? "destructive" : "secondary"} className="text-xs">
                          {payment.status}
                        </Badge>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
              
              <Separator />
              
              <div className="space-y-4">
                <Label>Método de Pago</Label>
                <Select value={paymentMethod} onValueChange={setPaymentMethod}>
                  <SelectTrigger>
                    <SelectValue placeholder="Selecciona el método de pago" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="transfer">Transferencia Bancaria</SelectItem>
                    <SelectItem value="credit">Tarjeta de Crédito</SelectItem>
                    <SelectItem value="debit">Tarjeta de Débito</SelectItem>
                    <SelectItem value="pse">PSE</SelectItem>
                  </SelectContent>
                </Select>
                
                {paymentMethod === "transfer" && (
                  <div className="p-4 bg-muted rounded-lg">
                    <h4 className="font-medium mb-2">Datos para Transferencia</h4>
                    <div className="space-y-1 text-sm">
                      <p><strong>Banco:</strong> Banco Nacional</p>
                      <p><strong>Cuenta:</strong> 1234-5678-9012</p>
                      <p><strong>Beneficiario:</strong> Residencial Los Pinos</p>
                      <p><strong>Concepto:</strong> Cuota Apt 501 - Sep 2024</p>
                    </div>
                  </div>
                )}
                
                {(paymentMethod === "credit" || paymentMethod === "debit") && (
                  <div className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <Label>Número de Tarjeta</Label>
                        <Input placeholder="1234 5678 9012 3456" />
                      </div>
                      <div>
                        <Label>Nombre en la Tarjeta</Label>
                        <Input placeholder="María González" />
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <Label>Fecha de Vencimiento</Label>
                        <Input placeholder="MM/AA" />
                      </div>
                      <div>
                        <Label>CVC</Label>
                        <Input placeholder="123" />
                      </div>
                    </div>
                  </div>
                )}
              </div>
              
              <div className="bg-primary/5 p-4 rounded-lg">
                <div className="flex justify-between items-center">
                  <span className="font-medium">Total a Pagar:</span>
                  <span className="text-xl font-bold text-primary">$1,725</span>
                </div>
              </div>
            </div>
            <DialogFooter>
              <Button variant="outline">Cancelar</Button>
              <Button>Procesar Pago</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>

      {/* Resumen de Pagos */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm">Total Pendiente</CardTitle>
            <AlertCircle className="h-4 w-4 text-destructive" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl text-destructive">$1,725</div>
            <p className="text-xs text-muted-foreground">
              2 pagos pendientes
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm">Pagado Este Mes</CardTitle>
            <CreditCard className="h-4 w-4 text-green-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl text-green-600">$0</div>
            <p className="text-xs text-muted-foreground">
              Sin pagos realizados
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm">Próximo Vencimiento</CardTitle>
            <AlertCircle className="h-4 w-4 text-orange-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl">30 Sep</div>
            <p className="text-xs text-muted-foreground">
              Fondo de Reserva - $500
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Tabs para Pagos Pendientes e Historial */}
      <Tabs defaultValue="pending" className="w-full">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="pending">Pagos Pendientes</TabsTrigger>
          <TabsTrigger value="history">Historial de Pagos</TabsTrigger>
        </TabsList>
        
        <TabsContent value="pending" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Pagos Pendientes</CardTitle>
              <CardDescription>
                Estos son los pagos que tienes pendientes por realizar
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Concepto</TableHead>
                    <TableHead>Período</TableHead>
                    <TableHead>Vencimiento</TableHead>
                    <TableHead>Monto</TableHead>
                    <TableHead>Estado</TableHead>
                    <TableHead>Acciones</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {pendingPayments.map((payment) => (
                    <TableRow key={payment.id}>
                      <TableCell>{payment.concept}</TableCell>
                      <TableCell>{payment.period}</TableCell>
                      <TableCell>{new Date(payment.dueDate).toLocaleDateString()}</TableCell>
                      <TableCell>${payment.amount.toLocaleString()}</TableCell>
                      <TableCell>
                        <Badge variant={payment.status === "Vencido" ? "destructive" : "secondary"}>
                          {payment.status}
                        </Badge>
                      </TableCell>
                      <TableCell>
                        <div className="flex space-x-2">
                          <Dialog>
                            <DialogTrigger asChild>
                              <Button size="sm" onClick={() => setSelectedPayment(payment)}>Pagar</Button>
                            </DialogTrigger>
                            <DialogContent>
                              <DialogHeader>
                                <DialogTitle>Pagar: {payment.concept}</DialogTitle>
                                <DialogDescription>
                                  Período: {payment.period} | Monto: ${payment.amount.toLocaleString()}
                                </DialogDescription>
                              </DialogHeader>
                              <div className="space-y-4">
                                <div className="p-4 border rounded-lg">
                                  <div className="flex items-center space-x-3 mb-3">
                                    <Building className="h-5 w-5 text-primary" />
                                    <h4 className="font-medium">Detalles del Pago</h4>
                                  </div>
                                  <div className="space-y-2 text-sm">
                                    <div className="flex justify-between">
                                      <span>Concepto:</span>
                                      <span>{payment.concept}</span>
                                    </div>
                                    <div className="flex justify-between">
                                      <span>Período:</span>
                                      <span>{payment.period}</span>
                                    </div>
                                    <div className="flex justify-between">
                                      <span>Vencimiento:</span>
                                      <span>{new Date(payment.dueDate).toLocaleDateString()}</span>
                                    </div>
                                    <div className="flex justify-between font-medium">
                                      <span>Monto:</span>
                                      <span>${payment.amount.toLocaleString()}</span>
                                    </div>
                                    {payment.status === "Vencido" && (
                                      <div className="flex justify-between text-destructive">
                                        <span>Recargo por mora:</span>
                                        <span>$25</span>
                                      </div>
                                    )}
                                  </div>
                                </div>
                                
                                <div>
                                  <Label>Método de Pago</Label>
                                  <Select>
                                    <SelectTrigger>
                                      <SelectValue placeholder="Selecciona método" />
                                    </SelectTrigger>
                                    <SelectContent>
                                      <SelectItem value="transfer">Transferencia Bancaria</SelectItem>
                                      <SelectItem value="credit">Tarjeta de Crédito</SelectItem>
                                      <SelectItem value="pse">PSE</SelectItem>
                                    </SelectContent>
                                  </Select>
                                </div>
                              </div>
                              <DialogFooter>
                                <Button variant="outline">Cancelar</Button>
                                <Button>Pagar ${payment.amount.toLocaleString()}</Button>
                              </DialogFooter>
                            </DialogContent>
                          </Dialog>
                          
                          <Dialog>
                            <DialogTrigger asChild>
                              <Button size="sm" variant="outline">
                                <Eye className="h-4 w-4" />
                              </Button>
                            </DialogTrigger>
                            <DialogContent>
                              <DialogHeader>
                                <DialogTitle>Detalles del Pago</DialogTitle>
                                <DialogDescription>
                                  Información completa de {payment.concept}
                                </DialogDescription>
                              </DialogHeader>
                              <div className="space-y-4">
                                <div className="grid grid-cols-2 gap-4">
                                  <Card className="p-4">
                                    <div className="flex items-center space-x-2 mb-2">
                                      <FileText className="h-4 w-4 text-primary" />
                                      <span className="font-medium">Concepto</span>
                                    </div>
                                    <p>{payment.concept}</p>
                                  </Card>
                                  <Card className="p-4">
                                    <div className="flex items-center space-x-2 mb-2">
                                      <Calendar className="h-4 w-4 text-primary" />
                                      <span className="font-medium">Período</span>
                                    </div>
                                    <p>{payment.period}</p>
                                  </Card>
                                  <Card className="p-4">
                                    <div className="flex items-center space-x-2 mb-2">
                                      <DollarSign className="h-4 w-4 text-primary" />
                                      <span className="font-medium">Monto</span>
                                    </div>
                                    <p>${payment.amount.toLocaleString()}</p>
                                  </Card>
                                  <Card className="p-4">
                                    <div className="flex items-center space-x-2 mb-2">
                                      <AlertCircle className="h-4 w-4 text-primary" />
                                      <span className="font-medium">Estado</span>
                                    </div>
                                    <Badge variant={payment.status === "Vencido" ? "destructive" : "secondary"}>
                                      {payment.status}
                                    </Badge>
                                  </Card>
                                </div>
                                
                                <div className="p-4 bg-muted rounded-lg">
                                  <h4 className="font-medium mb-2">Desglose del Pago</h4>
                                  <div className="space-y-1 text-sm">
                                    <div className="flex justify-between">
                                      <span>Administración:</span>
                                      <span>$800</span>
                                    </div>
                                    <div className="flex justify-between">
                                      <span>Mantenimiento:</span>
                                      <span>$300</span>
                                    </div>
                                    <div className="flex justify-between">
                                      <span>Servicios Públicos:</span>
                                      <span>$125</span>
                                    </div>
                                    <Separator className="my-2" />
                                    <div className="flex justify-between font-medium">
                                      <span>Total:</span>
                                      <span>${payment.amount.toLocaleString()}</span>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <DialogFooter>
                                <Button variant="outline">Cerrar</Button>
                                <Button>Descargar PDF</Button>
                              </DialogFooter>
                            </DialogContent>
                          </Dialog>
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
              <CardTitle>Historial de Pagos</CardTitle>
              <CardDescription>
                Consulta todos tus pagos realizados
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Concepto</TableHead>
                    <TableHead>Período</TableHead>
                    <TableHead>Fecha de Pago</TableHead>
                    <TableHead>Método</TableHead>
                    <TableHead>Monto</TableHead>
                    <TableHead>Estado</TableHead>
                    <TableHead>Acciones</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {paymentHistory.map((payment) => (
                    <TableRow key={payment.id}>
                      <TableCell>{payment.concept}</TableCell>
                      <TableCell>{payment.period}</TableCell>
                      <TableCell>{new Date(payment.paidDate).toLocaleDateString()}</TableCell>
                      <TableCell>{payment.method}</TableCell>
                      <TableCell>${payment.amount.toLocaleString()}</TableCell>
                      <TableCell>
                        <Badge variant="secondary">{payment.status}</Badge>
                      </TableCell>
                      <TableCell>
                        <Dialog>
                          <DialogTrigger asChild>
                            <Button size="sm" variant="outline">
                              <Download className="h-4 w-4" />
                            </Button>
                          </DialogTrigger>
                          <DialogContent>
                            <DialogHeader>
                              <DialogTitle>Comprobante de Pago</DialogTitle>
                              <DialogDescription>
                                {payment.concept} - {payment.period}
                              </DialogDescription>
                            </DialogHeader>
                            <div className="space-y-4">
                              <div className="border rounded-lg p-6 bg-card">
                                <div className="text-center mb-4">
                                  <div className="flex items-center justify-center mb-2">
                                    <CheckCircle className="h-12 w-12 text-green-600" />
                                  </div>
                                  <h3 className="text-lg font-semibold text-green-600">Pago Completado</h3>
                                </div>
                                
                                <div className="space-y-3">
                                  <div className="flex justify-between">
                                    <span>Concepto:</span>
                                    <span className="font-medium">{payment.concept}</span>
                                  </div>
                                  <div className="flex justify-between">
                                    <span>Período:</span>
                                    <span>{payment.period}</span>
                                  </div>
                                  <div className="flex justify-between">
                                    <span>Fecha de Pago:</span>
                                    <span>{new Date(payment.paidDate).toLocaleDateString()}</span>
                                  </div>
                                  <div className="flex justify-between">
                                    <span>Método:</span>
                                    <span>{payment.method}</span>
                                  </div>
                                  <div className="flex justify-between">
                                    <span>Referencia:</span>
                                    <span className="font-mono text-sm">PAY-{payment.id.toString().padStart(6, '0')}</span>
                                  </div>
                                  <Separator />
                                  <div className="flex justify-between text-lg font-semibold">
                                    <span>Total Pagado:</span>
                                    <span className="text-green-600">${payment.amount.toLocaleString()}</span>
                                  </div>
                                </div>
                                
                                <div className="mt-4 p-3 bg-muted rounded text-center text-sm text-muted-foreground">
                                  Este comprobante es válido como soporte de pago
                                </div>
                              </div>
                            </div>
                            <DialogFooter>
                              <Button variant="outline">Enviar por Email</Button>
                              <Button>Descargar PDF</Button>
                            </DialogFooter>
                          </DialogContent>
                        </Dialog>
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