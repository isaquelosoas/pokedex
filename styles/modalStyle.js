import styled from 'styled-components';

export const Container = styled.div`
    position: fixed;
    top:0px;
    bottom: 0px;
    left: 0px;
    right: 0px;
    border: 1px solid black;
    display: flex;
    cursor:pointer;
    justify-content: center;
    align-items: center;
    background-color: rgba(0,0,0,0.7);
    .closeContainer{
        display:flex;
        align-items:flex-end;
        justify-content:flex-end;
        width:100%;
        padding:10px;
        img{
            max-width:0.0025rem;
        }        
    }
    .modal{
        z-index:100;
        background-color:white;
        width:100%;
        min-height:200px;
        display:flex;
        flex-direction:column;
    }
    .modalCard{
        cursor:default;
        z-index:100;
        background-color:white;
        width:100%;
        min-height:200px;
        display:flex;
        .prevNextButton{
            width:90px;
            display:flex;  
            img{                
                transition: all 0.4s;        
            }  
        }
        .prevNextButton:hover{
            img{
                cursor:pointer;
                transform:scale(1.1);
            }
        }
    }
    .main{
        width:100%;
        display:flex;
        flex-direction:column;
        align-items:stretch;
        img{
            width:240px;
            align-self:center;
        }
        h2{
            text-align:center;
            font-family: 'Roboto', sans-serif;
            color:#313131;
        }
    }
    .info{
        border-top:1px solid #898989;
        display:flex;
        align-items:center;
        justify-content:space-between;
        h3{
            font-size:0.9rem;
            font-family: 'Roboto', sans-serif;
            color:#898989
        }
    }
    @media screen and (min-width:500px){
        .modal{
            max-width:500px
        }
        .modalCard{
            max-width:500px
        }
    }
`