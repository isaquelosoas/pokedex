import styled from 'styled-components';
import globalStyle from '../../../styles/globalStyle'
const {cardWidth, cardHeight, cardMargin} = globalStyle
export const Container = styled.div` 
    ${props=>props.modal&&`pointer-events:none`}
    
    :hover{
        box-shadow:0.5rem 0.5rem 0.5rem #787878;
        transform:scale(1.02);
        cursor:pointer;
        z-index:0;
    }
    display: flex;
    width:100%;
    height:${cardHeight}px;
    flex-direction: column;
    transition: ${props=>props.modal?"all 0.3s":"all 0s"}; 
    animation-name: ${props=>props.loading?"fade":""};
    animation-duration: 1.5s;
    animation-iteration-count: infinite;
    figure{
        margin:0px;
        min-width:100%;
        margin-bottom:10px;
        display:flex;
        align-items:center;
        justify-content:center;
        background-color:#e3e1e1;
        max-height:${cardWidth}px;
        height:${cardWidth}px;   
        img{
            min-width:200px;  
        } 
    }
    span{
        width:${props=>props.loading&&80}px;
        background-color:${props=>props.loading&&"#e3e1e1"};
        max-height:${props=>props.loading&&20}px;
        height:${props=>props.loading&&20}px;        
        font-family:'Roboto', sans-serif;        
        font-weight:700;
        color:#787878;
    }
    h2{
        width:${props=>props.loading&&200}px;
        background-color:${props=>props.loading&&"#e3e1e1"};
        max-height:${props=>props.loading&&40}px;
        height:${props=>props.loading&&40}px;
        font-weight:700;
        font-size:20pt;
    }
    @keyframes fade {
        0% {opacity:  0.2;}
        50%{opacity:  1;}
        100%{opacity: 0.2;}        
    }
    @media (min-width: 600px) {
        margin:${cardMargin}px;
        min-width:${cardWidth}px;
        width:${cardWidth}px;
        height:${cardHeight}px;
    }
`;
