import Image from "next/image"
import { useState } from "react"

interface Props {
    initialPokemons: any[]
}

const DexPage = ({ initialPokemons }: Props) => {
    const [pokemons, setPokemons] = useState(initialPokemons)
    const imageUrl = process.env.NEXT_APP_IMAGE_URL || ""
    return (
        <>
            <h1>Dex Page</h1>
            {pokemons.map((pokemon: any, index: number) => {

                const id = getIdFromUrl(pokemon.url)
                return (
                    <div key={index}>
                        <Image
                            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`}
                            width={96}
                            height={96}
                            alt={pokemon.name}></Image>
                        <pre>{JSON.stringify(pokemon, null, 2)}</pre>
                    </div>
                )
            })}
        </>
    )
}

const getIdFromUrl = (url: string) => {
    const id = url.split('/').reverse()[1]
    return id
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
