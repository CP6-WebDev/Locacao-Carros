
import { Link } from "react-router-dom";
import Card from "../components/Card";
import { carros } from "../data/carros";

function Home() {
  const destaques = carros.slice(0, 3);

  return (
    <>
      <section
        className="bg-corrida text-pedra"
        aria-labelledby="hero-title"
      >
        <div className="mx-auto max-w-6xl px-6 py-20 sm:py-28">
          <h1
            id="hero-title"
            className="max-w-2xl text-4xl font-bold leading-tight sm:text-6xl"
          >
            Dirija o carro que você só via na estrada.
          </h1>

          <p className="mt-6 max-w-xl text-lg text-pedra/80">
            Esportivos e sedãs importados para alugar por dia, com retirada em
            São Paulo e o carro entregue revisado.
          </p>

          <Link
            to="/carros"
            className="mt-8 inline-block rounded bg-latao px-6 py-3 font-medium text-asfalto transition-opacity hover:opacity-90"
          >
            Ver carros disponíveis
          </Link>
        </div>
      </section>

      <section
        className="mx-auto max-w-6xl px-6 py-16"
        aria-labelledby="destaques-title"
      >
        <div className="flex items-end justify-between">
          <h2 id="destaques-title" className="text-3xl font-bold">
            Em destaque
          </h2>

          <Link
            to="/carros"
            className="text-sm font-medium text-corrida underline underline-offset-4"
          >
            Ver todos
          </Link>
        </div>

        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {destaques.map((carro) => (
            <Card key={carro.id} carro={carro} />
          ))}
        </div>
      </section>
    </>
  );
}

export default Home;