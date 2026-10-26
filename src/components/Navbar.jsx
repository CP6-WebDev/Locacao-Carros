import { Link } from "react-router-dom";

function Navbar() {
  return (
    <header>
      <nav>
        <Link to="/">Marchas Importadas</Link>

        <div>
          <Link to="/">Home</Link>
          <Link to="/carros">Carros</Link>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;