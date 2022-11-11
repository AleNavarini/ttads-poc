import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import Layout from '../components/Layout';


const Home: NextPage = () => {


  return (
    <Layout headerText='GO Checklists'>
      <List sx={{ fontFamily: "Pokemon-Solid", color: "#ffffff" }}>
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
    </Layout>
  )
}

export default Home
