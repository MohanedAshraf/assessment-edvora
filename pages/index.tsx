// @ts-nocheck
import { useState, useEffect } from 'react'
import Head from 'next/head'
import Filter from './components/Filter'
import ProductCard from './components/ProductCard'
import SimpleCarousel from './components/SimpleCarousel'

export default function Home() {
  const [data, setData] = useState([])
  useEffect(() => {
    fetch('https://assessment-edvora.herokuapp.com/')
      .then((response) => response.json())
      .then((data) => setData(data))
  }, [])

  const getFilterItems = (level, key) => {
    let elements
    if (level === 1) elements = data.map((product) => product[key])
    if (level === 2) elements = data.map(({ address }) => address[key])
    return [...new Set(elements)]
  }
  return (
    <>
      <Head>
        <title>Edvora</title>
      </Head>
      {console.log('data', data)}
      <div className=" bg-edvora-gray">
        <div className="container h-max font-body">
          <div className="flex flex-row pt-10">
            <div className="items-start mr-10 basis-1/4">
              <Filter
                products={getFilterItems(1, 'product_name')}
                state={getFilterItems(2, 'state')}
                city={getFilterItems(2, 'city')}
              />
            </div>
            <div className="w-full h-full">
              <h1 className="text-5xl font-bold text-gray-200">Edvora</h1>
              <h2 className="mt-8 text-2xl font-semibold text-edvora-light-gray">
                Products
              </h2>
              <div className="w-10/12">
                <SimpleCarousel productName={'Product Name'} />
                <SimpleCarousel productName={'Product Name'} />
                <SimpleCarousel productName={'Product Name'} />
                <SimpleCarousel productName={'Product Name'} />
                <SimpleCarousel productName={'Product Name'} />
                <SimpleCarousel productName={'Product Name'} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
