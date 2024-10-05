import { Dialog, Transition } from '@headlessui/react'
import { Fragment } from 'react'
import { IoMdClose } from "react-icons/io";

export default function SignUP({ isOpen, setIsOpen, setLogin }) {
  function closeModal() {
    setIsOpen(false)
  }

  const handleLogin = () => {
    setLogin(true);
    closeModal();
  }

  return (
    <div>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-50" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-[480px] transform overflow-hidden rounded-2xl bg-white p-7 py-9 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h1"
                    className="text-lg font-medium flex justify-between items-center leading-6 space-y-5 text-gray-900"
                  >
                    <h2 className='text-3xl font-semibold'>Sign Up</h2>
                    <div className='cursor-pointer' onClick={closeModal}>
                      <IoMdClose />
                    </div>
                  </Dialog.Title>
                  <div className="mt-5 space-y-5">
                    <p className='sm:text-lg text-gray-250'>Enter your detail below to create new account</p>
                    <div className="z-0">
                      <input
                        type="tel"
                        className=" py-3.5 px-4 w-full text-gray-150 bg-transparent border rounded-2xl border-gray-300 focus:outline-none focus:ring-0 focus:border-orange-150"
                        placeholder="Email" />
                    </div>
                    <div className="z-0">
                      <input
                        type="tel"
                        className=" py-3.5 px-4 w-full text-gray-150 bg-transparent border rounded-2xl border-gray-300 focus:outline-none focus:ring-0 focus:border-orange-150"
                        placeholder="phone/Mobile" />
                    </div>
                    <div className="z-0">
                      <input
                        type="tel"
                        className=" py-3.5 px-4 w-full text-gray-150 bg-transparent border rounded-2xl border-gray-300 focus:outline-none focus:ring-0 focus:border-orange-150"
                        placeholder="Password" />
                    </div>
                    <div className="flex items-center gap-2.5">
                      <input
                        type="checkbox"
                        className=" w-5 h-5 text-gray-150 bg-transparent border rounded-2xl border-gray-300 focus:outline-none focus:ring-0 focus:border-orange-150"
                      />
                      <p className='font-light'>Agreed to the user <span className='underline font-normal'>Terms & Conditions</span></p>
                    </div>
                  </div>

                  <div className="mt-8 space-y-10">
                    <button
                      type="button"
                      className="inline-flex justify-center rounded-full border border-transparent bg-orange-150 w-full px-4 py-2 text-lg font-semibold text-white hover:bg-orange-150/20 hover:text-gray-150 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                      onClick={closeModal}
                    >
                      Sign Up
                    </button>
                    <p className='text-sm sm:text-lg text-center'>Already have account?  <span onClick={handleLogin} className='cursor-pointer ml-2 font-semibold sm:font-bold underline'>Login</span></p>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </div>
  )
}
