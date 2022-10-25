
import { useState } from "react"
import PokemonCard from "../components/PokemonCard"

interface Props {
    initialPokemons: any[]
}

const DexPage = ({ initialPokemons }: Props) => {
    const [pokemons, setPokemons] = useState(initialPokemons)

    const imageUrl = process.env.NEXT_APP_IMAGE_URL || ""
    return (
        <>
            <h1>Dex Page</h1>
            <div className="pokemon-container">
                {pokemons.map((pokemon: any, index: number) => {
                    const id: number = getIdFromUrl(pokemon.url)
                    let checked = false
                    let checkedPokemons = null
                    if (typeof window !== 'undefined') {
                        checkedPokemons = JSON.parse(localStorage.getItem("checkedPokemons") || "{}")
                    }
                    if (checkedPokemons && checkedPokemons[id] === true) {
                        checked = true
                    }
                    return (
                        <PokemonCard
                            key={index}
                            id={id}
                            image={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`}
                            name={pokemon.name}
                            checked={checked}
                        />

                    )
                })}
            </div>
        </>
    )
}

const getIdFromUrl = (url: string) => {
    const id = url.split('/').reverse()[1]
    return parseInt(id)
}
export async function getServerSideProps() {
    const url = process.env.NEXT_APP_API_URL || ""
    const requestOptions = {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' }
    }
    const offset = 0
    const limit = 10000
    const response = await fetch(`${url}?offset=${offset}&limit=${limit}`, requestOptions)
    const pokemonData = await response.json()

    return {
        props: {
            initialPokemons: pokemonData.results
        }, // will be passed to the page component as props
    }
}

export default DexPage
