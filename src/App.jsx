import React, { useEffect, useState } from 'react'
import axios from 'axios';
import './App.css'

function App() {
  const [books,setBooks]=useState([])

  console.log(books)

  useEffect(()=>{
    axios.get("https://reactnd-books-api.udacity.com/books",{ headers: { 'Authorization': 'whatever-you-want' }})
    .then((res)=>setBooks(res.data.books))
    .catch((err)=>console.error("Error Found",err))
  },[])

  return (
    <div>
      <h1>Pro Books</h1>
      <div className="container">
      {
        books.length==0 && (
          <div className='loader'>

          </div>
        )
      }
      {
        books.map((book,index)=>{
          return (
            <div className='book' key={index}>
              <h2>{book.title}</h2>
              <div>
                <img src={book.imageLinks.smallThumbnail} alt="Thumbnail" />
                <p>{book.description}</p>
              </div>
            </div>
          )
        })
      }
      </div>
    </div>
  )
}

export default App
