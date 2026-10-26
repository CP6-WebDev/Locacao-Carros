
import Card from "../components/Card";
import { carros } from "../data/carros";

function Carros() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-16">
      <h1 className="text-4xl font-bold">Nossos carros</h1>

      <p className="mt-3 max-w-xl text-asfalto/70">
        Todos os modelos são importados, revisados e entregues com seguro
        incluso. Valores por dia de locação.
      </p>

      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {carros.map((carro) => (
          <Card key={carro.id} carro={carro} />
        ))}
      </div>
    </section>
  );
}

export default Carros;
