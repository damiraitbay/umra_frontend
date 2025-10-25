// src/pages/Packages.jsx
export default function Packages() {
  const packages = [
    {
      id: 1,
      name: "Эконом пакет",
      price: "900$",
      duration: "7 күн",
      description: "Ыңғайлы қонақ үй, топтық трансфер, 3 уақыт тамақ.",
    },
    {
      id: 2,
      name: "Стандарт пакет",
      price: "1300$",
      duration: "10 күн",
      description: "Қасиетті орындарға жеке экскурсия, виза, сақтандыру.",
    },
    {
      id: 3,
      name: "Премиум пакет",
      price: "1800$",
      duration: "12 күн",
      description: "5⭐️ қонақ үй, жеке гид, жеке көлік, барлық шығындар.",
    },
  ];

  return (
    <section className="py-12 bg-white">
      <h2 className="text-3xl font-bold text-center text-green-700 mb-10">
        Біздің Умра турлары
      </h2>

      <div className="max-w-6xl mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-8 px-6">
        {packages.map((pkg) => (
          <div
            key={pkg.id}
            className="bg-gray-50 rounded-2xl shadow hover:shadow-lg p-6 transition"
          >
            <h3 className="text-xl font-semibold text-green-700 mb-2">
              {pkg.name}
            </h3>
            <p className="text-gray-600 mb-3">{pkg.description}</p>
            <p className="text-sm text-gray-500 mb-2">Ұзақтығы: {pkg.duration}</p>
            <p className="text-lg font-bold mb-4">{pkg.price}</p>
            <a
              href="/booking"
              className="inline-block bg-green-700 text-white px-5 py-2 rounded-lg hover:bg-green-800"
            >
              Брондау
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
