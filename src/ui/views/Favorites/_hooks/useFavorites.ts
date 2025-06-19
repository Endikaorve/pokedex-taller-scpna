import { Pokemon } from '@/core/Pokemon/domain/Pokemon'
import { pokemonService } from '@/core/Pokemon/services/Pokemon.service'
import { useQueryService } from '@/ui/hooks/useQueryService'

export const useFavorites = () => {
  const { data, hasError, mutate } = useQueryService(
    'pokemon.listFavorites',
    [],
    () => pokemonService.listFavorites()
  )

  const updatePokemon = (updatedPokemon: Pokemon) => {
    const updatedPokemons = data?.map((pokemon) =>
      pokemon.id === updatedPokemon.id ? updatedPokemon : pokemon
    )

    mutate(updatedPokemons)
  }

  return { pokemons: data, hasError, updatePokemon }
}
