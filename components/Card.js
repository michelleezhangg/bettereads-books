import { cookies } from 'next/dist/client/components/headers'
import React from 'react'
import styles from '../styles/component.module.css'


function Card({book}) {
  console.log({book})
  return (
    <div className={styles.card}>
        <a className={styles.title} href={book.link}>{book.title}</a>
        <p>Author: {book.author}</p>
        <p>Country: {book.country}</p>
        <p>Language: {book.language}</p>
        <p>Pages: {book.pages}</p>
        <p>Year: {book.year}</p>
    </div>
  )
}

export default Card