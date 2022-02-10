// @ts-nocheck
import { useState, useEffect } from 'react'
import Head from 'next/head'
import Filter from './components/Filter'
import ProductCard from './components/ProductCard'
import SimpleCarousel from './components/SimpleCarousel'

export default function Home() {
  const [data, setData] = useState([])
  const [filteredData, setFilteredData] = useState([])
  const [productsArrs, setProductsArrs] = useState(null)
  // fetch api data when components are mounted
  useEffect(() => {
    fetch('https://assessment-edvora.herokuapp.com/')
      .then((response) => response.json())
      .then((data) => setData(data))
  }, [])

  // call separateProductData whenever filteredData changed
  useEffect(() => {
    setProductsArrs(separateProductData(filteredData))
  }, [filteredData])

  // callback to take filteredData from filter component as child ->  parent
  const filteredDataCallback = (childData) => {
    setFilteredData(childData)
  }

  // separate filteredData that comes from filter component into Array of arrays
  const separateProductData = () => {
    const productNames = [
      ...new Set(filteredData.map((product) => product['product_name'])),
    ]
    let products = []
    productNames.forEach((name) => {
      const elements = filteredData.filter(
        (product) => name === product['product_name']
      )
      products.push(elements)
    })
    return products
  }
  return (
    <>
      <Head>
        <title>Edvora</title>
      </Head>

      <div className="min-h-screen w-auto overflow-auto bg-edvora-gray">
        <div className="container h-max font-body">
          <div className="flex flex-col pt-10 xl:flex-row">
            <div className="mr-10 flex w-screen justify-center xl:w-72">
              <Filter data={data} filteredDataCallback={filteredDataCallback} />
            </div>
            <div className="h-full w-full p-4 xl:p-0">
              <h1 className="mt-7 text-3xl font-bold text-gray-200 xl:mt-0 xl:text-5xl">
                Edvora
              </h1>
              <h2 className="mt-8 text-xl font-semibold text-edvora-light-gray xl:text-2xl">
                Products
              </h2>
              <div className="min-w-screen xl:w-10/12">
                {productsArrs &&
                  productsArrs.map((productArr) => {
                    return (
                      <SimpleCarousel
                        key={productArr[0]['product_name']}
                        productName={productArr[0]['product_name']}
                        products={productArr}
                      />
                    )
                  })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
