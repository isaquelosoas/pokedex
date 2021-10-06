import Image from 'next/image'
import {Container} from '../../styles/modalStyle'
import PrevIcon from './../../public/prev.svg'
import NextIcon from './../../public/next.svg'
import CloseButton from './../../public/close.svg'
interface Pokemon{
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
  }  
}
interface ModalProps{
    onPrev:()=>void
    onNext:()=>void
    pokemon:Pokemon
    onClick:()=>void
    
}
const Modal = ({onClick,onPrev,onNext,pokemon}:ModalProps) => {   
  const {img, name, height, weight, candy, egg , spawn_chance, avg_spawns} = pokemon  
  return (
    <Container>
        <Container onClick={onClick}>
        </Container>
        <div className="modal">
          <div className="closeContainer"><Image src = {CloseButton} onClick={onClick}/></div>
          <div className="modalCard">
            <div className="prevNextButton">
              <Image src={PrevIcon} onClick={onPrev}/>
            </div>
            <div className="main">
              <img src={img} alt={name}/>
              <h2>{pokemon.name}</h2>
              <div className="info">
                <h3>Height:</h3>
                <span>{height}</span>
              </div>
              <div className="info">
                <h3>Weight:</h3>
                <span>{weight}</span>
              </div>
              <div className="info">
                <h3>Candy:</h3>
                <span>{candy}</span>
              </div>
              <div className="info">
                <h3>Egg:</h3>
                <span>{egg}</span>
              </div>
              <div className="info">
                <h3>Spawn Chance:</h3>
                <span>{spawn_chance}</span>
              </div>
              <div className="info">
                <h3>Spawn Average:</h3>
                <span>{avg_spawns}</span>
              </div>
            </div>
            <div className="prevNextButton">
              <Image src={NextIcon} onClick={onNext}/>
            </div>
          </div>
        </div>
    </Container>    
    
  )
}

export default Modal