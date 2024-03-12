import React, { useState } from "react";
import { jsPDF } from "jspdf";
import "jspdf-autotable";

function InvoiceGenerator() {
    const [formData, setFormData] = useState({
        customerName: "",
        amount: "",
        dueDate: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleGenerateInvoice = () => {
        const doc = new jsPDF();
        doc.autoTable({
            head: [["Customer Name", "Amount", "Due Date"]],
            body: [[formData.customerName, formData.amount, formData.dueDate]],
        });
        doc.save("invoice.pdf");
    };

    return (
        <div className="container mx-auto mt-10">
            <h1 className="text-3xl font-bold mb-5">Invoice Generator</h1>
            <div className="grid grid-cols-2 gap-4">
                <div>
                    <label htmlFor="customerName" className="block mb-1">
                        Customer Name
                    </label>
                    <input
                        type="text"
                        id="customerName"
                        name="customerName"
                        value={formData.customerName}
                        onChange={handleChange}
                        className="border border-gray-300 p-2 w-full"
                    />
                </div>
                <div>
                    <label htmlFor="amount" className="block mb-1">
                        Amount
                    </label>
                    <input
                        type="text"
                        id="amount"
                        name="amount"
                        value={formData.amount}
                        onChange={handleChange}
                        className="border border-gray-300 p-2 w-full"
                    />
                </div>
                <div>
                    <label htmlFor="dueDate" className="block mb-1">
                        Due Date
                    </label>
                    <input
                        type="text"
                        id="dueDate"
                        name="dueDate"
                        value={formData.dueDate}
                        onChange={handleChange}
                        className="border border-gray-300 p-2 w-full"
                    />
                </div>
            </div>
            <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mt-5 rounded"
                onClick={handleGenerateInvoice}
            >
                Generate Invoice
            </button>
        </div>
    );
}

export default InvoiceGenerator;
