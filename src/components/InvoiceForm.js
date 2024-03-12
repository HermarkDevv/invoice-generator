import { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashCan, faEdit } from '@fortawesome/free-solid-svg-icons';
import { v4 as uuidv4 } from "uuid"

const InvoiceForm = ({
    clientName,
    setClientName,
    clientAddress,
    setClientAddress,
    clientEmail,
    setClientEmail,
    invoiceDate,
    setInvoiceDate,
    dueDate,
    setDueDate,
    bankName,
    setBankName,
    accountNumber,
    setAccountNumber,
    note,
    setNote,
    invoiceNumber,
    setInvoiceNumber,
    description,
    setDescription,
    quantity,
    setQuantity,
    price,
    setPrice,
    amount,
    setAmount,
    list,
    setList,
    total,
    setTotal,
    serial,
    setSerial
}) => {
    const [isEditing, setIsEditiing] = useState(false)

    useEffect(() => {
        const calcAmount = () => {
            setAmount(quantity * price)
        }

        calcAmount()
    }, [price, quantity, setAmount])

    let rows = document.querySelectorAll(".amount")

    const calculateTotal = () => {
        let sum = 0;
        rows.forEach(row => {
            if (row.className === "amount") {
                const value = parseInt(row.innerHTML);
                sum += isNaN(value) ? 0 : value;
            }
        });
        setTotal(sum);
    };

    // Call calculateTotal when necessary (e.g., in a useEffect)
    useEffect(() => {
        calculateTotal();
    });

    const handleAddItem = (e) => {
        e.preventDefault()

        if (!description || !quantity || !price || !serial) {
            alert("Fill in all inputs man!")
        } else {
            const newItems = {
                id: uuidv4(),
                serial,
                description,
                quantity,
                price,
                amount
            }
            setSerial("")
            setDescription("")
            setQuantity("")
            setPrice("")
            setAmount("")
            setList([...list, newItems])
            setIsEditiing(false)
        }
    }

    const editRow = (id) => {
        const editingRow = list.find((row) => row.id === id)

        setList(list.filter((row) => row.id !== id))

        setIsEditiing(true)
        setSerial(editingRow.serial)
        setDescription(editingRow.description)
        setQuantity(editingRow.quantity)
        setPrice(editingRow.price)
        setAmount(editingRow.amount)
    }

    const deleteRow = (id) => setList(list.filter((row) => row.id !== id))

    return (
        <main className='invoiceFormBody'>
            <h1>InvoiceForm</h1>
            <form>
                <p className='invoice__p'>
                    <label className='invoice__label' htmlFor='clientName'>Client Name</label>
                    <input
                        className='invoice__input'
                        id='clientName'
                        name='clientName'
                        type='text'
                        value={clientName}
                        onChange={(e) => setClientName(e.target.value)}
                        placeholder='Client Name'
                        required />
                </p>
                <p className='invoice__p'>
                    <label className='invoice__label' htmlFor='invoiceNumber'>Invoice Number</label>
                    <input
                        className='invoice__input'
                        id='invoiceNumber'
                        name='invoiceNumber'
                        value={invoiceNumber}
                        onChange={(e) => setInvoiceNumber(e.target.value)}
                        type='text'
                        placeholder='03202401'
                        required />
                </p>
                <p className='invoice__p'>
                    <label className='invoice__label' htmlFor='invoiceDate'>Invoice Date</label>
                    <input
                        className='invoice__input'
                        id='invoiceDate'
                        name='invoiceDate'
                        value={invoiceDate}
                        onChange={(e) => setInvoiceDate(e.target.value)}
                        type='date'
                        placeholder='dd/mm/yyyy'
                        required />
                </p>
                <p className='invoice__p'>
                    <label className='invoice__label' htmlFor='dueDate'>Due Date</label>
                    <input
                        className='invoice__input'
                        id='dueDate'
                        name='dueDate'
                        value={dueDate}
                        onChange={(e) => setDueDate(e.target.value)}
                        type='date'
                        placeholder='dd/mm/yyyy'
                        required />
                </p>
                <p className='invoice__p'>
                    <label className='invoice__label' htmlFor='clientAddress'>Address</label>
                    <input
                        className='invoice__input'
                        id='clientAddress'
                        name='clientAddress'
                        value={clientAddress}
                        onChange={(e) => setClientAddress(e.target.value)}
                        type='address'
                        placeholder='Client Address'
                        required />
                </p>
                {/* <p className='invoice__p'>
                    <label className='invoice__label' htmlFor='clientEmail'>Email</label>
                    <input
                        className='invoice__input'
                        id='clientEmail'
                        name='clientEmail'
                        value={clientEmail}
                        onChange={(e) => setClientEmail(e.target.value)}
                        type='email'
                        placeholder='clientmail@email.com' />
                </p>
                <p className='invoice__p'>
                    <label className='invoice__label' htmlFor='bankName'>Bank Name</label>
                    <input
                        className='invoice__input'
                        id='bankName'
                        name='bankName'
                        value={bankName}
                        onChange={(e) => setBankName(e.target.value)}
                        type='text'
                        placeholder='Access Bank' />
                </p>
                <p className='invoice__p'>
                    <label className='invoice__label' htmlFor='accountNumber'>Bank Account</label>
                    <input
                        className='invoice__input'
                        id='accountNumber'
                        name='accountNumber'
                        value={accountNumber}
                        onChange={(e) => setAccountNumber(e.target.value)}
                        type='text'
                        placeholder='0234567891' />
                </p> */}
                <p className='invoice__p'>
                    <label className='invoice__label' htmlFor='note'>Additional Note</label>
                    <textarea
                        className='invoice__input'
                        id='note'
                        name='note'
                        value={note}
                        onChange={(e) => setNote(e.target.value)}
                        type='textarea'
                        placeholder='Create a nnote for your client' />
                </p>
                <p className='inputTab'>
                    <input
                        className='formItem__input serial'
                        id='itemSerial'
                        name='itemSerial'
                        value={serial}
                        onChange={(e) => setSerial(e.target.value)}
                        type='text'
                        placeholder='S/N' />
                    <input
                        className='formItem__input Description'
                        id='itemDescription'
                        name='itemDescription'
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        type='text'
                        placeholder='Description' />
                    <input
                        className='formItem__input quantity'
                        id='quantity'
                        name='quantity'
                        value={quantity}
                        onChange={(e) => setQuantity(e.target.value)}
                        type='number'
                        placeholder='qty' />
                    <input
                        className='formItem__input price'
                        id='price'
                        name='price'
                        value={price}
                        onChange={(e) => setPrice(e.target.value)}
                        type='text' placeholder='Price' />
                    <p>{amount}</p>
                </p>
                <button onClick={handleAddItem} className='btn addItem'>
                    {isEditing ? "Edit Item" : "Add Item"}
                </button>
            </form>

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
                            <td>{serial}</td>
                            <td>{description}</td>
                            <td>{quantity}</td>
                            <td>{price}</td>
                            <td className='amount'>{amount}</td>
                            <button onClick={() => deleteRow(id)} className='faTrashCan'>
                                <FontAwesomeIcon className='faTrashCan' icon={faTrashCan} />
                            </button>
                            <button onClick={() => editRow(id)} className='faEdit'>
                                <FontAwesomeIcon className='faEdit' icon={faEdit} />
                            </button>
                        </tr>
                    ))}
                </tbody>
            </table>
            <p className='total'>NGN {total.toLocaleString()}</p>
        </main>
    )
}

export default InvoiceForm