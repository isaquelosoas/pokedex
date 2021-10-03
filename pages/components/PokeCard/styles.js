import styled from 'styled-components';
import globalStyle from '../../../styles/globalStyle'
const {cardWidth, cardHeight, cardMargin} = globalStyle
export const Container = styled.div`    
    display: flex;
    width:100%;
    height:${cardHeight}px;
    flex-direction: column;
    transition: all 0.2s; 
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
    }
    h2{
        width:${props=>props.loading&&200}px;
        background-color:${props=>props.loading&&"#e3e1e1"};
        max-height:${props=>props.loading&&40}px;
        height:${props=>props.loading&&40}px;
    }
    div{

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