import Image from 'next/image'
import {Container} from './styles.js'
import SearchIcon from '../../../public/search.svg'

const Header:React.FC = () => {
  return ( 
    <Container>

      <header>
          <h1>Pokédex</h1>
          <div className="search">
            <label htmlFor="searchInput">Name or Number</label>
            <div className="inputContainer">
                <input type="text" id="searchInput"/>
                <button><Image src={SearchIcon} alt="Search Icon" /></button>
            </div>
          </div>
              
      </header>
    </Container>
    )
}

export default Header
