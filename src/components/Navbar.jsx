import { NavLink, Link } from "react-router-dom";

function Navbar() {
  const estiloLink = ({ isActive }) =>
    `pb-1 text-sm font-medium border-b-2 transition-colors ${
      isActive
        ? "border-latao text-corrida"
        : "border-transparent text-asfalto/70 hover:text-corrida"
    }`;

  return (
    <header className="sticky top-0 z-10 border-b border-asfalto/10 bg-pedra/90 backdrop-blur">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link to="/" className="font-display text-xl font-bold text-corrida">
          Marchas Importadas
        </Link>

        <div className="flex items-center gap-6">
          <NavLink to="/" end className={estiloLink}>
            Home
          </NavLink>
          <NavLink to="/carros" className={estiloLink}>
            Carros
          </NavLink>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;