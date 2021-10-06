import styled from 'styled-components';

export const Container = styled.div`    
    display: flex;
    flex-direction: column;
    h1{
        text-align:center;
        color:#787878;
    }
    .search{
        background-color: #313131;
        padding:30px;
        color:#ffffff;
        label{
            font-size:20pt
        }
        .inputContainer{
            overflow:hidden;
            display:flex;
            border:1px solid #898989;
            border-radius:5px;
            box-shadow:0.1rem 0.1rem 0.1rem #2C2C2C;
            input{
                padding:10px;
                font-size:15pt;
                flex:1;
                max-width:88%;
                border:none;
                outline:none;
            }
            button{
                max-width:12%;
                background-color:#EE6B2F;
                border:none;
                outline:none;
                border-left:1px solid #2C2C2C;  
                transition: 0.2s;    
                
            }
            button:hover{
                cursor:pointer; 
                background-color:#787878;               
            }
        }
    }    
    @media (min-width: 600px) {
      h1{
          text-align:left;
          margin-left:30px;
      }
      .inputContainer{
          max-width:400px;
          input:{
            max-width:150px;
          }
      }
    }
`;