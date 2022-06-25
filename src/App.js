import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import { BookList } from './components/BookList';
import { Header } from './components/Header';
import { SearchBar } from './components/SearchBar';

const baseUrl = 'https://www.googleapis.com/books/v1'
const theme = {
  bg:"#334",
  mainColor:"#ff4"
}

const mockData = [
  {
  title:"Crime and Punishment",
  author:"Fyodor"
  },
  {
    title:"No Longer Human",
    author:"Osamu Dazai"
    },
  {
      title:"Attack on Titan",
      author:"Isayama"
  },
  {
    title:"The Story of Az",
    author:"Noman"
  },
  {
    title:"Sed lyfe adil",
    author:"Az"
  }
]




function App() {
  const [state,setState] = useState({
    results:[],
    noBook:false
  })

  const [loading, setLoading] = useState(false)

 

  const SearchFromMockData = (text)=>{
    setState(prevState => {return{...prevState,results: mockData.filter(book => book.title.toLowerCase().includes(text.toLowerCase()))}})
 }

 const SearchFromApi = async (text)=>{
    setLoading(true)

    const request = axios.get(baseUrl + `/volumes?q=${text}&maxResults=40&printType=books&fields=items(id,volumeInfo(title,authors,description,publishedDate,imageLinks,previewLink))&orderBy=relevance`)
    request.then(res => {
      const booksData = res.data.items;
   
      const finalResult = [];
      
      if(typeof booksData !== typeof undefined) {
        setState((prevState) => {return{...prevState,noBook:false}})
     
        booksData.map(bookinfo => finalResult.push({key:bookinfo.id,...bookinfo.volumeInfo}) )
      }else{
        setState((prevState) => {return{...prevState,noBook:true}})

      }

      setState((prevState) => {return{...prevState,results:finalResult}})
      setLoading(false)

    }).catch(err => {
    console.log("Error -> " + err)
    setLoading(false)
  })
 }

  return (
    <div className="App">
      <Header theme={theme} ></Header>
      <SearchBar onSearch={SearchFromApi}></SearchBar>    

      {loading? <h2>Loading...</h2> :<BookList noBook={state.noBook} booksData={state.results}></BookList>}   
 
    </div>
  );
}

export default App;
