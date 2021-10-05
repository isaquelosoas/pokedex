import Image from 'next/image'
import {Container} from './styles.js'
import SearchIcon from '../../../public/search.svg'
import { useRef } from 'react'
interface HeaderProps{
  handleFilter: (value:string)=>void
}
const Header = ({handleFilter}:HeaderProps) => {
  const inputRef = useRef(null)
  return ( 
    <Container>
      <header>
          <h1>Pokédex</h1>
          <div className="search">
            <label htmlFor="searchInput">Name or Number</label>
            <form className="inputContainer" onSubmit={(e)=>{
                e.preventDefault();
                const {value} = inputRef.current?inputRef.current:{value:""}
                handleFilter(value)
              }}>
                <input type="text" ref={inputRef} id="searchInput"/>
                <button>
                  <Image 
                    src={SearchIcon} 
                    onClick={()=>{
                      const {value} = inputRef.current?inputRef.current:{value:""}
                      handleFilter(value)
                    }} 
                    alt="Search Icon" />
                </button>
            </form>
          </div>
              
      </header>
    </Container>
    )
}

export default Header
