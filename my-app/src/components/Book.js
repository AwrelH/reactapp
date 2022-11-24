import React from 'react'


function Book(props) {
    const book = props.bok
  return (
    (<div key={book.title}>
        <h5>{book.title}</h5>
        <p>{book.author}</p>
        <p>{book.pages}</p>
    </div>)
  )
}

export default Book