import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const StyledBook = styled.div`
    border: 2px solid #444;
    border-radius: 0.3em;

    background-color: #eee;
    box-shadow: 0 0 0.5em #111;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    flex-basis: 30%;
    transition: all 0.2s ease-in;
    
    @media (max-width: 268px) {
        flex-basis: 70%;
  }
    :hover{
        box-shadow: 0 0 1em #586;

        
        img{
            transition: all 0.3s ease;
            transform: scale(1.1);
        }
    }
    h3{
        padding: 0.5em;
        text-underline-offset: calc(0.2em);
        text-decoration: underline;
    }
    span{
        line-height:1.1em;
        padding:0.5em;
        font-size:1rem;
    }

    img{
    transition: all 0.2s ease-in;
    width: 60%;
        margin: 0.5em;
        border: 0.3em ridge #582;
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
        console.log("book clicked : " + data.previewLink)
        window.open(data.previewLink,"_blank").focus();
    }

    return(
        <StyledBook key={data.key}  onClick={openInNewTab} >
        
            <h3 className="Title">{data.title}</h3>
            <img href={data.previewLink} src={imageUrl} alt="no work"></img>
            <span>{data.authors && data.authors[0] }</span>

        </StyledBook>
    )
}