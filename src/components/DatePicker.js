import { useEffect, useState } from "react";
import moment from "moment";
import Datepicker from "tailwind-datepicker-react"

const DatePicker = ({ props, invoiceDate }) => {

  const [date, setDate] = useState(invoiceDate);
  const options = {
    // title: "Demo Title",
    // autoHide: true,
    // todayBtn: false,
    // clearBtn: true,
    // maxDate: new Date("2030-01-01"),
    // minDate: new Date("1950-01-01"),
    // theme: {
    //   background: "bg-gray-700 dark:bg-gray-800",
    //   todayBtn: "",
    //   clearBtn: "",
    //   icons: "",
    //   text: "",
    //   disabledText: "bg-red-500",
    //   input: "",
    //   inputIcon: "",
    //   selected: "",
    // },
    // icons: {
    //   // () => ReactElement | JSX.Element
    //   prev: () => <span>Previous</span>,
    //   next: () => <span>Next</span>,
    // },
    // datepickerClassNames: "top-12",
    defaultDate: date,
    // language: "en",
  }
  const [show, setShow] = useState(false)
	const handleChange = (selectedDate) => {
		console.log(selectedDate)
    setDate(selectedDate);
    props.setFieldValue("invoiceDate", moment(selectedDate).format("DD MMM yyyy"));
	}
	const handleClose = (state) => {
		setShow(state)
	}

  useEffect(() => {
    props.setFieldValue("invoiceDate", moment(date).format("DD MMM yyyy"));
  }, []);

  return (
    <div>
      <label className='label'>Invoice Date</label>
      <div className='relative w-full h-12'>
        <Datepicker options={options} onChange={handleChange} show={show} setShow={handleClose} />
      </div>
    </div>
  );
};
export default DatePicker;
