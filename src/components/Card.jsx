function Card({ carro }) {
  return (
    <article className="overflow-hidden rounded-lg border border-asfalto/10 bg-white">
      <img
        src={carro.imagem}
        alt={`${carro.marca} ${carro.modelo}`}
        className="h-48 w-full object-cover"
      />

      <div className="p-5">
        <p className="text-sm text-asfalto/60">{carro.marca}</p>
        <h3 className="text-xl font-bold">{carro.modelo}</h3>
        <p className="mt-1 text-sm text-asfalto/70">
          {carro.ano} · {carro.potencia}
        </p>

        <div className="mt-5 flex items-center justify-between">
          <p>
            <span className="text-lg font-bold text-corrida">
              {carro.preco}
            </span>
            <span className="text-sm text-asfalto/60"> /dia</span>
          </p>

          <button
            type="button"
            className="cursor-pointer rounded bg-corrida px-4 py-2 text-sm font-medium text-pedra transition-colors hover:bg-asfalto"
          >
            Reservar
          </button>
        </div>
      </div>
    </article>
  );
}

export default Card;