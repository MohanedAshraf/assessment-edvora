import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'

function classNames(...classes: any) {
  return classes.filter(Boolean).join(' ')
}

export default function Example({ optionName, idx }: any) {
  return (
    <Menu as="div" className={`relative ${idx} inline-block w-full text-left`}>
      <div>
        <Menu.Button className="flex justify-between w-full px-4 py-2 text-sm font-medium text-gray-200 rounded-md shadow-sm bg-edvora-gray hover:bg-edvora-light-gray focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-100">
          {optionName}
          <svg
            className="w-5 h-5 ml-2 -mr-1 text-edvora-dark-gray "
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={5}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute right-0 w-full mt-2 origin-top-right rounded-md shadow-lg bg-edvora-gray ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="py-1">
            <Menu.Item>
              {({ active }: any) => (
                <a
                  href="#"
                  className={classNames(
                    active
                      ? 'bg-edvora-light-gray text-gray-900'
                      : 'text-gray-200',
                    'block px-4 py-2 text-sm'
                  )}
                >
                  item 1
                </a>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }: any) => (
                <a
                  href="#"
                  className={classNames(
                    active
                      ? 'bg-edvora-light-gray text-gray-900'
                      : 'text-gray-200',
                    'block px-4 py-2 text-sm'
                  )}
                >
                  item 2
                </a>
              )}
            </Menu.Item>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  )
}
