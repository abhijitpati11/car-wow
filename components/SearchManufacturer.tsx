"use client";

import React from 'react';
import { searchManufacturerProps } from '@/types';
import Image from 'next/image';
import { useState, Fragment } from 'react';

import { Combobox, Transition } from '@headlessui/react';
import { manufacturers } from '@/constants';


const SearchManufacturer = ({ manufacturer, setManufacturer }: searchManufacturerProps) => {

  const [querry, setQuerry] = useState('');

  
  // if the serch bar is empty we show all the manufacturers else we map the respective object and show desired outputs for our safety we also convert all to lowercase and teh replace arguement tells that for audi - Audi, audi, a udi a   udi will all be the same 
  const filteredManufacturers = 
  querry === "" 
  ? manufacturers 
  : manufacturers.filter((item) => (
    item.toLowerCase()
    .replace(/\s+/g, "")
    .includes(querry.toLowerCase().replace(/\s+/g, ""))
  ))

  return (
    <div className='search-manufacturer'>
      <Combobox value={manufacturer} onChange={setManufacturer}>
        <div className='relative w-full'>
          <Combobox.Button className='absolute top-[14px]'>
            <Image 
              src="/car-logo.svg"
              alt='car-logo'
              width={20}
              height={20}
              className='ml-4'
            />
          </Combobox.Button>

          <Combobox.Input 
            className='search-manufacturer__input'
            placeholder='Volkswagen'
            displayValue={(manufacturer: string) => manufacturer}
            onChange={(e) => setQuerry(e.target.value)}
          />

          <Transition
           as={Fragment}
           leave='transition ease-in duration-100'
           leaveFrom='opacity-100'
           leaveTo='opacity-0'
           afterLeave={() => setQuerry('')}
          >
            
            <Combobox.Options>
              {/* if we donot have the search result we tell sorry else we keep suggesting as per user */}
              {filteredManufacturers.length === 0 && querry !== "" ? (
                <Combobox.Option
                  value={querry}
                  className='search-manufacturer__option'
                >
                  Sorry!! No Match Found
                </Combobox.Option>
              ) : (
                filteredManufacturers.map((item) => (
                  <Combobox.Option
                    key={item}
                    value={item}
                    className={({active}) => `
                    relative search-manufacturer__option ${active ? 'bg-primary-blue text-white border border-x-2' : 'text-gray-900'}`}
                  >
                    {({ selected, active}) => (
                      <>
                      
                        <span
                          className={`block truncate ${
                            selected ? 'font-medium' : 'font-normal'
                          }`}
                        >
                          {item}
                        </span>
                        {selected ? (
                          <span
                            className={`absolute inset-y-0 left-0 flex items-center pl-3 ${
                              active ? 'text-white' : 'text-teal-600'
                            }`}
                          >
                          </span>
                        ) : null}
                      </>
                    )}
                  </Combobox.Option>
                ))
              )}
            </Combobox.Options>

          </Transition>
          
        </div>
      </Combobox>
    </div>
  )
}

export default SearchManufacturer;
