import Head from 'next/head'
import Filter from './components/Filter'
import ProductCard from './components/ProductCard'
import SimpleCarousel from './components/SimpleCarousel'

export default function Home() {
  return (
    <>
      <Head>
        <title>Edvora</title>
      </Head>
      <div className=" bg-edvora-gray">
        <div className="container h-max font-body">
          <div className="flex flex-row pt-10">
            <div className="items-start mr-10 basis-1/4">
              <Filter />
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
