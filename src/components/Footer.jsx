
function Footer() {
  return (
    <footer className="bg-corrida text-pedra">
      <div className="mx-auto flex max-w-6xl flex-col gap-2 px-6 py-8 text-sm sm:flex-row sm:items-center sm:justify-between">
        <p className="font-display text-lg font-bold">Marchas Importadas</p>

        <p className="text-pedra/70">
          Locação de carros importados em São Paulo, SP
        </p>

        <p className="text-pedra/70">
          © {new Date().getFullYear()} Todos os direitos reservados
        </p>
      </div>
    </footer>
  );
}

export default Footer;
