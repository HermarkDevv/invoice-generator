import { useState, useRef } from 'react'
import InvoiceForm from "../src/components/InvoiceForm";
import Header from "../src/components/invoicePreview/Header"
import SenderDetails from '../src/components/invoicePreview/SenderDetails'
import ClientDetails from '../src/components/invoicePreview/ClientDetails'
import InvoiceDetails from '../src/components/invoicePreview/InvoiceDetails'
import Table from '../src/components/invoicePreview/Table'
import Note from '../src/components/invoicePreview/Note'
import Footer from '../src/components/invoicePreview/Footer'
import ReactToPrint from 'react-to-print';

function App() {

  const [showInvoice, setShowInvoice] = useState(false)

  const [clientName, setClientName] = useState("")
  const [invoiceDate, setInvoiceDate] = useState("")
  const [dueDate, setDueDate] = useState("")
  const [clientAddress, setClientAddress] = useState("")
  const [clientEmail, setClientEmail] = useState("")
  const [bankName, setBankName] = useState("")
  const [accountNumber, setAccountNumber] = useState("")
  const [invoiceNumber, setInvoiceNumber] = useState("")
  const [note, setNote] = useState("")
  const [serial, setSerial] = useState("")
  const [description, setDescription] = useState("")
  const [quantity, setQuantity] = useState("")
  const [price, setPrice] = useState("")
  const [amount, setAmount] = useState("")
  const [total, setTotal] = useState("")
  const [list, setList] = useState([])

  const componentRef = useRef()

  // const handlePrint = () => {
  //   window.print()
  // }



  return (
    <div className="App">
      <div className='body'>
        {
          showInvoice
            ?
            <>
              <ReactToPrint
                trigger={() => <button className='btn btn-download'>Download</button>}
                content={() => componentRef.current} />
              {/* <Header handlePrint={handlePrint} /> */}

              <div className='components' ref={componentRef}>

                <SenderDetails />

                <ClientDetails
                  clientName={clientName}
                  clientAddress={clientAddress}
                />

                <InvoiceDetails
                  invoiceNumber={invoiceNumber}
                  invoiceDate={invoiceDate}
                  dueDate={dueDate}
                />

                <Table
                  description={description}
                  quantity={quantity}
                  price={price}
                  amount={amount}
                  list={list}
                  total={total}
                  serial={serial}
                />

                <Note note={note} />

                <Footer />

              </div>

              <button
                className='btn previewButton'
                onClick={() => setShowInvoice(false)}
              >Edit Invoice</button>
            </>
            :
            <>
              <InvoiceForm
                clientName={clientName}
                setClientName={setClientName}
                clientAddress={clientAddress}
                setClientAddress={setClientAddress}
                clientEmail={clientEmail}
                setClientEmail={setClientEmail}
                invoiceDate={invoiceDate}
                setInvoiceDate={setInvoiceDate}
                dueDate={dueDate}
                setDueDate={setDueDate}
                bankName={bankName}
                setBankName={setBankName}
                accountNumber={accountNumber}
                setAccountNumber={setAccountNumber}
                invoiceNumber={invoiceNumber}
                setInvoiceNumber={setInvoiceNumber}
                note={note}
                setNote={setNote}
                description={description}
                setDescription={setDescription}
                quantity={quantity}
                setQuantity={setQuantity}
                price={price}
                setPrice={setPrice}
                amount={amount}
                setAmount={setAmount}
                list={list}
                setList={setList}
                total={total}
                setTotal={setTotal}
                serial={serial}
                setSerial={setSerial}
              />
              <button
                className='btn previewButton'
                onClick={() => setShowInvoice(true)}
              >Preview Invoice</button>
            </>
        }
      </div>
    </div>
  );
}

export default App;
