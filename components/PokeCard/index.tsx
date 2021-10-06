import Image from 'next/image'
import {Container} from '../../styles/pokeCardStyle'
import {Label} from '../../styles/labelStyle'
import SearchIcon from '../../../public/search.svg'
interface PokeCardProps{
    modal:boolean,
    onClick:(id:number)=>void
    loading:boolean    
    pokemon?: {
        id: number,
        num: string,
        name: string,
        img: string,
        type: string[]      
    }
}
const PokeCard = ({loading,pokemon, onClick, modal}:PokeCardProps) => {  
  return ( 
    <Container modal={modal} loading={loading} onClick={()=>{onClick(pokemon?pokemon.id:1)}}>       
        <figure>
            {pokemon&&<img src={pokemon.img} /> }
        </figure>
        <span>{pokemon&&"#"+pokemon.num}</span>
        <h2>{pokemon&&pokemon.name}</h2>
        <div>
            {pokemon&&pokemon.type.map((t,i)=><Label type={t} key={i}>{t}</Label>)}
        </div>
             
    </Container>
    )
}

export default PokeCard
