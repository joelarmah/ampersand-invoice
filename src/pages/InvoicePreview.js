import { useEffect, useState } from "react";
import logo from "../assets/images/logo.png";
import { fetchInvoiceById } from "../firebase";
import { useParams } from "react-router-dom";
import { APP_NAME, CURRENCY } from "./../constants/appConstants.js";
import EmptyState from "../components/EmptyState";
import Header from "../components/Header";
import { formatDate } from "../utils/dateUtil";
import { getSubTotal, getTotal, itemTotal } from "../utils/utils";

const InvoicePreview = () => {

  const { id } = useParams();
  const [invoice, setInvoice] = useState(null);

  useEffect(() => {
    fetchInvoice(id);
  });

  const fetchInvoice = async (invoiceId) => {
    await fetchInvoiceById(invoiceId).then((res) => {
      setInvoice(res);
    });
  };

  const makePayment = () => {
    console.log("Make Payment Called");
  };

  return (
    <>
      <Header />
      {!invoice && (
        <section className='h-full py-20'>
          <div className='max-w-2xl mx-auto py-0'>
            <article className='shadow-none md:shadow-md md:rounded-md mb-4 overflow-hidden print:hidden'>
              <div className='md:rounded-b-md bg-white'>
                <EmptyState
                  title='Invoice Not Found'
                  description='The requested invoice was not found. Invoice has either been deleted or the URL is invalid'
                  actionText=''
                />
              </div>
            </article>
          </div>
        </section>
      )}

      {invoice && (
        <section className='bg-gray-100 py-20'>
          <div className='max-w-2xl mx-auto py-0'>
            <article className='shadow-none md:shadow-md md:rounded-md mb-4 overflow-hidden print:hidden'>
              <div className='md:rounded-b-md bg-white'>
                <div className='p-6 border-b border-gray-200'>
                  <div className='space-y-6'>
                    <div className='invoice-actions flex gap-4 justify-center'>
                      <div className='make-payment '>
                        <button
                          onClick={makePayment}
                          className='rounded-full bg-sky-500 py-2 px-4 inline-flex items-center text-sm font-medium text-white hover:opacity-75'>
                          Make Payment
                        </button>
                      </div>
                      <div className='download'>
                        <button
                          onClick={() => window.print()}
                          className='inline-flex items-center py-2 px-4 text-sm font-medium text-blue-500 hover:opacity-75'>
                          <svg
                            className='mr-0.5 h-4 w-4 fill-current'
                            xmlns='http://www.w3.org/2000/svg'
                            viewBox='0 0 20 20'>
                            <path d='M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z' />
                          </svg>
                          Download PDF
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </article>

            <article className='shadow-none md:shadow-md md:rounded-md overflow-hidden'>
              <div className='md:rounded-b-md bg-white'>
                <div className='p-9 border-b border-gray-200'>
                  <div className='space-y-6'>
                    <div className='flex justify-between items-top'>
                      <div className='space-y-4'>
                        <div>
                          <img className='h-6 object-cover mb-1' src={logo} alt='Company Name' />
                          <p>{invoice.company.name}</p>
                        </div>
                        <div>
                          <p className='font-medium text-sm text-gray-400'>Customer</p>
                          <p>{invoice.customer.name}</p>
                          <p>{invoice.customer.email}</p>
                          <p>{invoice.customer.phone}</p>
                          <p>
                            {invoice.customer.address} {invoice.customer.city}
                          </p>
                        </div>
                      </div>

                      <div className='space-y-2'>
                        <div>
                          <h1 className='font-bold text-xl'>Invoice</h1>
                        </div>

                        <div>
                          <p className='font-medium text-sm text-gray-400'>Invoice Number</p>
                          <p>INV-{invoice.invoiceNumber} </p>
                        </div>
                        <div>
                          <p className='font-medium text-sm text-gray-400'>Invoice Date</p>
                          {/* <p>{invoice.invoiceDate}</p> */}
                          <p>{formatDate(invoice.invoiceDate, "d MMM yyyy")}</p>
                        </div>
                        <div>
                          <p className='font-medium text-sm text-gray-400'>Payment Due</p>
                          <p>{invoice.dueDate}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <table className='w-full divide-y divide-gray-200 text-sm'>
                  <thead>
                    <tr>
                      <th scope='col' className='px-9 py-4 text-left font-semibold text-gray-400'>
                        Item
                      </th>
                      <th scope='col' className='py-3 text-left font-semibold text-gray-400'>
                        Qty
                      </th>
                      <th scope='col' className='py-3 text-left font-semibold text-gray-400'>
                        Price
                      </th>
                      <th scope='col' className='py-3 text-left font-semibold text-gray-400'>
                        Total
                      </th>
                      <th scope='col' className='py-3 text-left font-semibold text-gray-400'></th>
                    </tr>
                  </thead>
                  <tbody className='divide-y divide-gray-200'>
                    {invoice.items.map((item) => (
                      <tr key={item.id}>
                        <td className='px-9 py-5 whitespace-nowrap space-x-1 flex items-center'>
                          <div>
                            <p>{item.name}</p>
                            <p className='text-sm text-gray-400'>{item.description}</p>
                          </div>
                        </td>
                        <td className='whitespace-nowrap text-gray-600 truncate'>{item.qty}</td>
                        <td className='whitespace-nowrap text-gray-600 truncate'>
                          {CURRENCY}
                          {item.price}
                        </td>
                        <td className='whitespace-nowrap text-gray-600 truncate'>
                          {CURRENCY}
                          {itemTotal(item)}
                        </td>
                      </tr>
                    ))}

                    <tr>
                      <td
                        className='px-9 py-5 whitespace-nowrap space-x-1 flex items-center'
                        colSpan='2'
                      ></td>
                      <td className='whitespace-nowrap text-gray-600 truncate'></td>
                      <td className='whitespace-nowrap text-gray-600 truncate'>Subtotal</td>
                      <td className='whitespace-nowrap text-gray-600 truncate'>
                        {CURRENCY}
                        {getSubTotal(invoice.items)}
                      </td>
                    </tr>
                    <tr>
                      <td
                        className='px-9 py-5 whitespace-nowrap space-x-1 flex items-center'
                        colSpan='2'
                      ></td>
                      <td className='whitespace-nowrap text-gray-600 truncate'></td>
                      <td className='whitespace-nowrap text-gray-600 truncate'>Tax</td>
                      <td className='whitespace-nowrap text-gray-600 truncate'>{CURRENCY}0</td>
                    </tr>
                    <tr>
                      <td
                        className='px-9 py-5 whitespace-nowrap space-x-1 flex items-center'
                        colSpan='2'
                      ></td>
                      <td className='whitespace-nowrap text-gray-600 truncate'></td>
                      <td className='whitespace-nowrap text-gray-600 truncate'>Total</td>
                      <td className='whitespace-nowrap text-gray-600 truncate'>
                        {CURRENCY}
                        {getTotal(invoice.items)}
                      </td>
                    </tr>
                  </tbody>
                </table>

                <div className='p-9 border-b border-gray-200'>
                  <div className='space-y-3'>
                    <div className='flex justify-between'>
                      <div>
                        <p className='font-bold text-black text-lg'>Amount Due</p>
                      </div>
                      <p className='font-bold text-black text-lg'>
                        {CURRENCY}
                        {getTotal(invoice.items)}
                      </p>
                    </div>
                  </div>
                </div>

                <div className='p-9 border-b border-gray-200'>
                  <p className='font-medium text-sm text-gray-400'>Note</p>
                  <p className='text-sm'>{invoice.note}</p>
                </div>
              </div>
            </article>

            <div className='flex justify-center items-center py-5'>
              <img className='h-6 object-fit' src={logo} alt='Customer Keeper' />
              <span className='ml-2 text-xs text-gray-400'>Powered by {APP_NAME}</span>
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default InvoicePreview;
