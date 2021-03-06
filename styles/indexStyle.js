import styled from 'styled-components';

export const Container = styled.div`    
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;    
    padding:30px;
    min-height: 100vh;
    justify-content:center;
    align-items:flex-start;
    section{
        min-height: 100vh;
        gap:0px;
        flex-wrap:wrap;
        display:flex;
        align-items:flex-start;
        justify-content:flex-start;
        width:100%;
    }
`;