import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Header from './components/Header'
import styled from 'styled-components';
import PokeList from './components/PokeList'
import { useState } from 'react'

const Home: NextPage = () => {
  const [filterValue,setfilterValue] = useState<string>("")
  const filter = (value:string)=>{
    setfilterValue(value)
  }
  return (
    <div className={styles.container}>
      <Head>
        <title>Pokédex - Home</title>
        <meta name="description" content="Pokedex List" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <Header handleFilter = {filter}/>
        <PokeList filterValue = {filterValue}/>   
      </main>      
    </div>
  )
}


export default Home
