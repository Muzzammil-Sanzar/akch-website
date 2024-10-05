'use client'
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react';
import { AnimatePresence, easeIn, easeInOut, easeOut, motion } from 'framer-motion'
import { Fragment } from 'react';
import { IoChevronDown } from 'react-icons/io5';

export default function FaqItem({ title, description, isOpen }) {
  return (
    <Disclosure as="div" className="border bg-white rounded-3xl px-2 sm:px-6 py-3 sm:py-8" defaultOpen={isOpen}>
      {({ open }) => (
        <>
          <DisclosureButton className="w-full text-left text-sm sm:text-lg font-medium  text-gray-150  flex items-center justify-between">
            <span>
              {title}
            </span>
            <IoChevronDown />
          </DisclosureButton>
          <div className="overflow-hidden">
            <AnimatePresence>
              {open && (
                <motion.div
                  key="panel"
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.2, ease: easeInOut }}
                  className="overflow-hidden py-2"
                >
                  <DisclosurePanel transition as={Fragment}>
                    <motion.div
                      initial={{ opacity: 0, y: -24 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -24 }}
                      transition={{ duration: 0.4, ease: easeOut }}
                      className="origin-top"
                    >
                      <p className='sm:py-5 text-xs text-gray-250'>
                        {description}
                      </p>
                    </motion.div>
                  </DisclosurePanel>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </>
      )}
    </Disclosure>
  )
}
