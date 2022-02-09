// @ts-nocheck
import { useEffect, useState } from 'react'
import ListBox from './ListBox'

export default function Filter({ data }) {
  // user choice
  const [productsOption, setProductsOption] = useState('Products')
  const [stateOption, setStateOption] = useState('State')
  const [cityOption, setCityOption] = useState('City')
  // data for context api
  const [filteredData, setFilteredData] = useState([])
  // raw data
  const [rawData, setRawData] = useState([])

  // get the data once it update (data keep updating)
  useEffect(() => {
    setFilteredData(data)
    setRawData(data)
  }, [data])

  // if user choose any of option run filteroptions method
  useEffect(() => {
    filterOptions()
  }, [productsOption, stateOption, cityOption])

  // get items for products dropdown by applying filter on rawData
  const getProductsList = () => {
    const elements = rawData.map((product) => product['product_name'])
    return [...new Set(elements)]
  }

  // get items for state dropdown by applying filter on data that contain productsOption
  const getStateList = () => {
    const productData = rawData.filter(
      (product) =>
        productsOption === 'Products' ||
        product['product_name'] === productsOption
    )
    const elements = productData.map(({ address }) => address['state'])

    return [...new Set(elements)]
  }

  // get items for city dropdown by applying filter on data that contain productsOption && stateOption
  const getCityList = () => {
    const productData = rawData.filter(
      (product) =>
        productsOption === 'Products' ||
        product['product_name'] === productsOption
    )
    const stateData = productData.filter(
      (product) =>
        stateOption === 'State' || product['address']['state'] === stateOption
    )
    const elements = stateData.map(({ address }) => address['city'])

    return [...new Set(elements)]
  }

  // create method that returns an array of 3 object contain filters to be filtered
  const createFilterArray = () => {
    const arr = [
      { level: 1, idx: 'product_name', value: productsOption },
      { level: 2, idx: 'state', value: stateOption },
      { level: 2, idx: 'city', value: cityOption },
    ]
    arr = arr.filter((item) => {
      if (
        item['value'] == 'Products' ||
        item['value'] == 'State' ||
        item['value'] == 'City'
      )
        return false

      return true
    })

    return arr
  }

  // filter method to filter the raw data based on filter array and then set it to filteredData state to be used in context
  const filterOptions = () => {
    const arr = createFilterArray()

    const filtered = rawData.filter((item) => {
      for (let i = 0; i < arr.length; i++) {
        const key = arr[i]
        if (
          key.level === 1 &&
          (item[key.idx] === undefined || item[key.idx] != key.value)
        )
          return false
        else if (
          key.level === 2 &&
          (item['address'][key.idx] === undefined ||
            item['address'][key.idx] != key.value)
        ) {
          return false
        }
      }
      return true
    })

    setFilteredData(filtered)
  }

  // callbacks methods to get data from child components
  const productsCallback = (childData) => {
    setProductsOption(childData)
  }
  const stateCallback = (childData) => {
    setStateOption(childData)
  }
  const cityCallback = (childData) => {
    setCityOption(childData)
  }
  return (
    <>
      <form>
        <div className="flex items-center justify-center w-60">
          <div className="rounded-[24px] bg-edvora-dark-gray px-8 py-7 pb-10">
            <h1 className="text-lg text-edvora-light-gray">Filters</h1>
            <hr className="border-edvora-light-gray" />
            <div className="mt-8 space-y-4 ">
              <ListBox
                optionName={'Products'}
                data={['Products', ...getProductsList()]}
                idx={'z-20'}
                callback={productsCallback}
              />
              <ListBox
                optionName={'State'}
                data={['State', ...getStateList()]}
                idx={'z-10'}
                callback={stateCallback}
              />
              <ListBox
                optionName={'City'}
                data={['City', ...getCityList()]}
                idx={'z-0'}
                callback={cityCallback}
              />
            </div>
          </div>
        </div>
      </form>
    </>
  )
}
