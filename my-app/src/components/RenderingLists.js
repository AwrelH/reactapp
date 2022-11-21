import React from 'react'
import Book from './Book'

function RenderingLists() {
   

    const books = [
        {
            title: 'to kill a mockingbird',
            author: 'harper lee',
            pages: 281
        },
        {
            title: 'the great gatsby',
            author: 'f. scott fitzgerald',
            pages: 218
        },
        {
            title: 'the catcher in the rye',
            author: 'salinger',
            pages: 234
        },

    ]
  return (
    <div>
        {books.map( book => {
            return <Book bok={book}/>
        })}
    </div>
  )
}

export default RenderingLists