import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Avatar } from './ui/avatar';

export function ProfileSection() {
  // Datos de ejemplo, puedes reemplazar por props o datos reales
  const [user, setUser] = useState({
    name: 'Juan Pérez',
    email: 'juan.perez@email.com',
    unit: 'Torre A - 302',
    address: 'Av. Principal, Torre A, Piso 3, Apto 302',
    phone: '+58 412-1234567',
    avatarUrl: 'https://ui-avatars.com/api/?name=Juan+Pérez&background=0D8ABC&color=fff',
    role: 'Residente',
  });
  const [editMode, setEditMode] = useState(false);
  const [form, setForm] = useState({
    name: user.name,
    phone: user.phone,
    unit: user.unit,
    address: user.address,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSave = () => {
    setUser({ ...user, ...form });
    setEditMode(false);
  };

  return (
    <section className="py-16 bg-white">
      <div className="max-w-xl mx-auto px-4">
        <Card className="shadow-md">
          <CardHeader className="flex flex-col items-center">
            <Avatar className="w-24 h-24 mb-4">
              <img
                src={user.avatarUrl}
                alt={user.name}
                className="rounded-full w-full h-full object-cover"
              />
            </Avatar>
            <CardTitle className="text-2xl mb-1">{user.name}</CardTitle>
            <div className="text-muted-foreground text-sm mb-1">{user.role}</div>
            <div className="text-muted-foreground text-sm">{user.unit}</div>
          </CardHeader>
          <CardContent className="flex flex-col items-center gap-2 mt-2 w-full">
            <div className="text-base w-full">
              <span className="font-medium">Correo:</span> {user.email}
            </div>
            {editMode ? (
              <>
                <div className="w-full">
                  <label className="block text-sm mb-1">Nombre</label>
                  <input
                    className="border rounded px-2 py-1 w-full"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                  />
                </div>
                <div className="w-full">
                  <label className="block text-sm mb-1">Teléfono</label>
                  <input
                    className="border rounded px-2 py-1 w-full"
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                  />
                </div>
                <div className="w-full">
                  <label className="block text-sm mb-1">Unidad</label>
                  <input
                    className="border rounded px-2 py-1 w-full"
                    name="unit"
                    value={form.unit}
                    onChange={handleChange}
                  />
                </div>
                <div className="w-full">
                  <label className="block text-sm mb-1">Dirección</label>
                  <input
                    className="border rounded px-2 py-1 w-full"
                    name="address"
                    value={form.address}
                    onChange={handleChange}
                  />
                </div>
                <div className="flex gap-2 mt-4">
                  <Button size="sm" onClick={handleSave}>
                    Guardar
                  </Button>
                  <Button size="sm" variant="outline" onClick={() => setEditMode(false)}>
                    Cancelar
                  </Button>
                </div>
              </>
            ) : (
              <>
                <div className="text-base w-full">
                  <span className="font-medium">Teléfono:</span> {user.phone}
                </div>
                <div className="text-base w-full">
                  <span className="font-medium">Unidad:</span> {user.unit}
                </div>
                <div className="text-base w-full">
                  <span className="font-medium">Dirección:</span> {user.address}
                </div>
                <Button
                  className="mt-4 w-full"
                  variant="outline"
                  size="sm"
                  onClick={() => setEditMode(true)}
                >
                  Editar datos
                </Button>
              </>
            )}
            <div className="w-full mt-6">
              <Button
                className="w-full"
                variant="secondary"
                size="sm"
                onClick={() => window.open('mailto:soporte@condominio.com')}
              >
                Contactar soporte
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
