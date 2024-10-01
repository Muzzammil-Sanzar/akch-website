import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { AnimatePresence, motion } from 'framer-motion';
import { IoChevronDownOutline } from "react-icons/io5";

export default function Products() {
  return (
    <Menu>
      {({ open }) => (
        <>
          <MenuButton className={"flex items-center gap-2.5"}>Products <IoChevronDownOutline /></MenuButton>
          <AnimatePresence>
            {open && (
              <MenuItems
                static
                as={motion.div}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                anchor="bottom"
                className="bg-white shadow-md space-y-2 p-2 mt-2 w-52 origin-top-right rounded-xl border border-black/5 bg-black/5 text-sm/6 text-gray-250 transition duration-100 ease-out [--anchor-gap:var(--spacing-1)] focus:outline-none data-[closed]:scale-95 data-[closed]:opacity-0"
              >
                <MenuItem>
                  <a className="block data-[focus]:bg-orange-150 data-[focus]:text-white data-[focus]:px-4 rounded" href="/">
                    Settings
                  </a>
                </MenuItem>
                <MenuItem>
                  <a className="block data-[focus]:bg-orange-150 data-[focus]:text-white data-[focus]:px-4 rounded" href="/">
                    Support
                  </a>
                </MenuItem>
                <MenuItem>
                  <a className="block data-[focus]:bg-orange-150 data-[focus]:text-white data-[focus]:px-4 rounded" href="/">
                    License
                  </a>
                </MenuItem>
              </MenuItems>
            )}
          </AnimatePresence>
        </>
      )}
    </Menu>

  )
}
