import Image from 'next/image'
import {Container} from './styles.js'
import SearchIcon from '../../../public/search.svg'
import { useEffect, useRef, useState } from 'react'
import globalStyles from '../../../styles/globalStyle'
import PokeCard from '../PokeCard'
import axios from 'axios'
interface PokeData{  
    pokemon: {
      id: number,
      num: string,
      name: string,
      img: string,
      type: string[],
      height: string,
      weight: string,
      candy: string,
      candy_count: number,
      egg:string,
      spawn_chance: number,
      avg_spawns: number,
      spawn_time: string,
      multipliers: number[],
      weaknesses: string[],
      next_evolution: {
        num: string,
        name: string,
      }, 
    }[]
  
}
const PokeList:React.FC = () => {
  const refMain = useRef(null)
  const [loading, setLoading] = useState(true)
  const [resized, setResized] = useState<boolean>(false)
  const [maxColumns, setMaxColumns] = useState<number>(0)
  const [maxRows, setMaxRows] = useState<number>(0)
  const [data, setData] = useState<PokeData | null>(null)
  useEffect(()=>{
    window.addEventListener("resize",()=>{
      setResized(true)
    })
  },[])
  useEffect(()=>{
    if(refMain.current){
      const {cardWidth, cardHeight, cardMargin} = globalStyles
      const {offsetHeight, offsetWidth} = refMain.current
      window.innerWidth < 600?setMaxColumns(1):setMaxColumns(Math.floor((offsetWidth-60)/(cardWidth+2*cardMargin)))
      window.innerWidth < 600?setMaxRows(1):setMaxRows(Math.floor(offsetHeight/(cardHeight+2*cardMargin)))
    } 
    setResized(false)   
  },[resized])
  useEffect(()=>{
    const request = async () =>{
      const response = await axios.request<PokeData>({
        method:"GET",
        url: 'https://raw.githubusercontent.com/Biuni/PokemonGO-Pokedex/master/pokedex.json',        
      }).then((response) => {
        // `response` is of type `AxiosResponse<ServerData>`
        setData(response.data)
        console.log(response)
        // `data` is of type ServerData, correctly inferred
      })      
    }
    request()
    setLoading(false)
  },[])
  const renderLoadingCards = ()=>{
    const numCards = new Array(maxRows*maxColumns+1).fill("loading")
    return numCards.map((card,i)=><PokeCard key={i} loading/>)

  }
  return ( 
    <Container>
      <section ref={refMain}>
        {
          loading&&renderLoadingCards()
        }     
        {
          
          data&&data.pokemon.map(p=>{
            const {id,num,name,img,type} = p
            const pokemon = {id,num,name,img,type}
            return <PokeCard loading={loading} key={id} pokemon={pokemon} />
          })
        } 
      </section>
    </Container>
    )
}

export default PokeList