import styled from 'styled-components';
import globalStyle from '../../../styles/globalStyle'
const {typeColors} = globalStyle
export const Label = styled.label`
    padding:5px;
    border:1px solid black;
    margin-right:5px;
    border-radius:5px;
    color:#ffffff;
    background-color:${props=>typeColors[props.type]}
`