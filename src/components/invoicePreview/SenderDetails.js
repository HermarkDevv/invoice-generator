import React from 'react'
import dayon_logo from '../../img/dayon_logo.png'

const SenderDetails = () => {

    return (
        <>
            <div className='dayon__header-details'>
                <section className='senderAddress'>
                    <img src={dayon_logo} alt="dayon logo" className='logo' width={417} height={598} />
                    <p>BN: 2752281</p>
                </section>

                <section className='dayon__detail2'>
                    <ul>
                        <li>REAL ESTATE</li>
                        <li>AUTOCAD BUILDING (2D & 3D)</li>
                        <li>CCTV INSTALLATION</li>
                        <li>INVERTER/SOLAR PANEL INSTALLATION</li>
                        <li>INVENTORY MANAGEMENT(STOCK TAKING)</li>
                    </ul>
                </section>
            </div>
        </>
    )
}

export default SenderDetails

