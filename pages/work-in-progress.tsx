import Header from "../components/Header"
import {CgSandClock} from 'react-icons/cg';
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import {keyframes} from '@mui/system';

const WorkInProgressPage = () => {


    const spin = keyframes`
        from {
        transform: rotate(0deg);
        }
        to {
        transform: rotate(360deg);
        }
    `;

    return (
        <>
            <Header text='GO Checklists' />
            <Box sx={{height:"calc(100vh - 70px)", display:"flex", justifyContent:"center", alignItems:"center"}}>
                <Box sx={{color:"#FFFFFF",display:"flex", justifyContent:"space-between", flexDirection:"column", alignItems:"center", height:"20%"}}>
                    <Box sx={{animation: `${spin} 1s infinite ease`}}>
                    <CgSandClock size={"80px"}/>
                    </Box>
                    <Typography variant="h5">
                        Work in Progress...
                    </Typography>
                </Box>
            </Box>
        </>
    )
}
export default WorkInProgressPage