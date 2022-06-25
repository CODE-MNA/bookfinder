import styled from 'styled-components'
export const StyledButton = styled.button`
height:2em;
font-size:1.6rem;
background-color: #eef;
border-radius: 0.2em;
margin: 1em;
transition: all 0.1s ease;

:hover{
    transition: all 0.2s ease;
    transform: scale(1.2);
}

:active{
    background-color:#dbe;
}
`
export const GapContainer = styled.div`
box-shadow: 0px 0px 4px #000;
background-color: #ccc;
opacity: 0;
border-top: solid 1px black;
position: fixed;
bottom: 0;
display:flex;
width:100%;
justify-content:space-evenly;
align-self: center;
transform: translateY(4em);
transition: all 0.3s;
border-radius: 0.3em;
:hover{
    opacity: 01;
    transform: translateY(0em)

}


`