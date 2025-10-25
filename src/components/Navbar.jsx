import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-green-700 text-white px-6 py-3 flex justify-between items-center shadow">
      <h1 className="text-2xl font-bold">Umra Travel</h1>
      <div className="space-x-6">
        <Link to="/">Басты бет</Link>
        <Link to="/packages">Турлар</Link>
        <Link to="/booking">Брондау</Link>
        <Link to="/contact">Байланыс</Link>
      </div>
    </nav>
  );
}
