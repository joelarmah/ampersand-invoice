import logo from "../assets/images/logo.png";

const InvoicePreview = () => {
  const makePayment = () => {
    console.log("Make Payment Called");
  };

  return (
    <>
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
                        className='rounded-full bg-sky-500 py-2 px-4 inline-flex items-center text-sm font-medium text-white hover:opacity-75'
                      >
                        Make Payment
                      </button>
                    </div>
                    <div className='download'>
                      <button
                        href='/'
                        onClick={() => window.print()}
                        className='inline-flex items-center py-2 px-4 text-sm font-medium text-blue-500 hover:opacity-75'
                      >
                        Download PDF
                        <svg
                          className='ml-0.5 h-4 w-4 fill-current'
                          xmlns='http://www.w3.org/2000/svg'
                          viewBox='0 0 20 20'
                          fill='currentColor'
                          aria-hidden='true'
                        >
                          <path d='M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z'></path>
                          <path d='M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z'></path>
                        </svg>
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
                        <p>Company Name</p>
                      </div>
                      <div>
                        <p className='font-medium text-sm text-gray-400'>Billed To</p>
                        <p>Mr. Drew</p>
                        <p>drew@xyz.com </p>
                        <p>0244245902</p>
                        <p>SSNIT Flats, Adenta</p>
                      </div>
                    </div>

                    <div className='space-y-2'>
                      <div>
                        <h1 className='font-bold text-xl'>Invoice</h1>
                      </div>

                      <div>
                        <p className='font-medium text-sm text-gray-400'>Invoice Number</p>
                        <p> INV-MJ0001 </p>
                      </div>
                      <div>
                        <p className='font-medium text-sm text-gray-400'>Invoice Date</p>
                        <p>June 30, 2023</p>
                      </div>
                      <div>
                        <p className='font-medium text-sm text-gray-400'>Payment Due</p>
                        <p>July 3, 2023</p>
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
                      {" "}
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
                  <tr>
                    <td className='px-9 py-5 whitespace-nowrap space-x-1 flex items-center'>
                      <div>
                        <p> Jericho III (YA-4) </p>
                        <p className='text-sm text-gray-400'> Nuclear-armed ICBM </p>
                      </div>
                    </td>
                    <td className='whitespace-nowrap text-gray-600 truncate'></td>
                    <td className='whitespace-nowrap text-gray-600 truncate'> ¢380,000.00 </td>
                    <td className='whitespace-nowrap text-gray-600 truncate'> 0% </td>
                  </tr>
                  <tr>
                    <td className='px-9 py-5 whitespace-nowrap space-x-1 flex items-center'>
                      <div>
                        <p> Pym Particles (Pack of 10,000) </p>
                        <p className='text-sm text-gray-400'> Redacted Description </p>
                      </div>
                    </td>
                    <td className='whitespace-nowrap text-gray-600 truncate'></td>
                    <td className='whitespace-nowrap text-gray-600 truncate'> ¢280,000.00 </td>
                    <td className='whitespace-nowrap text-gray-600 truncate'> 0% </td>
                  </tr>
                  <tr>
                    <td
                      className='px-9 py-5 whitespace-nowrap space-x-1 flex items-center'
                      colSpan='2'
                    ></td>
                    <td className='whitespace-nowrap text-gray-600 truncate'></td>
                    <td className='whitespace-nowrap text-gray-600 truncate'>Subtotal</td>
                    <td className='whitespace-nowrap text-gray-600 truncate'>¢660,000.00</td>
                  </tr>
                  <tr>
                    <td
                      className='px-9 py-5 whitespace-nowrap space-x-1 flex items-center'
                      colSpan='2'
                    ></td>
                    <td className='whitespace-nowrap text-gray-600 truncate'></td>
                    <td className='whitespace-nowrap text-gray-600 truncate'>Tax</td>
                    <td className='whitespace-nowrap text-gray-600 truncate'>¢0</td>
                  </tr>
                  <tr>
                    <td
                      className='px-9 py-5 whitespace-nowrap space-x-1 flex items-center'
                      colSpan='2'
                    ></td>
                    <td className='whitespace-nowrap text-gray-600 truncate'></td>
                    <td className='whitespace-nowrap text-gray-600 truncate'>Total</td>
                    <td className='whitespace-nowrap text-gray-600 truncate'>¢0</td>
                  </tr>
                </tbody>
              </table>

              <div className='p-9 border-b border-gray-200'>
                <div className='space-y-3'>
                  <div className='flex justify-between'>
                    <div>
                      <p className='font-bold text-black text-lg'> Amount Due </p>
                    </div>
                    <p className='font-bold text-black text-lg'> ¢360.00 </p>
                  </div>
                </div>
              </div>

              <div className='p-9 border-b border-gray-200'>
                <p className='font-medium text-sm text-gray-400'> Note </p>
                <p className='text-sm'> Thank you for your order. </p>
              </div>
            </div>
          </article>

          <div className='flex justify-center items-center py-5'>
            <img className='h-6 object-fit' src={logo} alt='Customer Keeper' />
            <span className='ml-2 text-xs text-gray-400'>Powered by Customer Keeper</span>
          </div>
        </div>
      </section>
    </>
  );
};

export default InvoicePreview;
