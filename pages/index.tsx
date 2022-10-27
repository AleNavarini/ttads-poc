import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import Header from '../components/Header'
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';


import styles from '../styles/Home.module.css'

const Home: NextPage = () => {


  return (
    <>
      <Header text='GO Checklists' />
      <Box>
        <Head>
          <title>TTADS Next.js POC</title>
          <meta name="description" content="TTADS Next.js Proof of Concept" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <List sx={{fontFamily:"Pokemon-Solid", color:"#ffffff"}}>
          <ListItem disablePadding>
            <Link href={"/dex"}>
              <ListItemButton>
                Dex
              </ListItemButton>
            </Link>
          </ListItem>
          <ListItem disablePadding>
            <Link href={"/work-in-progress"}>
              <ListItemButton>
                ShinyDex
              </ListItemButton>
            </Link>
          </ListItem>
          <ListItem disablePadding>
            <Link href={"/work-in-progress"}>
              <ListItemButton>
                LuckyDex
              </ListItemButton>
            </Link>
          </ListItem>
          <ListItem disablePadding>
            <Link href={"/work-in-progress"}>
              <ListItemButton>
                UnownDex
              </ListItemButton>
            </Link>
          </ListItem>
          <ListItem disablePadding>
            <Link href={"/work-in-progress"}>
              <ListItemButton>
                ShadowDex
              </ListItemButton>
            </Link>
          </ListItem>
        </List>
      </Box>
    </>
  )
}

export default Home
