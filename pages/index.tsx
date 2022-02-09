// @ts-nocheck
import { useState, useEffect } from 'react'
import Head from 'next/head'
import Filter from './components/Filter'
import ProductCard from './components/ProductCard'
import SimpleCarousel from './components/SimpleCarousel'

export default function Home() {
  const [data, setData] = useState([])
  const [filiteredData, setFiliteredData] = useState([])
  const [productsArrs, setProductsArrs] = useState(null)
  // fetch api data when components are mounted
  useEffect(() => {
    fetch('https://assessment-edvora.herokuapp.com/')
      .then((response) => response.json())
      .then((data) => setData(data))
  }, [])

  // call separateProductData whenever filiteredData changed
  useEffect(() => {
    setProductsArrs(separateProductData(filiteredData))
  }, [filiteredData])

  // callback to take filiteredData from filter component as child ->  parent
  const filteredDataCallback = (childData) => {
    setFiliteredData(childData)
  }

  // separate filiteredData that comes from filter component into Array of arrays
  const separateProductData = () => {
    const productNames = [
      ...new Set(filiteredData.map((product) => product['product_name'])),
    ]
    let products = []
    productNames.forEach((name) => {
      const elements = filiteredData.filter(
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
      {console.log('data', data)}
      {console.log('filitered', filiteredData)}
      {console.log('products', productsArrs)}

      <div className=" bg-edvora-gray">
        <div className="container h-max font-body">
          <div className="flex flex-row pt-10">
            <div className="items-start mr-10 basis-1/4">
              <Filter data={data} filteredDataCallback={filteredDataCallback} />
            </div>
            <div className="w-full h-full">
              <h1 className="text-5xl font-bold text-gray-200">Edvora</h1>
              <h2 className="mt-8 text-2xl font-semibold text-edvora-light-gray">
                Products
              </h2>
              <div className="w-10/12">
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
