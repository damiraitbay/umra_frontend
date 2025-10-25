import { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState(""); // Хабарлама жіберу статусы

  // Input өзгергенде state жаңарту
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // Форма жіберілгенде API-ға POST
  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Жіберілуде...");

    try {
      const res = await fetch("https://umra-backend-2.onrender.com/api/messages", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (res.ok) {
        setStatus("Хабарлама сәтті жіберілді ✅");
        setForm({ name: "", email: "", message: "" });
      } else {
        setStatus("Қате орын алды ❌");
      }
    } catch (err) {
      console.error(err);
      setStatus("Сервермен байланыс жоқ ❌");
    }
  };

  return (
    <section className="bg-gray-50 py-16">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
        {/* Сол жақ бөлік — байланыс мәліметтері */}
        <div>
          <h2 className="text-3xl font-bold text-green-700 mb-4">
            Байланыс ақпараты
          </h2>
          <p className="text-gray-700 mb-2">
            Сұрақтарыңыз немесе брондау бойынша кеңес алу үшін бізге хабарласыңыз.
          </p>

          <ul className="mt-6 space-y-3 text-gray-800">
            <li>
              📍 <strong>Мекенжай:</strong> Алматы қаласы, Абылай хан көшесі 25
            </li>
            <li>
              ☎️ <strong>Телефон:</strong>{" "}
              <a href="tel:+77071234567" className="text-green-700 hover:underline">
                +7 (707) 123-45-67
              </a>
            </li>
            <li>
              📧 <strong>Email:</strong>{" "}
              <a href="mailto:info@umratravel.kz" className="text-green-700 hover:underline">
                info@umratravel.kz
              </a>
            </li>
            <li>
              🕒 <strong>Жұмыс уақыты:</strong> Дс–Жм: 9:00–18:00
            </li>
          </ul>
        </div>

        {/* Оң жақ бөлік — Google карта */}
        <div className="w-full h-80 rounded-2xl overflow-hidden shadow">
          <iframe
            title="Umra Travel Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2924.3795099641866!2d76.92411141574441!3d43.25600697913692!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38836fca2b0b53a7%3A0x5d9a4dfc6e44b9b!2sAlmaty%20City%20Center!5e0!3m2!1sen!2skz!4v1699783523422!5m2!1sen!2skz"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>

      {/* Хабарласу формасы */}
      <div className="max-w-4xl mx-auto mt-16 bg-white shadow-lg rounded-2xl p-8">
        <h3 className="text-2xl font-bold text-green-700 text-center mb-6">
          Бізге хабарлама қалдырыңыз
        </h3>

        <form onSubmit={handleSubmit} className="grid md:grid-cols-2 gap-6">
          <div>
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

          <div>
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

          <div className="md:col-span-2">
            <label className="block text-gray-700 mb-1">Хабарлама</label>
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              required
              rows="4"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-green-600 outline-none"
            ></textarea>
          </div>

          <div className="md:col-span-2 text-center">
            <button
              type="submit"
              className="bg-green-700 text-white px-8 py-2 rounded-lg hover:bg-green-800 transition"
            >
              Жіберу
            </button>
          </div>
        </form>

        {status && <p className="mt-4 text-center text-gray-700">{status}</p>}
      </div>
    </section>
  );
}
