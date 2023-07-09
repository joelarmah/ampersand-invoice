import { Link } from "react-router-dom";
import { formatDate } from "../utils/dateUtil";
import { getSubTotal } from "../utils/utils";
import { CURRENCY } from "../constants/appConstants";

const InvoiceList = ({ invoices }) => {
  return (
    <div className='relative overflow-x-auto'>
      <table className='w-full text-sm text-left text-gray-500 dark:text-gray-400'>
        <thead className='text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400'>
          <tr>
            <th scope='col' className='px-6 py-3'>Date</th>
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
            <th scope='col' className='px-6 py-3'></th>
          </tr>
        </thead>
        <tbody>
          {invoices.map((invoice) => (
            <tr
              key={invoice.id}
              className='bg-white border-b dark:bg-gray-800 dark:border-gray-700'>
              <td className='px-6 py-4'>{formatDate(invoice.invoiceDate, "D MMM yyyy")}</td>
              <td className='px-6 py-4'>INV-{invoice.invoiceNumber}</td>
              <td className='px-6 py-4'>{invoice.customer.name}</td>
              <td className='px-6 py-4'>{CURRENCY}{getSubTotal(invoice.items)}</td>
              <td className='px-6 py-4'>{invoice.status}</td>
              <td>
                {" "}
                <Link className='text-xs bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full' to={`/invoice/${invoice.id}`}>View</Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default InvoiceList;
