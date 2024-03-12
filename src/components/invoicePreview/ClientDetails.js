import React from 'react'

const ClientDetails = ({
    clientName, clientAddress
}) => {
    return (
        <section className='clientAddress'>
            <h2> {clientName}</h2>
            <p> {clientAddress}</p>

        </section>
    )
}

export default ClientDetails