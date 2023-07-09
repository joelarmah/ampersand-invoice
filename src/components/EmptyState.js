const EmptyState = ({title = "", description = "", actionText = "", action = null }) => {

  return (
    <>
      <section className='py-4 bg-neutral-50 overflow-hidden'>
        <div className='container px-4 mx-auto'>
          <img className='mx-auto' src='dashy-assets/images/empty.png' alt='' />

          <svg
            className='w-10 h-10 mx-auto'
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            strokeWidth='1.5'
            stroke='currentColor'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              d='M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z'
            />
          </svg>

          <div className='max-w-md mx-auto text-center'>
            <h2 className='font-heading mb-3 text-2xl font-semibold'>
            {title}
            </h2>
            <p className='mb-7 text-neutral-500'>
             {description}
            </p>
            {(actionText !== "" && action !== null) && <button
            onClick={action}
              className='bg-indigo-600 inline-flex px-6 py-2.5 text-sm text-neutral-50 font-medium bg-gradient-purple-left hover:bg-gradient-purple-left-dark rounded-lg transition duration-300'
              >
              {actionText}
            </button>}
          </div>
        </div>
      </section>
    </>
  );
};


export default EmptyState;
