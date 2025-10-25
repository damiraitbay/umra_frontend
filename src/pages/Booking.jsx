import { useState } from "react";

export default function Booking() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    package: "",
  });
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Жіберілуде...");

    try {
      const res = await fetch("https://umra-backend-2.onrender.com/api/bookings", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (res.ok) {
        setStatus("Брондау сәтті жасалды ✅");
        setForm({ name: "", phone: "", email: "", package: "" });
      } else {
        setStatus("Қате орын алды ❌");
      }
    } catch (err) {
      console.error(err);
      setStatus("Сервермен байланыс жоқ ❌");
    }
  };

  return (
    <section className="flex justify-center items-center py-16 bg-gray-50">
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-lg rounded-2xl p-8 w-full max-w-md"
      >
        <h2 className="text-2xl font-bold text-green-700 text-center mb-6">
          Брондау формасы
        </h2>

        <div className="mb-4">
          <label className="block text-gray-700 mb-1">Аты-жөні</label>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-green-600 outline-none"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 mb-1">Телефон нөмірі</label>
          <input
            type="tel"
            name="phone"
            value={form.phone}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-green-600 outline-none"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 mb-1">Email</label>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-green-600 outline-none"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 mb-1">Тур таңдаңыз</label>
          <select
            name="package"
            value={form.package}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-green-600 outline-none"
          >
            <option value="">Таңдаңыз...</option>
            <option value="Эконом пакет">Эконом пакет</option>
            <option value="Стандарт пакет">Стандарт пакет</option>
            <option value="Премиум пакет">Премиум пакет</option>
          </select>
        </div>

        <button
          type="submit"
          className="w-full bg-green-700 text-white py-2 rounded-lg font-semibold hover:bg-green-800 transition"
        >
          Жіберу
        </button>

        {status && <p className="mt-4 text-center text-gray-700">{status}</p>}
      </form>
    </section>
  );
}
