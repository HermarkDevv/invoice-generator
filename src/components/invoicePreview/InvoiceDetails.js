import React from 'react'

const InvoiceDetails = ({ invoiceDate, dueDate, invoiceNumber }) => {
    return (
        <article className='invoiceId'>
            <p><span>Invoice Number: </span>{invoiceNumber}</p>
            <p><span>Invoice Date: </span>{invoiceDate}</p>
            <p><span>Due Date: </span>{dueDate}</p>
        </article>
    )
}

export default InvoiceDetails