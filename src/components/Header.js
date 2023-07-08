// import { Button } from "flowbite-react";
import { APP_NAME } from "../constants/appConstants";
import { Link } from "react-router-dom";
import logo from "./../assets/images/logo.png";

const Header = () => {
    return(
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
              className='-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700'>
              <span className='sr-only'>Open main menu</span>
            </button>
          </div>
          {/* <div className='hidden lg:flex lg:gap-x-12'>
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className='text-sm font-semibold leading-6 text-gray-900'
              >
                {item.name}
              </a>
            ))}
          </div> */}
          {/* <div className='hidden lg:flex lg:flex-1 lg:justify-end'>
            <Button
              onClick={() => setOpenModal(true)}
              to='/invoice/1'
              className='text-sm font-semibold leading-6 text-white'
            >
              Create Invoice
            </Button>
          </div> */}
          {/* <div className='hidden lg:flex lg:flex-1 lg:justify-end'>
            <Link to='/invoice/1' className='text-sm font-semibold leading-6 text-gray-900'>
              Preview Invoice <span aria-hidden='true'>&rarr;</span>
            </Link>
          </div> */}
        </nav>
      </header>
    );
}

export default Header;