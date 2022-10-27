import Image from "next/image"
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Checkbox from '@mui/material/Checkbox';
import useStorage from '../hooks/useLocalStorage';

interface Props {
    id: number
    image: string
    name: string
    checked: boolean,
    onChange: () => void,
}

const PokemonCard = ({ id, image, name, checked, onChange }: Props) => {

    const { getItem, setItem } = useStorage();

    return (

        <Card sx={{ margin: "10px" }}>
            <CardContent sx={{ display: "flex", alignItems: "center", flexDirection: "column", padding: "0 10px", position: "relative" }}>
                <Typography sx={{ fontFamily: "Pokemon-Solid", color: "#547AF0", userSelect:"none" }}>
                    {name}
                </Typography>
                <Box sx={{ width: "100%", height: "2px", background: "#547AF0", top: "35px", position: "absolute" }}></Box>
                <Image
                    src={image}
                    alt={name}
                    height="96px"
                    width="96px"

                />
            </CardContent>
            <CardActions sx={{ justifyContent: "flex-end", padding: "0.5em" }}>
                <input
                    type="checkbox"
                    style={{cursor:"pointer", width:"18px", height:"18px", color:"red"}}
                    id={name}
                    defaultChecked={checked}
                    onClick={(e) => {
                        
                        const checkedPokemons = JSON.parse(getItem("checkedPokemons") || "{}")
                        
                        if (checkedPokemons[id] === true) {
                            delete checkedPokemons[id]
                        }
                        else {
                            checkedPokemons[id] = true
                        }

                        setItem("checkedPokemons", JSON.stringify(checkedPokemons))

                        if(onChange) onChange();
                    }}
                />
            </CardActions>
        </Card>
    )
}

export default PokemonCard