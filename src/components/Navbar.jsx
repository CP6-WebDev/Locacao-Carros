import { Link } from "react-router-dom";

function Navbar() {
  return (
    <header className="sticky top-0 z-10 border-b border-asfalto/10 bg-pedra/90 backdrop-blur">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link to="/" className="font-display text-xl font-bold text-corrida">
          Marchas Importadas
        </Link>

        <div className="flex items-center gap-6">
          <Link
            to="/"
            className="pb-1 text-sm font-medium text-asfalto/70 hover:text-corrida"
          >
            Home
          </Link>

          <Link
            to="/carros"
            className="pb-1 text-sm font-medium text-asfalto/70 hover:text-corrida"
          >
            Carros
          </Link>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;