import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { FileText } from 'lucide-react';

export function ReportsSection() {
  // Ejemplo de reportes, puedes conectar a una API o usar props en el futuro
  const reports = [
    {
      id: 1,
      title: 'Fuga de agua en el estacionamiento',
      status: 'Pendiente',
      description:
        'Se detectó una fuga de agua cerca del puesto 12. Se requiere revisión de plomería.',
      date: '2025-09-12',
    },
    {
      id: 2,
      title: 'Luz dañada en pasillo',
      status: 'Resuelto',
      description: 'La luz del pasillo del piso 3 fue reemplazada.',
      date: '2025-09-09',
    },
    {
      id: 3,
      title: 'Puerta principal no cierra',
      status: 'Rechazado',
      description: 'La puerta principal no cierra bien. Se revisó y no se encontró problema.',
      date: '2025-09-08',
    },
  ];

  const pendientes = reports.filter((r) => r.status === 'Pendiente');
  const resueltos = reports.filter((r) => r.status === 'Resuelto');
  const rechazados = reports.filter((r) => r.status === 'Rechazado');

  const renderColumn = (title: string, items: typeof reports) => (
    <div className="flex-1 min-w-[250px]">
      <h3 className="text-lg font-semibold mb-2 text-center">{title}</h3>
      {items.length > 0 ? (
        <div className="space-y-4">
          {items.map((report) => (
            <Card key={report.id}>
              <CardHeader>
                <div className="flex justify-between items-center">
                  <span className="font-semibold">{report.title}</span>
                  <span className="text-xs text-muted-foreground">{report.date}</span>
                </div>
                <div className="text-sm text-muted-foreground">
                  Estado:{' '}
                  <span
                    className={
                      report.status === 'Resuelto'
                        ? 'text-green-600'
                        : report.status === 'Pendiente'
                        ? 'text-yellow-600'
                        : 'text-red-600'
                    }
                  >
                    {report.status}
                  </span>
                </div>
              </CardHeader>
              <CardContent>
                <p className="mb-2">{report.description}</p>
                <Button variant="ghost" size="sm">
                  Ver detalles
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      ) : (
        <div className="text-muted-foreground text-sm text-center">No hay reportes.</div>
      )}
    </div>
  );

  return (
    <section className="py-10">
      <div className="max-w-6xl mx-auto px-4">
        <Card className="mb-6">
          <CardHeader className="flex items-center gap-3">
            <FileText className="h-6 w-6 text-orange-600" />
            <CardTitle className="text-2xl">Reportes de Incidencias</CardTitle>
          </CardHeader>
        </Card>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
          {renderColumn('Pendiente', pendientes)}
          {renderColumn('Resuelto', resueltos)}
          {renderColumn('Rechazado', rechazados)}
        </div>
      </div>
    </section>
  );
}
