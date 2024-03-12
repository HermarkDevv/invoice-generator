import React from 'react'

const Header = ({ handlePrint }) => {
    return (
        <header className='invoicePreview__header'>
            <h1>Invoicer</h1>
            <nav>
                <button className='btn btn-print' onClick={handlePrint}>Print</button>
                <button className='btn btn-download'>Download</button>
                <button className='btn btn-send'>Send</button>
            </nav>
        </header>
    )
}

export default Header