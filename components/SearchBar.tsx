"use client";

import React from 'react'
import { SearchManufacturer } from '@/components';
import { useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

const SearchBar = () => {

  const [manufacturer, setManufacturer] = useState('');
  const [model, setModel] = useState('')

  // for searching different cars everytimne we need to call the api with different models every time but here we will change the URL parameter of the page to fetch different data using a Next js 13 server side call
  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if(model === '' && manufacturer === '') {
      return alert('Please Type Something In The Search Bar');
    }

    updateSearchParams(model.toLowerCase(), manufacturer.toLowerCase());

  }

  
  // 
  const router = useRouter();
  const updateSearchParams = (model: string, manufacturer: string) => {
    const searchParams = new URLSearchParams(window.location.search);

    if(model) {
      searchParams.set('model', model);
    }
    else {
      searchParams.delete('model');
    }


    if(manufacturer) {
      searchParams.set('manufacturer', manufacturer);
    }
    else {
      searchParams.delete('manufacturer');
    }

    const newPathName = `${window.location.pathname}?${searchParams.toString()}`

    router.push(newPathName)
  }



  return (
    <form className='searchbar' onSubmit={handleSearch} >
      <div className='searchbar__item'> 
        <SearchManufacturer 
          manufacturer={manufacturer}
          setManufacturer={setManufacturer}
        />
        <SearchButton otherClasses='sm:hidden' />
      </div>

      <div className='searchbar__item'>
        <Image  
          src="/model-icon.png"
          alt='model_icon'
          width={25}
          height={25}
          className='absolute w-[20px] h-[20px] ml-4'
        />
        <input 
          type='text'
          name='model'
          value={model}
          onChange={(e) => setModel(e.target.value)}
          placeholder='Polo'
          className='searchbar__input'
        />
        <SearchButton otherClasses='sm:hidden' />
      </div>
      <SearchButton otherClasses='max-sm:hidden' />
    </form>
  )
}


// re-usable search button
const SearchButton = ({ otherClasses }:{otherClasses: string}) => (
  <button type='submit' className={`-ml-3 z-10 ${otherClasses}`}>
    <Image 
      src='/magnifying-glass.svg'
      alt='search'
      width={40}
      height={40}
      className='object-contain'
    />
  </button>
)

export default SearchBar;
