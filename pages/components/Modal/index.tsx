import type { NextPage } from 'next'
import { useState } from 'react'
import {Container} from './styles'
interface ModalProps{
    onClick:()=>void
    
}
const Modal = ({onClick}:ModalProps) => {  
  return (
    <Container>
        <Container onClick={onClick}>
        </Container>
        <div className="modalCard">
          <div className="prevNextButton">

          </div>
          <div className="main">
          </div>
          <div className="prevNextButton">

          </div>
        </div>
    </Container>    
    
  )
}

export default Modal