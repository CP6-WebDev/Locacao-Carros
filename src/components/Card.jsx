function Card({ carro }) {
  return (
    <article>
      <img src={carro.imagem} alt={`${carro.marca} ${carro.modelo}`} />

      <div>
        <p>{carro.marca}</p>
        <h3>{carro.modelo}</h3>
        <p>{carro.ano} · {carro.potencia}</p>

        <p>{carro.preco} /dia</p>

        <button type="button">
          Reservar
        </button>
      </div>
    </article>
  );
}

export default Card;