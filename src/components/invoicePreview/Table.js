import React from 'react'

const Table = ({
    list, total
}) => {
    return (
        <>
            <div className='table__ContainerBody'>
                <table className='table__container'>
                    <thead className='table__head'>
                        <tr>
                            <th>S/N</th>
                            <th>Description</th>
                            <th>Quantity</th>
                            <th>Price</th>
                            <th>Amount</th>
                        </tr>
                    </thead>
                    <tbody className='table__body'>
                        {list.map(({ id, serial, description, quantity, price, amount }) => (
                            <tr className='displayListItemBody' key={id}>
                                <td className='serial'>{serial}</td>
                                <td className='description'>{description}</td>
                                <td className='quantity'>{quantity}</td>
                                <td className='price'>{price}</td>
                                <td className='amount'>{amount}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <p className='total'>NGN {total.toLocaleString()}</p>
            </div>
        </>
    )
}

export default Table

// < table className = 'table' >
//             <thead>
//                 <th>
//                     <td>S/N</td>
//                     <td>Description</td>
//                     <td>Quantity</td>
//                     <td>Price</td>
//                     <td>Amount</td>
//                 </th>
//             </thead>

//             <tbody>
//                 <tr>
//                     <td>1</td>
//                     <td>{description}</td>
//                     <td>{quantity}</td>
//                     <td>{price}</td>
//                     <td>{amount}</td>
//                 </tr>
//             </tbody>
//         </table >