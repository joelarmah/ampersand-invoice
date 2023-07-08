import { v4 as uuidv4 } from "uuid";
import FieldInput from "./FieldInput";

const ItemList = ({ props, arrayHelpers }) => {
  return (
    <div className='mt-5'>
        <div >
          <table className="w-full">
            <thead>
              <tr>
                <th scope='col' className='py-4 text-left font-semibold text-gray-400'>
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
                <th scope='col' className='py-3 text-left font-semibold text-gray-400'>

                </th>
              </tr>
            </thead>
            <tbody className='divide-y divide-gray-200'>
            {props.values.items.map((item, index) => (

              <tr key={index}>
                <td colSpan='2' className='py-5 whitespace-nowrap space-x-1 flex items-center'>
                  <div>
                    <FieldInput name={`items[${index}].name`} />
                    {/* <p className='text-sm text-gray-400'> Nuclear-armed ICBM </p> */}
                  </div>
                </td>
                <td className='whitespace-nowrap text-gray-600 truncate'>
                  <FieldInput name={`items[${index}].qty`} />
                </td>
                <td className='whitespace-nowrap text-gray-600 truncate'>
                  <FieldInput name={`items[${index}].price`} />
                </td>
                <td className='whitespace-nowrap text-gray-600 truncate'>
                  {item.qty * item.price}
                </td>
                <td>
                <svg
                    className='fill-current text-text2 hover:text-red cursor-pointer'
                    onClick={() => arrayHelpers.remove(index)}
                    width='13'
                    height='16'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      d='M11.583 3.556v10.666c0 .982-.795 1.778-1.777 1.778H2.694a1.777 1.777 0 01-1.777-1.778V3.556h10.666zM8.473 0l.888.889h3.111v1.778H.028V.889h3.11L4.029 0h4.444z'
                      fillRule='nonzero'
                    />
                  </svg>
                </td>
              </tr>
              ))}

            </tbody>
          </table>
        </div>
      <button
        className='flex justify-center bg-gray items-center text-purple dark:text-gray3 text-xs font-bold gap-2 w-full py-4 bg-purple-light dark:bg-input-dark rounded-3xl mt-4'
        type='button'
        onClick={() =>
          arrayHelpers.push({
            name: "",
            qty: 1,
            price: null,
            total: "",
            id: uuidv4()
          })
        }>
        <svg
          className='fill-current text-purple dark:text-gray3 mb-1'
          width='11'
          height='11'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            d='M6.313 10.023v-3.71h3.71v-2.58h-3.71V.023h-2.58v3.71H.023v2.58h3.71v3.71z'
            fillRule='nonzero'
          />
        </svg>{" "}
        Add New Item
      </button>
    </div>
  );
};
export default ItemList;
