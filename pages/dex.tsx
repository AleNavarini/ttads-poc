
import { useState } from "react"
import Header from "../components/Header"
import PokemonCard from "../components/PokemonCard"
import axios from 'axios';
import Box from '@mui/material/Box';
import useStorage from '../hooks/useLocalStorage';

interface Props {
    initialPokemons: any[]
}

const DexPage = ({ initialPokemons }: Props) => {
    const [pokemons, setPokemons] = useState(initialPokemons);
    const imageUrl: string = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon";
    const {getItem} = useStorage();

    return (
        <>
            <Header text='Dex' />
            <Box sx={{
                display:"flex",
                flexWrap: "wrap",
                justifyContent:"center",

            }}>
                {pokemons.map((pokemon: any, index: number) => {
                    const id: number = getIdFromUrl(pokemon.url)
                    let checked = false
                    let checkedPokemons = null
                    
                    

                    checkedPokemons = JSON.parse(getItem("checkedPokemons") || "{}");
                    

                    checked = checkedPokemons && checkedPokemons[id];
  
                    console.log(checked);

                    return (
                        <PokemonCard
                            key={index}
                            id={id}
                            image={`${imageUrl}/${id}.png`}
                            name={pokemon.name}
                            checked={checked}
                        />

                    )
                })}
            </Box>
        </>
    )
}

const getIdFromUrl = (url: string) => {
    const id = url.split('/').reverse()[1]
    return parseInt(id)
}
export async function getServerSideProps() {
    const url = process.env.NEXT_APP_API_URL || ""
    const offset = 0
    const limit = 20
    const response = await axios.get(`${url}?offset=${offset}&limit=${limit}`);
    const pokemonData = await response.data;

    return {
        props: {
            initialPokemons: pokemonData.results
        }, // will be passed to the page component as props
    }
}

export default DexPage
