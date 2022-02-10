//@ts-nocheck
import { useEffect } from 'react'
import { Fragment, useState } from 'react'
import { Listbox, Transition } from '@headlessui/react'
import { CheckIcon, SelectorIcon } from '@heroicons/react/solid'
import { IoMdArrowDropdown } from 'react-icons/io'

export default function ListBox({ optionName, data, idx, callback }) {
  // selected state
  const [selected, setSelected] = useState(optionName)
  // set of choice that come from data
  const [choices, setChoices] = useState([])
  // set choice if data changes
  useEffect(() => {
    setChoices(data)
  }, [data])
  // call the callback method if selected changes
  useEffect(() => {
    callback(selected)
  }, [selected])
  // whenever optionName change it's going to change selected item
  useEffect(() => {
    setSelected(optionName)
  }, [optionName])
  return (
    <div className={`inline-block ${idx} relative w-full text-left`}>
      <Listbox value={selected} onChange={setSelected}>
        <div className="relative mt-1">
          <Listbox.Button className="relative w-full cursor-default rounded-lg bg-edvora-gray py-2 pl-3 pr-10 text-left text-gray-200 shadow-md focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-edvora-light-gray sm:text-sm">
            <span className="block truncate">{selected}</span>
            <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
              <IoMdArrowDropdown
                className="h-7 w-6 text-edvora-light-gray"
                aria-hidden="true"
              />
            </span>
          </Listbox.Button>
          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Listbox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-edvora-gray py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
              {choices.map((item, itemIdx) => (
                <Listbox.Option
                  key={itemIdx}
                  className={({ active }) =>
                    `${
                      active
                        ? 'bg-edvora-light-gray text-edvora-dark-gray'
                        : 'text-gray-200    '
                    }
                          relative cursor-default select-none py-2 pl-10 pr-4`
                  }
                  value={item}
                >
                  {({ selected, active }) => (
                    <>
                      <span
                        className={`${
                          selected ? 'font-medium' : 'font-normal'
                        } block truncate`}
                      >
                        {item}
                      </span>
                      {selected ? (
                        <span
                          className={`${
                            active
                              ? 'text-edvora-dark-gray'
                              : 'text-edvora-light-gray'
                          }
                                absolute inset-y-0 left-0 flex items-center pl-3`}
                        >
                          <CheckIcon className="h-5 w-5" aria-hidden="true" />
                        </span>
                      ) : null}
                    </>
                  )}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </Transition>
        </div>
      </Listbox>
    </div>
  )
}
