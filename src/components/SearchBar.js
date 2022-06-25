import React, { useState ,useEffect} from 'react';
import styled from 'styled-components';
import {StyledButton}from './sharedStyles';


const StyledInput = styled.input`

width: 70%;
height: 2em;
font-size:1.8rem;
border:0.1em solid #555;
background-color: #dde;
border-radius: 0.35em;

padding-left:0.7em;

:focus{

background-color: #dcd;

}
`


export const SearchBar = ({onSearch})=>{
    const [searchText,setSearchText] = useState("")
    
    // useEffect(() => {
    //     if(searchText === ""){
    //         onSearch("")
    //     }
    
    // }, [searchText])
    
    const handleEnter = (e) => {
        if(searchText === ""){
            return
        }
        if(e.key === "Enter"){


             onSearch(searchText)
        }
    }
  
   const handleSearch = (e) => {
       if(searchText !== ""){
            console.log("searching for : " + searchText)
            onSearch(searchText)
        }
    }
    return (
        <>

        <StyledInput type="text" id="search" onChange={(e)=>setSearchText(e.target.value)} onKeyDown={e=>handleEnter(e)}>

        </StyledInput>
        <StyledButton onClick={handleSearch}>Search</StyledButton>
        </>
    )

  
}