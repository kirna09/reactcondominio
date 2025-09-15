export function StatsSection() {
  const stats = [
    { number: "500+", label: "Condominios Activos" },
    { number: "15,000+", label: "Unidades Administradas" },
    { number: "98%", label: "Satisfacción de Usuarios" },
    { number: "24/7", label: "Soporte Técnico" }
  ];

  return (
    <section className="py-16 bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl md:text-4xl mb-2">
                {stat.number}
              </div>
              <div className="text-primary-foreground/80">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}