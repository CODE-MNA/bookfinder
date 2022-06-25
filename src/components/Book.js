import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const StyledBook = styled.div`
    border: 3px solid #444;
    border-radius: 0.4em;
    cursor: pointer;
    background-color: #eee;
    box-shadow: 0 0 0.5em #111;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    flex-wrap: wrap;
    flex-basis: 26%;
    transition: all 0.2s ease-in;
    @media (max-width: 268px) {
        flex-basis: 70%;
  }
   
    h3.Title{
        border-top-left-radius: 0.1em;
        border-top-right-radius: 0.1em;
        padding:0.6em;
        padding-bottom: 1em;
        text-underline-offset: calc(0.2em);
        text-decoration: underline;
        background-color:#484f54;
        margin-top: 0;
        margin-left: 0;
        color:#dcb;
      
        
    }
    span{
        line-height:1.1em;
        padding:0.5em;
        font-size:1rem;
        font-style: oblique;
    }

    img{
        align-self: center;
    transition: all 0.2s ease-in;
        width: calc(20%+0.1vw);
        margin: 0.5em;
        border: 0.3em ridge #582;
    }

    :hover{
        box-shadow: 0 0 1.3em #afa;
        border-color: #582;
        
        img{
            transition: all 0.3s ease;
            transform: scale(1.1);
        }
    }
`


export const Book = (props)=>{
    //Hooks ----------------------------------------------------
    const [imageUrl,setImageUrl] = useState(null)
    useEffect(() => {

        if(imageUrl==null){
          
                setImageUrl("placeholder.png")
       
        }
        else if(data.imageLinks){
            data.imageLinks.thumbnail?
            setImageUrl(data.imageLinks.thumbnail):
            setImageUrl(data.imageLinks.smallThumbnail)

        }
    }, [imageUrl]);

    const {data} = props;

    //----------------------------------------------------------------

    const openInNewTab = (e) => {
        window.open(data.previewLink,"_blank").focus();
    }

    return(
        <StyledBook key={data.key}  onClick={openInNewTab} >
        
            <h3 className="Title">{data.title}</h3>
            <img href={data.previewLink} src={imageUrl} alt="no work"></img><br></br>
            <span>{data.authors && data.authors[0] }</span>

        </StyledBook>
    )
}