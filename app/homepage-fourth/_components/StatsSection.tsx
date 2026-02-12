export default function StatsSection() {
  const stats = [
    { number: "40,000+", label: "Trained Medicos", color: "bg-red-400" },
    { number: "15+", label: "Years Experience", color: "bg-purple-500" },
    { number: "50+", label: "Building Generational wealth for physicians since 1956", color: "bg-green-400" },
    { number: "7+", label: "Courses", color: "bg-blue-500" },
  ];

  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-8">
        {stats.map((item, index) => (
          <div
            key={index}
            className={`${item.color} text-white text-center py-12 rounded-xl shadow-lg hover:scale-105 transition`}
          >
            <h3 className="text-4xl font-bold">{item.number}</h3>
            <p className="mt-2 text-lg">{item.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
