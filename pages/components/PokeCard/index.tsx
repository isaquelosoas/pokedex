import Image from 'next/image'
import {Container} from './styles.js'
import SearchIcon from '../../../public/search.svg'
interface PokeCardProps{
    loading:boolean    
    pokemon?: {
        id: number,
        num: string,
        name: string,
        img: string,
        type: string[]      
    }
}
const PokeCard = ({loading,pokemon}:PokeCardProps) => {    
  return ( 
    <Container loading={loading}>       
        <figure>
            {pokemon&&<img src={pokemon.img} /> }
        </figure>
        <span>{pokemon&&pokemon.num}</span>
        <h2>{pokemon&&pokemon.name}</h2>
        <div>
            {pokemon&&pokemon.type.map((t,i)=><label key={i}>{t}</label>)}
        </div>
             
    </Container>
    )
}

export default PokeCard
