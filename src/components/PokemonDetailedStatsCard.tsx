import { PokemonStat } from "../store/apis/pokemonsApi";

function PokemonDetailedStatsCard({ pokeStats }: { pokeStats: PokemonStat[] }) {
  console.log(pokeStats);

  return (
    <div className="flex flex-col p-4 bg-black border-2 rounded-md border-gray-700 text-white font-bold w-96">
      <div className="my-2 mx-auto">STATS</div>
      {pokeStats.map((stat) => {
        return (
          <div key={stat.stat.name} className="flex flex-row">
            <div className="justify-items-start">
              {stat.stat.name.toUpperCase()}:
            </div>{" "}
            <div className="ml-auto">{stat.base_stat}</div>
          </div>
        );
      })}
    </div>
  );
}

export default PokemonDetailedStatsCard;
