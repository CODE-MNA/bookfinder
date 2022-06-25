import React, { useState, useEffect, useRef } from 'react';
import { useInView } from 'react-intersection-observer';
import styled from 'styled-components';
import {Book} from './Book'

import {StyledButton, GapContainer} from './sharedStyles';

const End = styled.div`
    position: absolute;
    width: 100%;
    height: 1em;
    background-color:#ddf;
`

const StyledList = styled.div`
    display:flex;
    gap: 2em;
    row-gap:4em;
    flex-wrap:wrap;
    justify-content:space-evenly;
    margin-top:1em;
    padding-bottom:9em;
    
    
`



export const BookList = (props) => {

    const {booksData, noBook} = props;
//Hooks ----------------------------------------------------
const [startIndex, setStartIndex] = useState(0)
const [countOnPage,setCountOnPage] = useState(6)
const [chosenBooks,setChosenBooks] = useState([])
const [bottomPage,setBottomPage] = useState("")


const nextPageRef = useRef();
const prevPageRef = useRef();
const {ref,inView}=  useInView()

useEffect(() => {
   
    //Selecting some books from API data
    setChosenBooks(booksData.slice(startIndex,startIndex+countOnPage))

    //Rendering Buttons based on which pages are loaded
        if(startIndex>=countOnPage){
            prevPageRef.current.style.opacity = 1
        }else if(typeof prevPageRef.current != typeof undefined){

            prevPageRef.current.style.opacity = 0
         }
        
        if(startIndex<= booksData.length - countOnPage){
            nextPageRef.current.style.opacity = 1
    
        }else  if(typeof nextPageRef.current != typeof undefined){

            nextPageRef.current.style.opacity = 0
        }
    
    // Observing then showing bottom container 
        if(inView){
            setBottomPage("show")
            console.log("showing")
        }else{
            setBottomPage("")
        }
   
}, [startIndex,booksData,countOnPage,inView]);

// ----------------------------------------------------

if(booksData.length === 0 && noBook === false) {
        return <h2>Go on and search for a book, then Click on a book to open a preview in google books</h2>
}else if (noBook === true){
        return <h2>No Book found</h2>
}
    
const nextPage = ()=>{
    if(startIndex >=0 && (startIndex+countOnPage) < booksData.length){

        setStartIndex((prevState)=> {return prevState + countOnPage})
    }else{
        nextPageRef.current.style.opacity = 0;


    }
    
}
const prevPage = ()=>{
    
    
    if((startIndex -countOnPage) >= 0 && startIndex < booksData.length){
        setStartIndex((prevState)=> {return prevState - countOnPage})

    }else{
        prevPageRef.current.style.opacity = 0;

    }
}



    return (
        <>
        
    
        <StyledList>{chosenBooks? chosenBooks.map(bookdata => <Book data={bookdata} key={bookdata.key} ></Book>) : <h2>no book available</h2>}</StyledList>
        <End  ref={ref}>  </End>

        <GapContainer className={bottomPage}>
        <StyledButton  onClick={prevPage} ref={prevPageRef}>&lt;  Prev Page</StyledButton><StyledButton onClick={nextPage}  ref={nextPageRef}>Next Page  &gt;</StyledButton>

        </GapContainer>
        
        </>
    )
}
