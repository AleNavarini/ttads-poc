
import { useState, useEffect } from "react"
import Layout from "../components/Layout"
import PokemonCard from "../components/PokemonCard"
import axios from 'axios';
import Box from '@mui/material/Box';
import useStorage from '../hooks/useLocalStorage';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import OutlinedInput from "@mui/material/OutlinedInput";
import { BiSearch } from 'react-icons/bi';
import InputAdornment from "@mui/material/InputAdornment";
import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';
import { styled } from '@mui/material/styles';
import Router from 'next/router';
import Button from '@mui/material/Button'

interface Props {
    initialPokemons: any[]
}

const DexPage = ({ initialPokemons }: Props) => {
    const [pokemons, setPokemons] = useState(initialPokemons);
    const [search, setSearch] = useState("");
    const imageUrl: string = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon";
    const { getItem, removeItem } = useStorage();


    const getIdFromUrl = (url: string) => {
        const id = url.split('/').reverse()[1]
        return parseInt(id)
    }

    const getObtainedPokemonsAmount = () => Object.keys(JSON.parse(getItem("checkedPokemons") || "{}")).length;
    const [progress, setProgress] = useState((getObtainedPokemonsAmount() / parseInt(process.env.NEXT_PUBLIC_POKEMONS_AMOUNT || '')) * 100);

    useEffect(() => {
        const filteredPokemons = [...initialPokemons].filter(pokemon => pokemon.name.includes(search));
        setPokemons([...filteredPokemons]);
    }, [search]);

    const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
        height: 15,
        borderRadius: 8,
        [`&.${linearProgressClasses.colorPrimary}`]: {
            backgroundColor: theme.palette.grey[theme.palette.mode === 'light' ? 200 : 800],
        },
        [`& .${linearProgressClasses.bar}`]: {
            borderRadius: 8,
            backgroundColor: "#547AF0",
        },
    }));

    return (
        <Layout headerText="Dex">
            <Box>
                <Box sx={{ margin: " 1em 0", padding: "0 1em" }}>
                    <BorderLinearProgress variant="determinate" value={progress} />
                </Box>
                <Box sx={{ display: "flex", justifyContent: "space-between", alignItems:"center" ,margin: "0.7em 1.8em" }}>
                    <Button onClick={() => {removeItem("checkedPokemons"), Router.reload()}} sx={{color:"ffffff", height:"50px", padding: "0 1em"}} size="small" variant="contained">Limpiar</Button>
                    <Filters search={search} setSearch={setSearch} />
                </Box>
                <Box sx={{
                    display: "flex",
                    flexWrap: "wrap",
                    justifyContent: "center",

                }}>

                    {pokemons.map((pokemon: any, index: number) => {
                        const id: number = getIdFromUrl(pokemon.url)
                        let checked = false
                        let checkedPokemons = null



                        checkedPokemons = JSON.parse(getItem("checkedPokemons") || "{}");
                        checked = checkedPokemons && checkedPokemons[id];


                        return (
                            <PokemonCard
                                key={index}
                                id={id}
                                image={`${imageUrl}/${id}.png`}
                                name={pokemon.name}
                                checked={checked}
                                onChange={() => setProgress((getObtainedPokemonsAmount() / parseInt(process.env.NEXT_PUBLIC_POKEMONS_AMOUNT || '')) * 100)}
                            />

                        )
                    })}
                </Box>
            </Box>

        </Layout>
    )
}

export async function getServerSideProps() {
    const url = process.env.NEXT_PUBLIC_API_URL || "";
    const offset = 0;
    const limit = process.env.NEXT_PUBLIC_POKEMONS_AMOUNT;
    const response = await axios.get(`${url}?offset=${offset}&limit=${limit}`);
    const pokemonData = await response.data;

    return {
        props: {
            initialPokemons: pokemonData.results
        }, // will be passed to the page component as props
    }
}

interface FiltersProps {
    search: string,
    setSearch: any
}

const Filters = ({ search, setSearch }: FiltersProps) => {


    return (


        <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined">
            <InputLabel sx={{
                color: "#ffffff !important"
            }} htmlFor="outlined-adornment-password">Buscar Pokémon</InputLabel>
            <OutlinedInput
                value={search}
                sx={{
                    color: "#ffffff",
                    ".MuiOutlinedInput-notchedOutline": {
                        borderColor: "#ffffff !important"
                    }

                }}
                onChange={(e) => setSearch(e.target.value)}
                endAdornment={
                    <InputAdornment position="end">
                        <BiSearch color="#ffffff" />
                    </InputAdornment>
                }
                label="Password"
            />
        </FormControl>
    )
}

export default DexPage
