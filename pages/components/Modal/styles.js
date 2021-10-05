import styled from 'styled-components';

export const Container = styled.div`
    position: fixed;
    top:0px;
    bottom: 0px;
    left: 0px;
    right: 0px;
    border: 1px solid black;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(0,0,0,0.7);
    .modalCard{
        z-index:100;
        background-color:white;
        width:100%;
        min-height:200px;
        display:flex;
        .prevNextButton{
            border:1px solid black;
            width:50px;
        }
    }
    .main{
        width:100%
    }
`