import Image from 'next/image'
import {Container} from './styles.js'
import SearchIcon from '../../../public/search.svg'
import { useEffect, useRef, useState } from 'react'
import globalStyles from '../../../styles/globalStyle'
import PokeCard from '../PokeCard'
import axios from 'axios'
import Modal from '../Modal'
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
interface PokeListProps{
  filterValue:string
}
const PokeList = ({filterValue}:PokeListProps) => {
  const refMain = useRef(null)
  const [loading, setLoading] = useState(true)
  const [resized, setResized] = useState<boolean>(false)
  const [maxColumns, setMaxColumns] = useState<number>(0)
  const [maxRows, setMaxRows] = useState<number>(0)
  const [data, setData] = useState<PokeData | null>(null)
  const [modal,setModal] = useState<boolean>(false)
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
      await new Promise(r => setTimeout(r, 3000));     
      const response = await axios.request<PokeData>({
        method:"GET",
        url: 'https://raw.githubusercontent.com/Biuni/PokemonGO-Pokedex/master/pokedex.json',        
      }).then((response) => {
        setData(response.data)
        setLoading(false)
      }) 
    }
    request()
  },[])  
  const renderLoadingCards = ()=>{
    const numCards = new Array(maxRows*maxColumns+1).fill("loading")
    return numCards.map((card,i)=><PokeCard modal={modal} onClick={()=>{}} key={i} loading/>)
  }   
  const renderFilteredValues = () =>{
    if(data){
      const re = new RegExp(filterValue, "gi")      
      const filteredData = data.pokemon.filter(d=>{
        return re.test(d.name) || parseInt(d.num) === parseInt(filterValue) 
      })
      
      return filteredData.length>0?filteredData.map(d=>{
        const {name,id,num,img,type} =  d
        const pokemon = {id,num,name,img,type}
        return <PokeCard onClick={()=>{setModal(true)}} modal={modal} loading={loading} key={id} pokemon={pokemon} />
      }):<h1>No Results :(</h1>
    }
    else{
      renderLoadingCards()
    }
  }
  return ( 
    <Container>
      {modal&&<Modal onClick={()=>{setModal(false)}}/>}
      <section ref={refMain}>
        {
          loading&&renderLoadingCards()
        }     
        {filterValue&&renderFilteredValues()}
        {          
          data&&!filterValue&&data.pokemon.map(p=>{
            const {id,num,name,img,type} = p
            const pokemon = {id,num,name,img,type}
            return <PokeCard onClick={()=>{setModal(true)}} modal={modal} loading={loading} key={id} pokemon={pokemon} />
          })
        } 
      </section>
    </Container>
    )
}

export default PokeList