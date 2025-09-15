import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { MessageCircle } from 'lucide-react';

type Message = {
  id: number;
  sender: string;
  subject: string;
  content: string;
  date: string;
  read: boolean;
};

export function CommunicationsSection() {
  // Ejemplo de mensajes, puedes conectar a una API o usar props en el futuro
  const messages: Message[] = [
    {
      id: 1,
      sender: 'Administración',
      subject: 'Reunión de condominio',
      content:
        'Se convoca a todos los residentes a la reunión mensual el próximo viernes a las 7:00pm en el salón de eventos.',
      date: '2025-09-10',
      read: false,
    },
    {
      id: 2,
      sender: 'Vigilancia',
      subject: 'Mantenimiento de ascensores',
      content: 'El día lunes se realizará mantenimiento a los ascensores. Favor tomar previsiones.',
      date: '2025-09-08',
      read: true,
    },
    {
      id: 3,
      sender: 'Administración',
      subject: 'Corte de agua programado',
      content: 'El miércoles habrá corte de agua de 8am a 12pm por mantenimiento.',
      date: '2025-09-10',
      read: false,
    },
    {
      id: 4,
      sender: 'Junta',
      subject: 'Nueva administración',
      content: 'Se informa que la nueva administración inicia funciones el 1 de octubre.',
      date: '2025-09-08',
      read: true,
    },
  ];

  // Agrupar por fecha
  const groupByDate = (msgs: Message[]): Record<string, Message[]> => {
    return msgs.reduce<Record<string, Message[]>>((acc, msg) => {
      if (!acc[msg.date]) acc[msg.date] = [];
      acc[msg.date].push(msg);
      return acc;
    }, {});
  };

  const unreadMessages = messages.filter((msg) => !msg.read);
  const readMessages = messages.filter((msg) => msg.read);
  const unreadByDate = groupByDate(unreadMessages);
  const readByDate = groupByDate(readMessages);

  const renderGroupedMessages = (grouped: Record<string, Message[]>) =>
    Object.entries(grouped)
      .sort((a, b) => b[0].localeCompare(a[0])) // fechas descendente
      .map(([date, msgs]) => (
        <div key={date} className="mb-6">
          <div className="text-xs text-muted-foreground mb-2">{date}</div>
          <div className="space-y-4">
            {msgs.map((msg) => (
              <Card key={msg.id} className={msg.read ? 'opacity-60' : 'border-blue-500 border'}>
                <CardHeader>
                  <div className="flex justify-between items-center">
                    <span className="font-semibold">{msg.subject}</span>
                    <span className="text-xs text-muted-foreground">{msg.date}</span>
                  </div>
                  <div className="text-sm text-muted-foreground">De: {msg.sender}</div>
                </CardHeader>
                <CardContent>
                  <p className="mb-2">{msg.content}</p>
                  <Button variant="ghost" size="sm">
                    Responder
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      ));

  return (
    <section className="py-10">
      <div className="max-w-6xl mx-auto px-4">
        <Card className="mb-6">
          <CardHeader className="flex items-center gap-3">
            <MessageCircle className="h-6 w-6 text-blue-600" />
            <CardTitle className="text-2xl mb-2 ">Comunicaciones</CardTitle>
          </CardHeader>
        </Card>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
          <div className="flex flex-col min-h-[400px]">
            <h3 className="text-lg font-semibold mb-2">No leídos</h3>
            {Object.keys(unreadByDate).length > 0 ? (
              renderGroupedMessages(unreadByDate)
            ) : (
              <div className="text-muted-foreground text-sm">No hay mensajes nuevos.</div>
            )}
          </div>
          <div className="flex flex-col min-h-[400px]">
            <h3 className="text-lg font-semibold mb-2">Leídos</h3>
            {Object.keys(readByDate).length > 0 ? (
              renderGroupedMessages(readByDate)
            ) : (
              <div className="text-muted-foreground text-sm">No hay mensajes leídos.</div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
