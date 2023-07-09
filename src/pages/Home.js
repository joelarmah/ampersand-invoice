import { Link } from "react-router-dom";
import logo from "./../assets/images/logo.png";
import { APP_NAME } from "./../constants/appConstants.js";
import { useEffect, useState } from "react";
import { fetchInvoices } from "../firebase";
import InvoiceList from "./InvoiceList";
import CreateInvoice from "../components/CreateInvoice";
import { Button } from "flowbite-react";

const Home = () => {
  
  const [openModal, setOpenModal] = useState(false);
  const [invoices, setInvoices] = useState([]);
  // const navigation = [{ name: "Create Invoice", href: "/invoice/create" }];

  useEffect(() => {
    fetchInvoices().then((res) => {
      console.log('fetchInvoice ==>', res)

      setInvoices(res);
    });
  }, []);

  return (
    <>
      <div className='bg-white'>
        <header className='absolute inset-x-0 top-0 z-50'>
          <nav className='flex items-center justify-between p-6 lg:px-8' aria-label='Global'>
            <div className='flex lg:flex-1'>
              <Link to='/' className='-m-1.5 p-1.5'>
                <span className='sr-only'>{APP_NAME}</span>
                <img className='h-8 w-auto' src={logo} alt='Customer Keeper' />
              </Link>
            </div>
            <div className='flex lg:hidden'>
              <button
                type='button'
                className='-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700'
              >
                <span className='sr-only'>Open main menu</span>
              </button>
            </div>
        
            <div className='hidden lg:flex lg:flex-1 lg:justify-end'>
              <Button
                onClick={() => setOpenModal(true)}
                to='/invoice/1'
                className='text-sm font-semibold leading-6 text-white'
              >
                Create Invoice
              </Button>
            </div>
          </nav>
        </header>

        <div className='relative isolate px-6 pt-14 lg:px-8'>
          <div
            className='absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80'
            aria-hidden='true'
          >
            <div
              className='relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]'
              style={{
                clipPath:
                  "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
              }}
            />
          </div>
          <div className='mx-auto max-w-2xl py-32 sm:py-48 lg:py-56'>
            <div className='hidden sm:mb-8 sm:flex sm:justify-center'></div>
            <div className='text-center'>
              <h1 className='text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl'>
                Supercharge your business
              </h1>
              <p className='mt-6 text-lg leading-8 text-gray-600'>
                Never miss out on your customers needs
              </p>
              <div className='mt-10 flex items-center justify-center gap-x-6'>
                <div className='relative rounded-full px-3 py-1 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20'>
                  Coming Soon
                </div>
              </div>

              <div className='mt-10 flex items-center justify-center gap-x-6'>
                {invoices.length > 0 && <InvoiceList invoices={invoices} />}
              </div>

              <CreateInvoice showModal={openModal} setOpenModal={setOpenModal} />
            </div>
          </div>
          <div
            className='absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]'
            aria-hidden='true'
          >
            <div
              className='relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]'
              style={{
                clipPath:
                  "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
              }}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
