import { manufacturers } from '@/constants'
import { images } from '@/constants/images'
import { SearchManufacturerProps } from '@/types'
import { Combobox, Transition } from '@headlessui/react'
// import {
//   Combobox,
//   ComboboxButton,
//   ComboboxInput,
//   ComboboxOption,
//   ComboboxOptions,
// } from '@headlessui/react'

import Image from 'next/image'
import React, { useState, Fragment } from 'react'
import { MdCheck } from 'react-icons/md'

const SearchManufacturer = ({ setManufacturer, manufacturer }: SearchManufacturerProps) => {
  const [query, setQuery] = useState('')

  const filteredManufacturers =
    query == ''
      ? manufacturers
      : manufacturers.filter(item => item.toLowerCase().includes(query.toLowerCase()))

  return (
    <div className="search-manufacturer">
      <Combobox value={manufacturer} onChange={setManufacturer}>
        <div className="relative w-full">
          <Combobox.Button className="absolute top-[14px]">
            <Image src={images.carlogo} alt="car logo" width={20} height={20} className="ml-4" />
          </Combobox.Button>
          <Combobox.Input
            className="search-manufacturer__input"
            placeholder="Volkswagen"
            displayValue={(manufacturer: string) => manufacturer}
            onChange={e => setQuery(e.target.value)}
          />

          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
            afterLeave={() => setQuery('')}
          >
            <Combobox.Options>
              {filteredManufacturers.length === 0 && query !== '' ? (
                <div className="relative cursor-default select-none px-4 py-2 text-gray-700">
                  Nothing found.
                </div>
              ) : (
                filteredManufacturers.map(item => (
                  <Combobox.Option
                    key={item}
                    value={item}
                    className={({ active }) =>
                      `realtive search-manufacturer__option ${
                        active ? 'bg-blue-600 text-white' : 'text-gray-900'
                      }`
                    }
                  >
                    {({ selected, active }) => (
                      <>
                        {selected ? (
                          <span>
                            <MdCheck
                              className={`absolute top-[50px] w-8 h-8 left-0 flex items-center pl-3 ${
                                active ? 'text-white' : 'text-teal-600'
                              }`}
                              aria-hidden="true"
                            />
                          </span>
                        ) : null}

                        <span
                          className={`block truncate ${selected ? 'font-medium' : 'font-normal'}`}
                        >
                          {item}
                        </span>
                      </>
                    )}
                  </Combobox.Option>
                ))
              )}
            </Combobox.Options>
          </Transition>
        </div>
      </Combobox>

      {/* <Combobox>
        <div className="relative w-full">
          <ComboboxButton className="absolute top-[14px]">
            <Image src={images.carlogo} alt="car logo" width={20} height={20} className="ml-4" />
          </ComboboxButton>
          <ComboboxInput
            className="search-manufacturer__input"
            placeholder="Volkswagen"
            displayValue={(manufacturer: string) => manufacturer}
            onChange={e => setQuery(e.target.value)}
          />

          <ComboboxOptions anchor="bottom" transition>
            {filteredManufacturers.length === 0 && query !== '' ? (
              <div className="relative cursor-default select-none px-4 py-2 text-gray-700">
                Nothing found.
              </div>
            ) : (
              filteredManufacturers.map(item => (
                <ComboboxOption
                  key={item}
                  value={item}
                  className="search-manufacturer__option relative"
                >
                  {item}
                </ComboboxOption>
              ))
            )}
          </ComboboxOptions>
        </div>
      </Combobox> */}
    </div>
  )
}

export default SearchManufacturer
