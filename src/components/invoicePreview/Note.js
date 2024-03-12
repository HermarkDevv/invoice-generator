import React from 'react'

const Note = ({ note }) => {
    return (
        <section className='note'>
            <p>{note}</p>
        </section>
    )
}

export default Note