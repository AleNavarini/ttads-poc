import { Typography } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import { AiOutlineHome } from 'react-icons/ai';
import { GiBigGear } from 'react-icons/gi';
import Link from 'next/link';
import Box from '@mui/material/Box';

interface Props {
    text: string
}
const Header = ({ text }: Props) => {

    return (
        <Box sx={{
            color: "#FFFFFF",
            padding: "0.5em",
            margin: "0",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            borderBottom:"2px solid #FFFFFF"
           
          
        }}>
            <Link href="/">
                <IconButton sx={{color:"#FFFFFF"}} size="large">
                    <AiOutlineHome />
                </IconButton>
            </Link>

            <Typography sx={{ marginBottom: "10px", fontFamily:"Pokemon-Solid" }} variant="h4" gutterBottom>
                {text}
            </Typography>

            <Link href="work-in-progress">
                <IconButton sx={{color:"#FFFFFF"}} size="large">
                    <GiBigGear />
                </IconButton>
            </Link>
        </Box>
    )
}

export default Header