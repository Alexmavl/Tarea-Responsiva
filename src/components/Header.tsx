import { useState } from 'react';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-blue-600 text-white">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold">MiLogo</div>

        <nav className="hidden md:flex space-x-6">
          <a href="#" className="hover:text-gray-300">Inicio</a>
          <a href="#" className="hover:text-gray-300">Servicios</a>
          <a href="#" className="hover:text-gray-300">Contacto</a>
        </nav>

        {/* Botón de menú hamburguesa */}
        <button
          className="md:hidden focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={menuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
            />
          </svg>
        </button>
      </div>

      {/* Menú móvil */}
      {menuOpen && (
        <div className="md:hidden bg-blue-500 px-4 pb-4 space-y-2">
          <a href="#" className="block">Inicio</a>
          <a href="#" className="block">Servicios</a>
          <a href="#" className="block">Contacto</a>
        </div>
      )}
    </header>
  );
};

export default Header;
