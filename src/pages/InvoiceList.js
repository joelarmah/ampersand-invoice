import { Link } from "react-router-dom";

const InvoiceList = ({ invoices }) => {
  return (
    <div className='relative overflow-x-auto'>
      <table className='w-full text-sm text-left text-gray-500 dark:text-gray-400'>
        <thead className='text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400'>
          <tr>
            <th scope='col' className='px-6 py-3'>
              Invoice #
            </th>
            <th scope='col' className='px-6 py-3'>
              Name
            </th>
            <th scope='col' className='px-6 py-3'>
              Total
            </th>
            <th scope='col' className='px-6 py-3'>
              Status
            </th>
          </tr>
        </thead>
        <tbody>
          {invoices.map((invoice) => (
            <tr
              key={invoice.id}
              className='bg-white border-b dark:bg-gray-800 dark:border-gray-700'>
                <td className='px-6 py-4'>
                <Link to={`/invoice/${invoice.id}`}>{invoice.invoiceNumber}</Link>
                </td>
                <td className='px-6 py-4'>{invoice.customer.name}</td>
                <td className='px-6 py-4'>{invoice.total}</td>
                <td className='px-6 py-4'>{invoice.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default InvoiceList;
